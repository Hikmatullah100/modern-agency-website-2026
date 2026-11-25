import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { digitalProducts } from '../data/productsData';
import {
  Download,
  FolderArchive,
  Package,
  User,
  ShieldCheck,
  ExternalLink,
  ChevronRight,
  HardDrive,
} from 'lucide-react';

interface AccountPageProps {
  initialTab?: 'orders' | 'downloads' | 'profile';
}

export const AccountPage: React.FC<AccountPageProps> = ({ initialTab = 'downloads' }) => {
  const [activeTab, setActiveTab] = useState<'orders' | 'downloads' | 'profile'>(initialTab);

  // Sample purchased items available in demo account
  const samplePurchased = [digitalProducts[0], digitalProducts[2], digitalProducts[3]];

  const handleDownload = (title: string) => {
    const element = document.createElement('a');
    const file = new Blob([
      `ZOVRA LABS (ZOVRALABS.COM) - Customer Download Center\nProduct: ${title}\nLicense: Commercial Single User License\nStatus: Verified Active\n\nDemo Notice: In production, this link generates a temporary secure signed URL that streams the master ZIP archive.`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${title.toLowerCase().replace(/[^a-z0-9]/g, '_')}_package.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-[#0B0D12] text-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10 text-left">
        <div className="border-b border-[#232B3E] pb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B7F45B]">
            Customer Portal
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-[#F8FAFC] tracking-tight mt-1 font-heading">
            Account &amp; Digital Downloads
          </h1>
          <p className="text-xs text-[#94A3B8] mt-1">
            Official ZOVRA LABS client portal preview for digital asset management, license keys, and order history.
          </p>
        </div>

        {/* Account Navigation Tabs */}
        <div className="flex items-center gap-6 border-b border-[#232B3E] pb-3 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab('downloads')}
            className={`flex items-center gap-2 pb-2 transition-colors relative ${
              activeTab === 'downloads' ? 'text-[#B7F45B]' : 'text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            <FolderArchive className="w-4 h-4" />
            <span>My Downloads ({samplePurchased.length})</span>
            {activeTab === 'downloads' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B7F45B]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('orders')}
            className={`flex items-center gap-2 pb-2 transition-colors relative ${
              activeTab === 'orders' ? 'text-[#B7F45B]' : 'text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Order History</span>
            {activeTab === 'orders' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B7F45B]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-2 pb-2 transition-colors relative ${
              activeTab === 'profile' ? 'text-[#B7F45B]' : 'text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Customer Profile</span>
            {activeTab === 'profile' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B7F45B]" />
            )}
          </button>
        </div>

        {/* Tab: Downloads */}
        {activeTab === 'downloads' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs text-[#94A3B8]">
              <span>Purchased digital packages ready for download:</span>
              <span className="text-[#83D9C1] font-semibold">Lifetime ZOVRA updates included</span>
            </div>

            <div className="space-y-4">
              {samplePurchased.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-[#121620] border border-[#232B3E] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-[#83D9C1]/40 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-14 rounded-xl overflow-hidden bg-[#0B0D12] border border-[#232B3E] shrink-0">
                      <img
                        src={prod.image}
                        alt={prod.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] text-[#B7F45B] font-bold uppercase tracking-wider">{prod.category}</span>
                      <h3 className="text-sm font-bold text-[#F8FAFC] line-clamp-1">{prod.title}</h3>
                      <div className="flex items-center gap-3 text-[11px] text-[#94A3B8]">
                        <span>Format: {prod.fileFormat.split('+')[0]}</span>
                        <span>·</span>
                        <span>Archive: {prod.fileSize}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => handleDownload(prod.title)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#8B7CF6] hover:bg-[#7C6BE6] text-white font-bold text-xs transition-colors shadow-lg shadow-[#8B7CF6]/20"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download ZIP</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Orders */}
        {activeTab === 'orders' && (
          <div className="bg-[#121620] border border-[#232B3E] rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-base font-bold text-[#F8FAFC]">Recent Orders (ZOVRA Demo View)</h2>
            <div className="border border-[#232B3E] rounded-xl overflow-hidden">
              <table className="w-full text-left text-xs text-[#94A3B8]">
                <thead className="bg-[#0B0D12] border-b border-[#232B3E] text-[#F8FAFC]">
                  <tr>
                    <th className="p-3">Order ID</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Items</th>
                    <th className="p-3">Total</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#232B3E]">
                  <tr>
                    <td className="p-3 font-mono font-bold text-[#B7F45B]">#ZVR-98214</td>
                    <td className="p-3">October 2026</td>
                    <td className="p-3 text-[#F8FAFC]">3 ZOVRA Digital Packages</td>
                    <td className="p-3 font-mono font-bold text-[#F8FAFC]">$167.00</td>
                    <td className="p-3 text-[#83D9C1] font-semibold">Completed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab: Profile */}
        {activeTab === 'profile' && (
          <div className="bg-[#121620] border border-[#232B3E] rounded-2xl p-6 sm:p-8 space-y-4 max-w-xl">
            <h2 className="text-base font-bold text-[#F8FAFC]">Account Profile (ZOVRA Demo)</h2>
            <div className="space-y-3 text-xs text-[#94A3B8]">
              <div>
                <span className="text-[#F8FAFC] font-semibold block">Registered Email:</span>
                <span>customer@zovralabs.com</span>
              </div>
              <div>
                <span className="text-[#F8FAFC] font-semibold block">Authentication Status:</span>
                <span>Demo Session Active (ZOVRA LABS Authentication integration ready for production)</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
