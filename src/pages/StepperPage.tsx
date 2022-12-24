import { useMachine } from "@xstate/react";
import { stepperMachine } from "../machines/stepperMachine";
import { Button, Card } from "antd";

export const StepperPage = () => {
  const [state, send] = useMachine(stepperMachine);
  const onBack = () => {
    send({ type: "BackToPersonal" });
  };
  const onNext = () => {
    send({ type: "CompletedPersonal", name: "TestName" });
  };

  return (
    <div>
      <Button onClick={onBack}>Back</Button>
      <Button onClick={onNext} type="primary">
        Next
      </Button>
      <Card style={{ width: 300 }}>
        {JSON.stringify(state.value, undefined, 2)}
      </Card>
    </div>
  );
};
