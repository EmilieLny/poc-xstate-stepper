import { useMachine } from "@xstate/react";
import { firstMachine } from "../machines/firstMachine";

export const FirstPage = () => {
  const [state, send] = useMachine(firstMachine);
  return (
    <div>
      <button onClick={() => send("ONCLICK")} onBlur={() => send("ONBLUR")}>
        {JSON.stringify(state.value)}
      </button>
    </div>
  );
};
