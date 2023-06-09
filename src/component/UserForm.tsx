import { useState } from "react";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import Address from "./Address";
import ReCAPTCHA from "react-google-recaptcha";
import "../index.css";

const UserForm = () => {
  const [valid, setValid] = useState(false);
  const [check, setCheck] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [form] = Form.useForm();

  const onChange = () => {
    setValid(true);
  };

  const isCheck = () => {
    setCheck(!check);
  };
  const onFinish = (values: object) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: object) => {
    console.log("Failed:", errorInfo);
  };

  const handleValuesChange = (_: object, allValues: object) => {
    const isFormFilled = Object.values(allValues).every(
      (value) => value !== undefined && value !== ""
    );
    setIsButtonDisabled(!isFormFilled);
  };

  return (
    <>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        className="userForm"
        validateTrigger="onBlur"
        onValuesChange={handleValuesChange}
      >
        <Row gutter={[16, 8]}>
          <Col span={12}>
            <Form.Item
              label="First Name"
              name="firstname"
              rules={[
                { required: true, message: "Please input your username!" },
                { min: 3, message: "Minimum 3 words!" },
              ]}
            >
              <Input placeholder="Enter first name" maxLength={30} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Last Name"
              name="lastname"
              rules={[
                { required: true, message: "Please input your email!" },
                { min: 2, message: "Minimun 2 words!" },
              ]}
            >
              <Input placeholder="Enter last name" maxLength={30} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Enter email address" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Mobile number"
              name="mobile"
              rules={[
                {
                  required: true,
                  message: "Please input your mobile number!",
                },
                {
                  min: 10,
                  message: "Minimum 10 digits!",
                },
                {
                  max: 10,
                  message: "Maximum 10 digits!",
                },
              ]}
            >
              <Input placeholder="Enter mobile number" type="number" />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Address />
          </Col>
        </Row>
        <Form.Item name="acept" valuePropName="checked">
          <Checkbox onChange={isCheck}>I agree</Checkbox>
        </Form.Item>
        <Form.Item name="captcha">
          <ReCAPTCHA
            sitekey="6LdWGnwmAAAAANjj9L9Ub1OKJ1FeW_nK7s4VPQMr"
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item style={{ marginTop: "10px" }}>
          <Button
            type="primary"
            htmlType="submit"
            disabled={!valid || !check || isButtonDisabled}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default UserForm;
