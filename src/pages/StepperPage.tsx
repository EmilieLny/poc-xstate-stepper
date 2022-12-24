import { useMachine } from "@xstate/react";
import { stepperMachine } from "../machines/stepperMachine";
import { Button, Card } from "antd";

export const StepperPage = () => {
  const [state, send] = useMachine(stepperMachine, {
    services: {
      completedPersoSection: async () => {
        return "Jacques Chirac";
      },
    },
  });
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
      <Card title="state value" style={{ width: 300 }}>
        <pre>{JSON.stringify(state.value, undefined, 2)}</pre>
      </Card>
      <Card title="context" style={{ width: 300 }}>
        <pre>{JSON.stringify(state.context, undefined, 2)}</pre>
      </Card>
    </div>
  );
};
