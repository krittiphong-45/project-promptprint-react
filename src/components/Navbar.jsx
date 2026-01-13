import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="m-4 border-b border-gray-100 pb-4 ">
      <div className="flex justify-between mb-5 ">
        <section>
          <button className="text-3xl">&#9776;</button>
        </section>
        <section>
          <Link to="/" className="flex gap-4">
            <img src="Project Logo.jpg" alt="logo" width={50} className=" rounded-full"/>
            Prompt-Print
          </Link>
        </section>
        
        <section>
          <ul className="flex gap-4">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
            <li>
              <Link to="/membership">Membership</Link>
            </li>
            <li>
              <Link to="/signup">
                <img src="account.svg" alt="log-in" width={30} />
              </Link>
            </li>
          </ul>
        </section>
      </div>

      <div className="flex justify-between gap-4">
        <select className="bg-gray-100 px-5 py-1 rounded-full">
          <option value="newproduct">New Product</option>
        </select>
        <section className="flex gap-4">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 px-3 py-1 rounded-full w-80"
          />
        </section>
        <section>
          <ul className="flex gap-4">
            <li className="border border-gray-300 rounded-full px-3 py-1 hover:bg-gray-200"><Link to = "/men">Men</Link></li>
            <li className="border border-gray-300 rounded-full px-3 py-1 hover:bg-gray-200"><Link to = "/women">Women</Link></li>
            <li className="border border-gray-300 rounded-full px-3 py-1 hover:bg-gray-200"><Link to = "/children">Children</Link></li>
            <li className="border border-gray-300 rounded-full px-3 py-1 hover:bg-gray-200"><Link to = "/brands">Brands</Link></li>
          </ul>
        </section>
      </div>
    </nav>
  );
}
