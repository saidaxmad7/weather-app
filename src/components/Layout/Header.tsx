import { ConfigProvider } from "antd";
import HeaderBtn from "../btns/HeaderBtn";
import type { Units } from "./Layout";

interface Props {
    units: Units;
    onChangeUnits: (units: Units) => void;
}

function Header({ units, onChangeUnits }: Props) {
    return (
        <header className='pt-8 pb-8'>
            <div className='container flex justify-between'>
                <img src='/logo.svg' alt='site logo' />

                <ConfigProvider
                    theme={{
                        components: {
                            Dropdown: {
                                colorBgElevated: "var(--neutral-700)",
                            },
                        },
                    }}
                >
                    <HeaderBtn units={units} onChange={onChangeUnits} />
                </ConfigProvider>
            </div>
        </header>
    );
}

export default Header;
