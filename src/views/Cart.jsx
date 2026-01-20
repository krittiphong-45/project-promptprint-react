import React from "react";

const Cart = () => {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans antialiased min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Your Cart (2)</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart List (Left) */}
          <div className="flex-grow space-y-6">
            {/* Item 1 */}
            <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex gap-6 items-center">
              <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0"></div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-lg">เสื้อยืด Premium Cotton</h3>
                  <span className="font-bold text-lg">฿890</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  Size: M | Color: White
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50">
                    <button className="px-3 py-1 hover:bg-gray-200 rounded-l-lg">
                      -
                    </button>
                    <span className="px-3 py-1 font-medium text-sm">1</span>
                    <button className="px-3 py-1 hover:bg-gray-200 rounded-r-lg">
                      +
                    </button>
                  </div>
                  <button className="text-sm text-gray-400 hover:text-red-500 underline">
                    Remove
                  </button>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex gap-6 items-center">
              <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0"></div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-lg">
                    กระเป๋าผ้า Canvas รักษ์โลก
                  </h3>
                  <span className="font-bold text-lg">฿490</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  One Size | Color: Natural
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50">
                    <button className="px-3 py-1 hover:bg-gray-200 rounded-l-lg">
                      -
                    </button>
                    <span className="px-3 py-1 font-medium text-sm">1</span>
                    <button className="px-3 py-1 hover:bg-gray-200 rounded-r-lg">
                      +
                    </button>
                  </div>
                  <button className="text-sm text-gray-400 hover:text-red-500 underline">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Summary (Right) */}
          <div className="w-full lg:w-96">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm sticky top-24">
              <h2 className="font-bold text-xl mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-gray-100">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>฿1,380</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>฿50</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (7%)</span>
                  <span>฿100</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-lg">Total</span>
                <span className="font-bold text-2xl">฿1,530</span>
              </div>

              <a
                href="checkout.html"
                className="block w-full py-4 bg-gray-900 text-white rounded-xl font-bold text-center text-lg shadow-lg hover:bg-gray-800 transition-transform hover:scale-[1.02]"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
