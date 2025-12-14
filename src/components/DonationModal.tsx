import { useState } from 'react';
import { X, Loader, Heart } from 'lucide-react';
import { processDonation } from '../services/paymentService';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [step, setStep] = useState<'amount' | 'info' | 'method'>('amount');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'chapa' | 'telebirr' | 'bank' | 'mobile'>('chapa');
  const [donorInfo, setDonorInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAmountSelect = (value: string) => {
    setAmount(value);
    setStep('info');
    setError(null);
  };

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorInfo.firstName || !donorInfo.lastName || !donorInfo.email || !donorInfo.phone) {
      setError('Please fill in all fields');
      return;
    }
    setStep('method');
    setError(null);
  };

  const handlePayment = async () => {
    if (!amount) {
      setError('Please select an amount');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await processDonation(
        parseFloat(amount),
        paymentMethod,
        donorInfo
      );

      if (result.status === 'success' && result.data?.checkout_url) {
        // Redirect to payment gateway
        window.location.href = result.data.checkout_url;
      } else {
        setError(result.message || 'Payment processing failed');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#004d40] to-[#00695c] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Make a Donation</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {error && (
            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg mb-4 text-sm">
              {error}
            </div>
          )}

          {/* Step 1: Amount */}
          {step === 'amount' && (
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Select a donation amount (in Ethiopian Birr)
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['100', '500', '1000', '5000', '10000'].map((value) => (
                  <button
                    key={value}
                    onClick={() => handleAmountSelect(value)}
                    className="p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-[#004d40] dark:hover:border-[#4db8a8] transition-colors text-center font-semibold dark:text-white"
                  >
                    {value} ETB
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Custom Amount (ETB)
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter custom amount"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#004d40] dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
          )}

          {/* Step 2: Donor Info */}
          {step === 'info' && (
            <form onSubmit={handleInfoSubmit} className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Please provide your information
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={donorInfo.firstName}
                    onChange={(e) => setDonorInfo({ ...donorInfo, firstName: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#004d40] dark:bg-gray-700 dark:text-white"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={donorInfo.lastName}
                    onChange={(e) => setDonorInfo({ ...donorInfo, lastName: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#004d40] dark:bg-gray-700 dark:text-white"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={donorInfo.email}
                  onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#004d40] dark:bg-gray-700 dark:text-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={donorInfo.phone}
                  onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#004d40] dark:bg-gray-700 dark:text-white"
                  placeholder="+251 9XX XXX XXX"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setStep('amount')}
                  className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-semibold"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-[#004d40] text-white rounded-lg hover:bg-[#00695c] transition-colors font-semibold"
                >
                  Next
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Payment Method */}
          {step === 'method' && (
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Select a payment method
              </p>
              <div className="space-y-3">
                {[
                  { id: 'chapa', name: 'Chapa', icon: '💳', description: 'Card & Mobile Money' },
                  { id: 'telebirr', name: 'Telebirr', icon: '📱', description: 'Ethio Telecom' },
                  { id: 'bank', name: 'Bank Transfer', icon: '🏦', description: 'Direct Bank Transfer' },
                  { id: 'mobile', name: 'Mobile Money', icon: '📞', description: 'Ethio Telecom *144#' },
                ].map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id as any)}
                    className={`w-full p-4 border-2 rounded-lg transition-colors text-left ${
                      paymentMethod === method.id
                        ? 'border-[#004d40] bg-[#004d40]/10 dark:bg-[#004d40]/20'
                        : 'border-gray-300 dark:border-gray-600 hover:border-[#004d40]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{method.icon}</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{method.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{method.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-400 px-4 py-3 rounded-lg text-sm">
                <p className="font-semibold mb-1">Demo Mode</p>
                <p>This is a demo. No actual charges will be made.</p>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setStep('info')}
                  className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-semibold"
                >
                  Back
                </button>
                <button
                  onClick={handlePayment}
                  disabled={loading}
                  className="flex-1 px-4 py-2 bg-[#004d40] text-white rounded-lg hover:bg-[#00695c] disabled:bg-gray-400 transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    `Donate ${amount} ETB`
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
