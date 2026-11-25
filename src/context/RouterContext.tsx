import React, { createContext, useContext, useState, useEffect } from 'react';

interface RouterContextType {
  path: string;
  navigate: (to: string) => void;
  isPathActive: (targetPath: string, exact?: boolean) => boolean;
}

const RouterContext = createContext<RouterContextType>({
  path: '/',
  navigate: () => {},
  isPathActive: () => false,
});

export const useRouter = () => useContext(RouterContext);

// Normalize path: strip trailing slash except for root, ensure leading slash
export const normalizePath = (p: string): string => {
  if (!p || p === '/') return '/';
  let clean = p.split('?')[0].split('#')[0];
  if (!clean.startsWith('/')) clean = '/' + clean;
  if (clean.length > 1 && clean.endsWith('/')) {
    clean = clean.slice(0, -1);
  }
  return clean;
};

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [path, setPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return normalizePath(window.location.pathname);
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setPath(normalizePath(window.location.pathname));
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    const target = normalizePath(to);
    if (target !== path) {
      window.history.pushState({}, '', target);
      setPath(target);
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isPathActive = (targetPath: string, exact = false) => {
    const normalizedTarget = normalizePath(targetPath);
    if (exact || normalizedTarget === '/') {
      return path === normalizedTarget;
    }
    return path.startsWith(normalizedTarget);
  };

  return (
    <RouterContext.Provider value={{ path, navigate, isPathActive }}>
      {children}
    </RouterContext.Provider>
  );
};

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  exact?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  to,
  children,
  className = '',
  activeClassName = '',
  exact = false,
  onClick,
  ...rest
}) => {
  const { navigate, isPathActive } = useRouter();
  const isActive = isPathActive(to, exact);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      navigate(to);
    }
  };

  const finalClassName = `${className} ${isActive ? activeClassName : ''}`.trim();

  return (
    <a href={to} onClick={handleClick} className={finalClassName} {...rest}>
      {children}
    </a>
  );
};
