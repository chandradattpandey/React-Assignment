import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Button, Input, Row, Col, Card, Select } from "antd";

const { Option } = Select;
const Address = () => {
  return (
    <Form.List name="Address" initialValue={[{}]}>
      {(fields, { add, remove }) => {
        return (
          <div>
            {fields.map((field, index) => (
              <Card
                key={index}
                style={{
                  border: "1px solid black",
                  marginBottom: "30px",
                }}
              >
                <Row justify={"space-between"} style={{ marginBottom: "20px" }}>
                  <label style={{ fontWeight: "bold" }}>
                    Address #{index + 1}
                  </label>
                  {fields.length > 1 ? (
                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                  ) : null}
                </Row>

                <div key={field.key}>
                  <Row gutter={[2, 10]}>
                    <Col span={24}>
                      <Form.Item
                        label="Address"
                        name={[index, "address"]}
                        rules={[
                          {
                            required: true,
                            message: "Please input your address!",
                          },
                          {
                            min: 3,
                            message: "Minimun 3 words!",
                          },
                        ]}
                      >
                        <Input placeholder="Enter current address" />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        label="Address 2 (Optional)"
                        name={[index, "address2"]}
                        rules={[
                          { message: "Please input your address!" },
                          {
                            min: 3,
                            message: "Minimum 3 words!",
                          },
                        ]}
                      >
                        <Input placeholder="Enter current address" />
                      </Form.Item>
                    </Col>

                    <Col span={8}>
                      <Form.Item
                        name={[index, "country"]}
                        label="Country"
                        rules={[
                          {
                            required: true,
                            message: "Please input your country!",
                          },
                        ]}
                      >
                        <Select placeholder="Select a option" allowClear>
                          <Option value="India">India</Option>
                          <Option value="US">US</Option>
                          <Option value="Paris">Paris</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item
                        name={[index, "state"]}
                        label="State"
                        rules={[
                          {
                            required: true,
                            message: "Please input your state!",
                          },
                        ]}
                      >
                        <Select placeholder="Select a option" allowClear>
                          <Option value="Uttarakhand">Uttarakhand</Option>
                          <Option value="Delhi">Delhi</Option>
                          <Option value="Haryana">Haryana</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item
                        label="Pincode"
                        name={[index, "pincode"]}
                        rules={[
                          {
                            required: true,
                            message: "Please input your pincode!",
                          },
                          {
                            min: 6,
                            message: "Minimum 6 digits!",
                          },
                          {
                            max: 6,
                            message: "Maximum 6 digits!",
                          },
                        ]}
                      >
                        <Input placeholder="Enter pincode" type="number" />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              </Card>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                htmlType="button"
                block
              >
                <PlusOutlined /> Add Address
              </Button>
            </Form.Item>
          </div>
        );
      }}
    </Form.List>
  );
};

export default Address;
