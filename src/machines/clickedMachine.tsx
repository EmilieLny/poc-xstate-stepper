import { createMachine } from "xstate";

export const clickedMachine = createMachine({
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
