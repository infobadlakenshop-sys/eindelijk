import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

function App() {
  const [quantityM, setQuantityM] = useState(0);
  const [quantityL, setQuantityL] = useState(1);

  const PRICE_PER_ITEM = 87.99;
  const SHIPPING_COST = 3.76;

  const calculateTotal = () => {
    const totalItems = quantityM + quantityL;
    return (totalItems * PRICE_PER_ITEM + SHIPPING_COST).toFixed(2);
  };

  const handleQuantityChange = (size: 'M' | 'L', delta: number) => {
    if (size === 'M') {
      const newQuantity = quantityM + delta;
      if (newQuantity >= 0 && newQuantity <= 10) {
        setQuantityM(newQuantity);
      }
    } else {
      const newQuantity = quantityL + delta;
      if (newQuantity >= 0 && newQuantity <= 10) {
        setQuantityL(newQuantity);
      }
    }
  };

  const handleCheckout = () => {
    console.log('Checkout clicked', { quantityM, quantityL, total: calculateTotal() });
  };

  const totalItems = quantityM + quantityL;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-80 sm:h-96 overflow-hidden">
            <img
              src="/Scherm­afbeelding 2025-10-22 om 10.27.54.png"
              alt="Luxe oesters met champagne"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          <div className="p-8 sm:p-12">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">Oesterset</h1>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-semibold text-[#a0978c]">€{PRICE_PER_ITEM}</span>
                <span className="text-sm text-gray-500">per stuk</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">+ €{SHIPPING_COST.toFixed(2)} verzendkosten (brievenbus)</p>
            </div>

            <div className="mb-8 pb-8 border-b border-gray-200">
              <label className="block text-sm font-medium text-gray-700 mb-2">Handschoen maat M</label>
              <p className="text-xs text-gray-500 mb-3">19-20 cm handlengte, handpalm breedte 9-9,5 cm</p>
              <div className="flex items-center gap-4 mb-6">
                <button
                  onClick={() => handleQuantityChange('M', -1)}
                  disabled={quantityM <= 0}
                  className="w-12 h-12 rounded-full bg-gray-100 hover:bg-[#a0978c] hover:text-white disabled:opacity-40 disabled:hover:bg-gray-100 disabled:hover:text-gray-900 transition-all duration-200 flex items-center justify-center shadow-sm"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="text-3xl font-semibold text-gray-900 w-16 text-center">{quantityM}</span>
                <button
                  onClick={() => handleQuantityChange('M', 1)}
                  disabled={quantityM >= 10}
                  className="w-12 h-12 rounded-full bg-gray-100 hover:bg-[#a0978c] hover:text-white disabled:opacity-40 disabled:hover:bg-gray-100 disabled:hover:text-gray-900 transition-all duration-200 flex items-center justify-center shadow-sm"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              <label className="block text-sm font-medium text-gray-700 mb-2">Handschoen maat L</label>
              <p className="text-xs text-gray-500 mb-3">20-21 cm handlengte, handpalm breedte 9,5-10 cm</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleQuantityChange('L', -1)}
                  disabled={quantityL <= 0}
                  className="w-12 h-12 rounded-full bg-gray-100 hover:bg-[#a0978c] hover:text-white disabled:opacity-40 disabled:hover:bg-gray-100 disabled:hover:text-gray-900 transition-all duration-200 flex items-center justify-center shadow-sm"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="text-3xl font-semibold text-gray-900 w-16 text-center">{quantityL}</span>
                <button
                  onClick={() => handleQuantityChange('L', 1)}
                  disabled={quantityL >= 10}
                  className="w-12 h-12 rounded-full bg-gray-100 hover:bg-[#a0978c] hover:text-white disabled:opacity-40 disabled:hover:bg-gray-100 disabled:hover:text-gray-900 transition-all duration-200 flex items-center justify-center shadow-sm"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-6 bg-gray-50 rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Totaal aantal sets</span>
                  <span className="text-lg font-semibold text-gray-900">{totalItems}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-700">Totaalbedrag</span>
                  <span className="text-3xl font-bold text-[#a0978c]">€{calculateTotal()}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={totalItems === 0}
              className="w-full bg-[#a0978c] hover:bg-[#8d8479] text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              Afrekenen - €{calculateTotal()}
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              Veilig betalen via Stripe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
