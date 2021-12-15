import { useEffect, useState } from "react";

import { toJS } from "mobx";
import store from "../../../store/store";
import storeAccount from "../../../store/storeAccount";

import ICardInfo from "../../../store/interface/interfaceCard";
import IDevices from "../../../store/interface/interfaceDevices";

import { Table, Typography } from "antd";

import Space from "../../UI/Space/Space";

const DeviceCategory = () => {
  const [tableDevices, setTableDevices] = useState<ICardInfo[]>([]);
  useEffect(() => {
    updateData();
  }, []);

  const updateData = () => {
    const allItemsDevices: ICardInfo[] = [];
    let allItems: ICardInfo = toJS(store.products.devices);
    for (let items in allItems) {
      for (let fullListItems of allItems[items]) {
        allItemsDevices.push(fullListItems);
        setTableDevices(allItemsDevices);
      }
    }
  };

  const deleteDevices = (items: ICardInfo) => {
    const all: IDevices = JSON.parse(JSON.stringify(store.products.devices));
    Object.entries(all!).forEach(([key, value]) => {
      for (let allItems of value) {
        if (allItems.name === items.name) {
          const indexItem: ICardInfo = all[key].findIndex(
            (item: ICardInfo) => item.name === items.name
          );
          all[key].splice(indexItem, 1);
          store.setDevices(all);
        }
      }
    });
    updateData();
  };

  const devicesColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a: ICardInfo, b: ICardInfo) => a.price - b.price,
    },
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Action",
      key: "action",
      render: (item: ICardInfo) => (
        <>
          <Space>
            <Typography.Link onClick={() => deleteDevices(item)}>
              Delete
            </Typography.Link>
          </Space>
        </>
      ),
    },
  ];
  return (
    <Table
      key={storeAccount.user.id}
      dataSource={tableDevices}
      columns={devicesColumns}
    />
  );
};
export default DeviceCategory;
