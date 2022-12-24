import { createMachine } from "xstate";

export const firstMachine = createMachine({
  initial: "clicked",
  states: {
    clicked: {
      on: {
        ONBLUR: {
          target: "blured",
        },
      },
    },
    blured: {
      on: {
        ONCLICK: {
          target: "clicked",
        },
      },
    },
  },
});
