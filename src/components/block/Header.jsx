import { LuAlignJustify } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";

import { Link } from 'react-router-dom';
import Button from '../reusable/Button';

const Header = () => {
  return (
    <header className='h-24'>
        <div className='max-w-[1280px] px-16 mx-auto flex h-full items-center justify-between'>
            <section className='flex'>
                <Link to="/">
                    <main>
                        <img src="/logo.svg" alt='PiggyNav-Logo' className='w-40 h-40'/>
                    </main>
                </Link>

               <main className='hidden md:flex mx-12 gap-9 items-center font-semibold text-[#575b5e] '>
                    <nav className='flex items-center gap-0.5'> 
                        <span>Save</span>
                        <span>
                            <IoIosArrowDown size={20}/>
                        </span>
                    </nav>
                    <Link to="/invest">
                        <nav>Invest</nav>
                    </Link>

                    <Link to="/stories">
                        <nav> Stories </nav>

                    </Link>

                    <Link to="/FAQs">
                        <nav> FAQs </nav>
                    </Link> 

                    <nav className="flex items-center gap-0.5">
                        Resources 
                        <span>
                            <IoIosArrowDown size={20}/>
                        </span>
                    </nav>
               </main>
            </section>

            <section className=' hidden md:flex gap-3 font-semibold '>
                <Button 
                    label="Sign in" 
                    borderColor="#122231"
                    
                />

                <Button
                    label="Create Free Account" bgColor="#122231"
                    textColor="#fff"
                />
            </section>

            <section className=" block md:hidden">
                <LuAlignJustify size={30} />
            </section>
        </div>
    </header>
  );
};

export default Header;