import { useMachine } from "@xstate/react";
import { clickedMachine } from "../machines/clickedMachine";
import { Button } from "antd";

export const ClickedPage = () => {
  const [state, send] = useMachine(clickedMachine);
  return (
    <div>
      <Button onClick={() => send("ONCLICK")} onBlur={() => send("ONBLUR")}>
        {JSON.stringify(state.value)}
      </Button>
    </div>
  );
};
