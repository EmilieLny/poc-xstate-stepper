import { createMachine, assign } from "xstate";

export const stepperMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5SwC5gA7rAJwHQAUdYB7AOwEMAbAYgjLFwEtSA3YgawdQyz0OxIVKCZmwDG5FIzIBtAAwBdeQsSh0xWIyllVIAB6IATAFY5uABwBOACzGAzAEYTAGhABPRE8O4H189bsAdmMAXxDXbkwcAiIyKmocbGI8dEpJADNkgFtcSN4YgTjhUWIJbVJlZV11TXLdAwQAWgd-XGNrADZzYNcPBBtcS3snUPCQPOiAZRRksGoAIXIxdgAVYn5BKiqkEBqtaVJ6xA7jC0CHOUsg416jawdcQ3MRsLHSYgg4XQnsao19nQ7BqNQx2bztLo9dyIZoOQK4Lp2YxXYJhCJoKJ8WJCP61A5HJoOOxtBzGDouaFNOxmFpIlGjdE8KYzbBgXEAw5AxB2am4OSGQJ2AJQvqGe6PZ4mV4hIA */
  createMachine(
    {
      id: "stepper",
      initial: "Personal",
      schema: {
        services: {} as {
          completedPersoSection: {
            data: string;
          };
        },
      },
      context: {
        name: "" as string,
        errorMsg: undefined as string | undefined,
      },
      tsTypes: {} as import("./stepperMachine.typegen").Typegen0,
      states: {
        Personal: {
          //   on: {
          //     CompletedPersonal: {
          //       target: "Store",
          //       actions: "logEvent",
          //     },
          //   },
          invoke: {
            src: "completedPersoSection",
            onDone: {
              target: "Store",
              actions: "assignNameToContext",
            },
            onError: {
              actions: "assignNameErrorToContext",
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
        assignNameToContext: assign((context, event) => ({ name: event.data })),
        assignNameErrorToContext: assign((context, event) => ({
          errorMsg: (event.data as Error).message,
        })),
      },
    }
  );
