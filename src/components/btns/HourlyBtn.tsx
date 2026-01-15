import { Dropdown, type MenuProps } from "antd";

function HourlyBtn() {
    const items: MenuProps["items"] = [
        {
            label: "Monday",
            key: "0",
        },
        {
            label: "Tuesday",
            key: "1",
        },
        {
            label: "Wednesday",
            key: "2",
        },
        {
            label: "Thursday",
            key: "3",
        },
        {
            label: "Friday",
            key: "5",
        },
        {
            label: "Saturday",
            key: "6",
        },
        {
            label: "Sunday",
            key: "7",
        },
    ];

    return (
        <Dropdown menu={{ items }} trigger={["click"]}>
            <button className='ant-btn' onClick={(e) => e.preventDefault()}>
                Tuesday
                <img src='/icon-dropdown.svg' alt='dropdown' />
            </button>
        </Dropdown>
    );
}

export default HourlyBtn;
