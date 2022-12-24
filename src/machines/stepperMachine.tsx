import { createMachine } from "xstate";

export const stepperMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5SwC5gA7rAJwHQAUdYB7AOwEMAbAYgGFiBbdSsNCQ7EiygbQAYAuolDpisAJYpxZYSAAeiAEwB2AKy4AHMo0BOPgDZFqgDQgAnogCMlxbj66NAFgDMagL5vTqDFjwBlFGJsMGoAIXIAYwBrABViDi4qfiEkEFEJKRlUhQR9dS1LPh1XE3MlR0tcRQ0bVQ9PEFJiCDhZb0wcWXTJaVJZHIBaS30q5WVnFzVTCwQjXFUHSbqG9t8CIjIqLrEerNAc50rlRUU8w1KZ61t7HScSjy80Dv9A4O2M3v7EZ2c+OxUJiVpuVKtVavU3EA */
  createMachine(
    {
      id: "stepper",
      initial: "Personal",
      schema: {
        events: {} as
          | { type: "CompletedPersonal"; name: string }
          | { type: "BackToPersonal" },
      },

      states: {
        Personal: {
          on: {
            CompletedPersonal: {
              target: "Store",
              actions: "logEvent",
            },
          },
        },
        Store: {
          on: {
            BackToPersonal: {
              target: "Personal",
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
