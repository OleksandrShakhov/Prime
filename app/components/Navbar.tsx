import Image from 'next/image';
import Logo from '../../public/assets/Logo.png';
import Menu from '../../public/assets/Menu.svg';
import Team from '../../public/assets/teamviewer.webp';

const navLinks = [
  { name: 'About' },
  { name: 'Services' },
  { name: 'Contact Us' },
  { name: 'Customer Area' },
  { name: 'Prime' },
];

export function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto">
      <div className="flex items-center">
        <Image src={Logo} alt="logo" />

        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => (
            <p className="text-[#435f85] font-medium" key={index}>
              {item.name}
            </p>
          ))}
        </div>
      </div>

      <div>
        <Image className="lg:hidden" src={Menu} alt="Menu" />
        <button className="hidden lg:block">
          <Image src={Team} alt="Teamviewer" />
        </button>
      </div>
    </nav>
  );
}
