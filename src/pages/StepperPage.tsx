import { useMachine } from "@xstate/react";
import { stepperMachine } from "../machines/stepperMachine";
import { Button, Card, Col, Row, Input } from "antd";

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
    // send({ type: "BackToPersonal" });
  };
  const onNext = () => {
    // send({ type: "CompletedPersonal", name: "TestName" });
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
        <Input
          value={context.name}
          onChange={(e) =>
            send({
              type: "NameChanged",
              data: e.target.value,
            })
          }
        />
        <Button onClick={onBack}>Back</Button>
        <Button onClick={onNext} type="primary" disabled={!context?.name}>
          Next
        </Button>
      </Col>
    </Row>
  );
};
