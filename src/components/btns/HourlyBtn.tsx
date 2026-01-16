import { Dropdown, type MenuProps } from "antd";
import type { ForecastDay } from "../../types/weather";

interface Props {
    days: ForecastDay[];
    activeDay: number;
    onChange: (index: number) => void;
}

function HourlyBtn({ days, activeDay, onChange }: Props) {
    const items: MenuProps["items"] = days.map((day, index) => ({
        key: index.toString(),
        label: new Date(day.date).toLocaleDateString("en-US", {
            weekday: "long",
        }),
        onClick: () => onChange(index),
    }));

    const activeLabel = new Date(days[activeDay].date).toLocaleDateString(
        "en-US",
        { weekday: "long" }
    );

    return (
        <Dropdown menu={{ items }} trigger={["click"]}>
            <button className='ant-btn' onClick={(e) => e.preventDefault()}>
                {activeLabel}
                <img src='/icon-dropdown.svg' alt='dropdown' />
            </button>
        </Dropdown>
    );
}

export default HourlyBtn;
