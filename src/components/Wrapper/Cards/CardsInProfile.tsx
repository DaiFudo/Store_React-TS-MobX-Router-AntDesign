import "antd/dist/antd.css";
import Row from "../../UI/Grid/Row/Row";
import { Image, message } from "antd";
//import renderListCardsProfile from "./filterCards/filterCardsProfile";
import ICardInfo from "../../../store/interface/interfaceCard";
import IUser from "../../../store/interface/interfaceUsers";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import { ShoppingOutlined } from "../../UI/Icons/ShoppingOutlined";
import MinusOutlined from "../../UI/Icons/MinusOutlined";
import Meta from "antd/lib/card/Meta";
import Col from "../../UI/Grid/Col/Col";
import statusItemChanger from "../../../app/utils/statusItemChanger";
import byuingItemsUser from "../../../app/utils/byuingItemsUser";
import storeAccount from "../../../store/storeAccount";
import { observer } from "mobx-react-lite";
import { DollarOutlined as AntIcons } from "@ant-design/icons";
import DollarOutlined from "../../UI/Icons/DollarOutlined";
import GroupOutlined from "../../UI/Icons/GroupOutlined";
import { toJS } from "mobx";

const ListCardsInProfile: React.FC<{
  selectMenuItemForProfile: "likes" | "basket" | "buying";
}> = observer((props) => {
  const filterUserCard = storeAccount.user[props.selectMenuItemForProfile];

  return (
    <div>
      <Row gutter={[48, 24]}>
        {filterUserCard!.map((item: ICardInfo) => (
          <Col key={item.id} span={6}>
            <Card
              key={item.id}
              hoverable
              style={{ width: 300 }}
              actions={[
                <Button
                  id={item.id}
                  type="text"
                  onClick={() => statusItemChanger(item, "liked")}
                >
                  <MinusOutlined key={`minuse ${item.id}`} />
                </Button>,
                <Button
                  id={item.id}
                  type="text"
                  onClick={() => statusItemChanger(item, "basket")}
                >
                  <GroupOutlined key={`basket ${item.id}`} />
                </Button>,
                <Button
                  id={item.id}
                  type="text"
                  onClick={() => byuingItemsUser(item, "buying")}
                >
                  <DollarOutlined key={`buying ${item.id}`} />
                </Button>,
              ]}
            >
              <Image src={item.img} />
              <Meta title={item.name} description={`${item.price}$`} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
});
export default ListCardsInProfile;
