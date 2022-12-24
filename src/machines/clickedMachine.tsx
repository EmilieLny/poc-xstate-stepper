import { createMachine } from "xstate";

export const clickedMachine = createMachine(
  {
    initial: "clicked",
    states: {
      clicked: {
        on: {
          ONBLUR: {
            target: "blured",
            actions: "logEvent",
          },
        },
      },
      blured: {
        on: {
          ONCLICK: {
            target: "clicked",
            actions: "logEvent",
          },
        },
      },
    },
  },
  {
    actions: {
      logEvent: (context, event) => console.log(event),
    },
  }
);
