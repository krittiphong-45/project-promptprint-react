import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState(null);
  // สมมติ userId ไว้สำหรับการทดสอบ mock
  const userId = localStorage.getItem("userId") || "mock_user_123" ;
  const navigate = useNavigate();

  // --- MOCK DATA ---
  const mockCartData = {
    _id: "cart_mock_001",
    userId: "mock_user_123",
    items: [
      {
        _id: "item_1",
        productId: {
          _id: "p1",
          name: "Mechanical Keyboard G-Pro",
          price: 2500,
          description: "RGB Backlit, Blue Switches, Wired USB",
          imageUrl:
            "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
        },
        quantity: 1,
      },
      {
        _id: "item_2",
        productId: {
          _id: "p2",
          name: "Wireless Gaming Mouse",
          price: 1200,
          description: "Ultra-lightweight, 16000 DPI sensor",
          imageUrl:
            "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
        },
        quantity: 1,
      },
    ],
  };

  useEffect(() => {
    // จำลองการดึงข้อมูลจาก API
    const loadCart = async () => {
      try {
        // ในสถานการณ์จริงจะใช้ fetch ด้านล่างนี้:
        /*
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/cart/${userId}`);
        const data = await response.json();
        setCart(data);
        */

        // สำหรับตอนนี้ใช้ Mock Data:
        setCart(mockCartData);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    loadCart();
  }, [userId]);

  const updateQuantity = async (productId, newQuantity) => {
    if (newQuantity < 1) return;

    // จำลองการ Update ใน UI ทันที (Client-side update for mock)
    const updatedItems = cart.items.map((item) =>
      item.productId._id === productId
        ? { ...item, quantity: newQuantity }
        : item,
    );
    setCart({ ...cart, items: updatedItems });

    console.log(
      `Mock: Updated product ${productId} to quantity ${newQuantity}`,
    );
  };

  const removeItem = async (productId) => {
    // จำลองการ Remove ใน UI ทันที
    const updatedItems = cart.items.filter(
      (item) => item.productId._id !== productId,
    );
    setCart({ ...cart, items: updatedItems });

    console.log(`Mock: Removed product ${productId}`);
  };

  const calculateTotal = () => {
    if (!cart || !cart.items) return 0;
    return cart.items
      .reduce(
        (total, item) => total + (item.productId?.price || 0) * item.quantity,
        0,
      )
      .toFixed(2);
  };

  if (!userId)
    return (
      <div className="text-base p-10">
        Please start shopping to create a session.
      </div>
    );

  return (
    <div className="container mx-auto p-6 min-h-screen  text-white">
      <h1 className="text-3xl font-bold mb-8 bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
        {`Your Shopping Cart (${mockCartData.items.length} items)`}
      </h1>

      {!cart || cart.items.length === 0 ? (
        <div className="text-center py-20 bg-gray-900 rounded-2xl border border-gray-800">
          <p className="text-xl text-gray-400 mb-4">Your cart is empty.</p>
          <button
            onClick={() => navigate("/products")}
            className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
          >
            Browse Products
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-4">
            {cart.items.map((item) => (
              <div
                key={item._id}
                className="bg-gray-900 p-4 rounded-xl border border-gray-800 flex flex-col sm:flex-row items-center gap-4"
              >
                {item.productId?.imageUrl && (
                  <img
                    src={item.productId.imageUrl}
                    alt={item.productId.name}
                    className="w-24 h-24 object-cover rounded-lg bg-gray-800"
                  />
                )}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-bold text-lg">
                    {item.productId?.name || "Product unavailable"}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {item.productId?.description}
                  </p>
                  <p className="text-green-400 font-mono mt-1">
                    ฿{item.productId?.price?.toLocaleString()}
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-gray-800 rounded-lg p-1">
                  <button
                    onClick={() =>
                      updateQuantity(item.productId._id, item.quantity - 1)
                    }
                    className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded text-lg font-bold"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-bold">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      updateQuantity(item.productId._id, item.quantity + 1)
                    }
                    className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded text-lg font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.productId._id)}
                  className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                  title="Remove Item"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 sticky top-4">
              <h2 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2">
                Order Summary
              </h2>
              <div className="flex justify-between mb-2 text-gray-400">
                <span>Subtotal</span>
                <span>฿{Number(calculateTotal()).toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-4 text-gray-400">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-2xl font-bold mb-6 pt-4 border-t border-gray-800">
                <span>Total</span>
                <span className="text-green-400">
                  ฿{Number(calculateTotal()).toLocaleString()}
                </span>
              </div>
              <button
                onClick={() => navigate("/checkout")}
                className="w-full py-4 bg-linear-to-r from-blue-500 to-blue-400 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-blue-500 transition-all shadow-lg shadow-green-900/20"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;