import { useMachine } from "@xstate/react";
import { stepperMachine } from "../machines/stepperMachine";
import { Button, Card, Col, Row, Input, Typography, Radio } from "antd";

export const StepperPage = () => {
  const [state, send] = useMachine(stepperMachine, {
    services: {
      getInitialState: async () => {
        return fetch("https://jsonplaceholder.typicode.com/users/1")
          .then((response) => response.json())
          .then((json) => json.name);
      },
    },
  });
  const onBack = () => {
    send({ type: "OnBack" });
  };
  const onNext = () => {
    send({ type: "OnNext" });
  };

  const { value, context } = state;

  return (
    <Row>
      <Col span={8}>
        <Card title="state value" style={{ textAlign: "left" }}>
          <pre>{JSON.stringify(value, undefined, 2)}</pre>
        </Card>
        <Card title="context" style={{ textAlign: "left" }}>
          <pre>{JSON.stringify(context, undefined, 2)}</pre>
        </Card>
      </Col>

      <Col span={16}>
        {state.matches("Personal") && (
          <>
            <Typography.Title level={3}>What's your name ?</Typography.Title>
            <Input
              value={context.name}
              onChange={(e) =>
                send({
                  type: "NameChanged",
                  data: e.target.value,
                })
              }
            />
          </>
        )}
        {state.matches("Store.PlatformType") && (
          <>
            <Typography.Title level={3}>
              What Platform do you use {context.name} ?
            </Typography.Title>
            <Radio.Group
              options={["shopify", "amazon", "ebay"]}
              onChange={(e) =>
                send({
                  type: "PlatformChanged",
                  data: e.target.value,
                })
              }
              value={context.platform}
              optionType="button"
            />
          </>
        )}
        {state.matches("Store.StoreName") && (
          <>
            <Typography.Title level={3}>
              What the name of your {context.platform} store ?
            </Typography.Title>
            <Input
              value={context.storeName}
              onChange={(e) =>
                send({
                  type: "StoreNameChanged",
                  data: e.target.value,
                })
              }
            />
          </>
        )}
        <Row>
          <Button onClick={onBack}>Back</Button>
          <Button onClick={onNext} type="primary" disabled={!context?.name}>
            Next
          </Button>
        </Row>
      </Col>
    </Row>
  );
};
