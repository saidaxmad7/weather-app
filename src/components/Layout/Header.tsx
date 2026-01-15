import { ConfigProvider } from "antd";
import HeaderBtn from "../btns/HeaderBtn";

function Header() {
    return (
        <header className='pt-8 pb-8'>
            <div className='container flex justify-between'>
                <div className='header-logo'>
                    <img src='/logo.svg' alt='site logo' />
                </div>

                <ConfigProvider
                    theme={{
                        components: {
                            Dropdown: {
                                colorBgElevated: "var(--neutral-700)",
                            },
                        },
                    }}
                >
                    <HeaderBtn />
                </ConfigProvider>
            </div>
        </header>
    );
}

export default Header;
