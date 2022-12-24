import { createMachine, assign } from "xstate";

export const stepperMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5SwC5gA7rAJwHQAUdYB7AOwEMAbAYgjLFwEtSA3YgawdQyz0OxIVKCZmwDG5FIzIBtAAwBdeQsSh0xWIyllVIAB6IATAGYAHLkOHTxgCwBGAKxyAnHOPPnhgDQgAnogBaGytcUzs7ezkwm1c3GwBfeJ9uTBwCIjIqahxsYjx0SkkAMzyAW1wU3nSBTOFRYgltUmVlXXVNJt0DBADjB2dcTzsAdgA2R1G5Qyc5Bx9-HpsowccXdxMbUY8HROS0VL4MoVwAOXJSsABJUnQAVxRqM4uAYQALclIYCFakEHataSkLqBTa4JzrOSbWwOTajeaBQwRXDGEYeUaGGw2UxbdG7ECVNL8QRUU7nK43e7UADypBOYD0KB+ag0AJ0v26dlGxmR7mGwzs005kTmfkCDm5wVMzmslmMLjszmMeIJeAAyig8gx8IUUCVsKUACq+LDUbXFMpvD5fJl-FmddmIGwOBwrTwotwoznDeE9OxmMGWaYOUwOYaGMOmQzK-ZVdWagg6vWG41gam0+mMxRtO2A4EIfpyZGzKXOP0ODHGOGihDTGwWYZyOThfoNpxRpL4mNpOPYLWJspGk00gBC5DE7Bt-3toA5y1Mpjkw1Dpidkw8xh9GORUoX-PGdhDzujPG7Gt7uB7YCeqcv18tn0gk5zbJniHFLoco0-mL5WMrIoWSY7FwA9hiWLZNmxUZjwOC8zwYW8yTTOkGSfDpcwdBBbG5cIllmPDpQPADECAkDTDAuQINGKCYNjeC4M1a801Hcc0NZIFMOMWxcDGYZnD3YZI34zFNxhetG2bfjZimJU8VIYgIDgXQVWzdCX30EFF0GRExgmKYZmInoHE5ZFcLccJnEmRFaMJI4qFU9i8wCZw63BTxIS5J1YR9XosVCVEV3nLjBR2DsVWqYlKFJC5rjuFAHOnDSEDsQtAzGexK3GRswh8-lcE2EYFUEpcFXFGy1XghKMNfGsxlwJtPIxKIXJDHzLFGerAy5GFS0RSzyoY88zV1AcUyq9TumMLcGtsJqpSxQytzMaVy0rfT7DsAbL0Gq8yXGjiasxAZMU5YNMXGQTbB9Gw8uccUvz9ewwMVRJEiAA */
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
        events: {} as
          | {
              type: "NameChanged";
              data: string;
            }
          | {
              type: "OnNext";
            }
          | {
              type: "OnBack";
            }
          | {
              type: "PlatformChanged";
              data: "shopify" | "amazon" | "ebay";
            }
          | {
              type: "StoreNameChanged";
              data: string;
            }
          | {
              type: "OnSavePlatform";
            },
      },
      context: {
        name: "" as string,
        platform: undefined as undefined | "shopify" | "amazon" | "ebay",
        storeName: "" as string,
        errorMsg: undefined as string | undefined,
      },
      tsTypes: {} as import("./stepperMachine.typegen").Typegen0,
      states: {
        Personal: {
          initial: "NameInput",
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
                OnNext: "#stepper.Store",
              },
            },
          },
        },

        Store: {
          initial: "PlatformType",
          states: {
            PlatformType: {
              on: {
                PlatformChanged: {
                  actions: "assignPlatformToContext",
                },
                OnNext: "#stepper.Store.StoreName",
                OnBack: "#stepper.Personal.NameInput",
              },
            },

            StoreName: {
              on: {
                StoreNameChanged: {
                  actions: "assignStoreNameToContext",
                },
                OnNext: "#stepper.Store.StoreName",
                OnBack: "#stepper.Store.PlatformType",
              },
            },
          },
        },
      },
    },
    {
      actions: {
        assignNameToContext: assign((context, event) => ({
          name: event?.data || "",
        })),
        assignPlatformToContext: assign((context, event) => ({
          platform: event?.data || undefined,
        })),
        assignStoreNameToContext: assign((context, event) => ({
          storeName: event?.data || "",
        })),
        assignNameErrorToContext: assign((context, event) => ({
          errorMsg: (event.data as Error).message,
        })),
      },
    }
  );
