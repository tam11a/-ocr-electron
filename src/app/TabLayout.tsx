import { Tabs, TabsProps } from "antd";
import React from "react";

const items: TabsProps["items"] = [
	{
		key: "1",
		label: "Images",
		children: "Content of Tab Pane 1",
	},
	{
		key: "2",
		label: "Contents",
		children: "Content of Tab Pane 2",
	},
];

const TabLayout: React.FC = () => {
	return (
		<div>
			<Tabs
				defaultActiveKey="1"
				size="small"
				items={items}
			/>
		</div>
	);
};

export default TabLayout;
