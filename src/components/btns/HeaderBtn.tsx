import { Dropdown, type MenuProps } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import type { Units } from "../Layout/Layout";

interface Props {
    units: Units;
    onChange: (units: Units) => void;
}

function HeaderBtn({ units, onChange }: Props) {
    const menu: MenuProps = {
        onClick: ({ key }) => {
            if (key === "c") onChange({ ...units, temp: "c" });
            if (key === "f") onChange({ ...units, temp: "f" });

            if (key === "kmh") onChange({ ...units, wind: "kmh" });
            if (key === "mph") onChange({ ...units, wind: "mph" });

            if (key === "mm") onChange({ ...units, precip: "mm" });
            if (key === "in") onChange({ ...units, precip: "in" });
        },

        items: [
            { key: "temp-title", label: "Temperature", disabled: true },

            {
                key: "c",
                label: (
                    <div className='flex justify-between'>
                        Celsius (°C)
                        {units.temp === "c" && <CheckOutlined />}
                    </div>
                ),
            },
            {
                key: "f",
                label: (
                    <div className='flex justify-between'>
                        Fahrenheit (°F)
                        {units.temp === "f" && <CheckOutlined />}
                    </div>
                ),
            },

            { type: "divider" },

            { key: "wind-title", label: "Wind Speed", disabled: true },

            {
                key: "kmh",
                label: (
                    <div className='flex justify-between'>
                        km/h
                        {units.wind === "kmh" && <CheckOutlined />}
                    </div>
                ),
            },
            {
                key: "mph",
                label: (
                    <div className='flex justify-between'>
                        mph
                        {units.wind === "mph" && <CheckOutlined />}
                    </div>
                ),
            },

            { type: "divider" },

            { key: "precip-title", label: "Precipitation", disabled: true },

            {
                key: "mm",
                label: (
                    <div className='flex justify-between'>
                        Millimeters (mm)
                        {units.precip === "mm" && <CheckOutlined />}
                    </div>
                ),
            },
            {
                key: "in",
                label: (
                    <div className='flex justify-between'>
                        Inches (in)
                        {units.precip === "in" && <CheckOutlined />}
                    </div>
                ),
            },
        ],
    };

    return (
        <Dropdown menu={menu} trigger={["click"]} placement='bottomRight'>
            <button className='ant-btn'>
                <img src='/icon-units.svg' alt='units' />
                Units
                <img src='/icon-dropdown.svg' alt='dropdown' />
            </button>
        </Dropdown>
    );
}

export default HeaderBtn;
