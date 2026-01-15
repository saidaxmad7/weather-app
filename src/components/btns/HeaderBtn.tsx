import { Dropdown, type MenuProps } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { useState } from "react";

function HeaderBtn() {
    const [units, setUnits] = useState({
        temp: "c",
        wind: "kmh",
        precip: "mm",
    });

    const item = (label: string, active: boolean, onClick: () => void) => (
        <div
            onClick={onClick}
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                width: "100%",
            }}
        >
            <span>{label}</span>
            {active && <CheckOutlined />}
        </div>
    );

    const menu: MenuProps = {
        items: [
            { key: "temp-title", label: "Temperature", disabled: true },

            {
                key: "c",
                label: item("Celsius (°C)", units.temp === "c", () =>
                    setUnits({ ...units, temp: "c" })
                ),
            },
            {
                key: "f",
                label: item("Fahrenheit (°F)", units.temp === "f", () =>
                    setUnits({ ...units, temp: "f" })
                ),
            },

            { type: "divider" },

            { key: "wind-title", label: "Wind Speed", disabled: true },

            {
                key: "kmh",
                label: item("km/h", units.wind === "kmh", () =>
                    setUnits({ ...units, wind: "kmh" })
                ),
            },
            {
                key: "mph",
                label: item("mph", units.wind === "mph", () =>
                    setUnits({ ...units, wind: "mph" })
                ),
            },

            { type: "divider" },

            { key: "precip-title", label: "Precipitation", disabled: true },

            {
                key: "mm",
                label: item("Millimeters (mm)", units.precip === "mm", () =>
                    setUnits({ ...units, precip: "mm" })
                ),
            },
            {
                key: "in",
                label: item("Inches (in)", units.precip === "in", () =>
                    setUnits({ ...units, precip: "in" })
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
