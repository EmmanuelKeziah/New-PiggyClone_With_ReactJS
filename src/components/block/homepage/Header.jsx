// import { useState } from "react";
// import { LuAlignJustify } from "react-icons/lu";
// import { IoIosArrowDown } from "react-icons/io";
// import { Link } from "react-router-dom";
// import Button from "../../reusable/Button";

// const Header = () => {
//   return (
//     <header className="h-24">
//       <div className="  max-w-[1280px] px-16 mx-auto flex h-full items-center justify-between">
//         <section className="flex">
//           <Link to="/">
//             <main>
//               <img src="/logo.svg" alt="PiggyNav-Logo" className="w-40 h-40" />
//             </main>
//           </Link>

//           <main className="hidden md:flex mx-12 gap-9 items-center font-semibold text-[#575b5e] ">
//             <nav className="flex items-center gap-0.5">
//               <span>Save</span>
//               <span>
//                 <IoIosArrowDown size={20} />
//               </span>
//             </nav>
//             <Link to="/invest">
//               <nav>Invest</nav>
//             </Link>

//             <Link to="/stories">
//               <nav> Stories </nav>
//             </Link>

//             <Link to="/fAQs">
//               <nav> FAQs </nav>
//             </Link>

//             <nav className="flex items-center gap-0.5">
//               Resources
//               <span>
//                 <IoIosArrowDown size={20} />
//               </span>
//             </nav>

//             <Link to="/shop">
//               <nav>Shop</nav>
//             </Link>
//           </main>
//         </section>

//         <section className=" hidden md:flex gap-3 font-semibold ">
//           <Button label="Sign in" borderColor="#122231" />

//           <Button
//             label="Create Free Account"
//             bgColor="#122231"
//             textColor="#fff"
//           />
//         </section>

//         <section className=" block md:hidden">
//           <LuAlignJustify size={30} />
//         </section>
//       </div>
//     </header>
//   );
// };

// export default Header;



import { useState } from "react";
import { LuAlignJustify } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import Button from "../../reusable/Button";

const Header = () => {
  const [save, setSave] = useState(false);
  const [resource, setResource] = useState(false);
  return (
    <header className="h-24">
      <div className="max-w-[1280px] px-16 mx-auto flex h-full items-center justify-between">
        <section className="flex">
          <Link to="/">
            <main>
              <img src="/logo.svg" alt="PiggyNav-Logo" className="w-40 h-40" />
            </main>
          </Link>

          {/* Main Navigation */}
          <main className="hidden md:flex mx-12 gap-9 items-center font-semibold text-[#575b5e]">
            {/* SAVE dropdown */}
            <div className="relative group">
              <nav className="flex items-center gap-1 cursor-pointer">
                <span>Save</span>
                <IoIosArrowDown size={18} />
              </nav>

              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2 w-40 z-50 p-3 space-y-2">
                <Link to="/piggybank" className="block hover:text-blue-500">Piggybank</Link>
                <Link to="/safelock" className="block hover:text-blue-500">Safelock</Link>
                <Link to="/target-savings" className="block hover:text-blue-500">Target Savings</Link>
                <Link to="/flex-naira" className="block hover:text-blue-500">Flex Naira</Link>
              </div>
            </div>

            <Link to="/invest">
              <nav>Invest</nav>
            </Link>

            <Link to="/stories">
              <nav>Stories</nav>
            </Link>

            <Link to="/fAQs">
              <nav>FAQs</nav>
            </Link>

            {/* RESOURCES dropdown */}
            <div className="relative group">
              <nav className="flex items-center gap-1 cursor-pointer">
                <span>Resources</span>
                <IoIosArrowDown size={18} />
              </nav>

              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2 w-40 z-50 p-3 space-y-2">
                <Link to="/blog" className="block hover:text-blue-500">Blog</Link>
                <Link to="/help" className="block hover:text-blue-500">Help Center</Link>
                <Link to="/security" className="block hover:text-blue-500">Security</Link>
              </div>
            </div>

            <Link to="/shop">
              <nav>Shop</nav>
            </Link>
          </main>
        </section>

        {/* Right side buttons */}
        <section className="hidden md:flex gap-3 font-semibold">
          <Button label="Sign in" borderColor="#122231" />
          <Button label="Create Free Account" bgColor="#122231" textColor="#fff" />
        </section>

        {/* Mobile Menu Icon */}
        <section className="block md:hidden">
          <LuAlignJustify size={30} />
        </section>
      </div>
    </header>
  );
};

export default Header;
