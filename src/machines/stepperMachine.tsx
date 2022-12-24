import { createMachine, assign } from "xstate";

export const stepperMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5SwC5gA7rAJwHQAUdYB7AOwEMAbAYgjLFwEtSA3YgawdQyz0OxIVKCZmwDG5FIzIBtAAwBdeQsSh0xWIyllVIAB6IALAHYAbLgAcFgKwAmYwGYAjMYu3Tcp9YA0IAJ6IALSGDnK4rg7W1o6GcgCcThYOAL7JvtyYOAREZFTUONjEeOiUkgBmRQC2uBm82QK5wqLEEtqkysq66pptugYIgZFxuHG2LqZeHrbWcnI+-kGxFiNe8Q6jDoamcXHWqelomXw5QrgAcuSVYACSpOgArijUF1cAwgAW5KQwEJ1IIN0tNJSH1ENFcJ45A5bHFoY43G5fAEBk4HA4IYYxk4dsZrKZTFFjPsQLUsgBlFBFMDUABC5DE7AAKsR+IIqH81BogTp-v1AtNjLhrKFrCE4q44oY8UjEC5LJF4rZbFY5BZJUS0iTDnVWY1qGRdUJXsRKiUwGhfooulzerzZU5bLhnE4XXIpcZdlsnDKELZ0YZXbY5I4PYYtm5UprSMQIHBdKTsNaesDQQNYoLRuNJnJprN5sjAtZErhlZFolKQutDMSE-U2ZQk9yQXaEGElXE5KZodNYX6ZokfYNQhixsHjO5cbjq5ra4aqOdLjc7o9G7bQP1DMt253u9Ze5FB9jrELMS6XWjYesUjPteTKdgwKuUy3+ceYZtJar1viLF2faj0TsIsxmFWJUS8SNkiAA */
  createMachine(
    {
      id: "stepper",
      initial: "Personal",
      schema: {
        services: {} as {
          getInitialState: {
            data: string;
          };
        },
        events: {} as {
          type: "NameChanged";
          data: string;
        },
      },
      context: {
        name: "" as string,
        errorMsg: undefined as string | undefined,
      },
      tsTypes: {} as import("./stepperMachine.typegen").Typegen0,
      states: {
        Personal: {
          invoke: {
            src: "getInitialState",
            onDone: {
              actions: "assignNameToContext",
            },
            onError: {
              actions: "assignNameErrorToContext",
            },
          },

          states: {
            NameInput: {
              on: {
                NameChanged: {
                  actions: "assignNameToContext",
                },
              },
            },
          },

          initial: "NameInput",

          //   on: {
          //     onPersonalCompleted: "Store",
          //   },
        },
        // Store: {
        //   on: {
        //     BackToPersonal: {
        //       target: "Personal",
        //       actions: "logEvent",
        //     },
        //   },
        // },
      },
    },
    {
      actions: {
        // logEvent: (context, event) => console.log(event),
        assignNameToContext: assign((context, event) => ({
          name: event?.data || "",
        })),
        assignNameErrorToContext: assign((context, event) => ({
          errorMsg: (event.data as Error).message,
        })),

        // assignNameInputToContext: assign((context, event) => ({
        //   name: event.value,
        // })),
      },
    }
  );
