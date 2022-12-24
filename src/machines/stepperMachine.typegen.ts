// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "done.invoke.stepper.Personal:invocation[0]": {
      type: "done.invoke.stepper.Personal:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "error.platform.stepper.Personal:invocation[0]": {
      type: "error.platform.stepper.Personal:invocation[0]";
      data: unknown;
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    getInitialState: "done.invoke.stepper.Personal:invocation[0]";
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: "getInitialState";
  };
  eventsCausingActions: {
    assignNameErrorToContext: "error.platform.stepper.Personal:invocation[0]";
    assignNameToContext:
      | "NameChanged"
      | "done.invoke.stepper.Personal:invocation[0]";
    assignPlatformToContext: "PlatformChanged";
    assignStoreNameToContext: "StoreNameChanged";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    getInitialState: "OnBack" | "xstate.init";
  };
  matchesStates:
    | "Personal"
    | "Personal.NameInput"
    | "Store"
    | "Store.PlatformType"
    | "Store.StoreName"
    | { Personal?: "NameInput"; Store?: "PlatformType" | "StoreName" };
  tags: never;
}
