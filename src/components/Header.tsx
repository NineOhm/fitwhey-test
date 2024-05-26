import Badge from '@mui/material/Badge';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header className="fixed w-full bg-gradient-to-b from-neutral-800 pointer-events-none  z-10 p-2">
            <div className="flex justify-between items-center p-3 relative">
                <div className="flex items-center">
                    <button aria-label='Back'>
                        <Image width={10} height={10} src="/icon/white-back-arrow-icon.svg" alt="Back" />
                    </button>
                </div>
                <div className="flex items-center space-x-4">
                    <button aria-label='Cart'>
                        <Badge badgeContent={4} color="error">
                            <Image width={25} height={25} src="/icon/cart-icon.svg" alt="Cart" />
                        </Badge>
                    </button>
                    <button aria-label='Message'>
                        <Badge badgeContent={4} color="error">
                            <Image width={22} height={22} src="/icon/message-icon.svg" alt="Message" />
                        </Badge>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
