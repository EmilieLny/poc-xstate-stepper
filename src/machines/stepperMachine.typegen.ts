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
    completedPersoSection: "done.invoke.stepper.Personal:invocation[0]";
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: "completedPersoSection";
  };
  eventsCausingActions: {
    assignNameErrorToContext: "error.platform.stepper.Personal:invocation[0]";
    assignNameToContext: "done.invoke.stepper.Personal:invocation[0]";
    logEvent: "BackToPersonal";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    completedPersoSection: "BackToPersonal" | "xstate.init";
  };
  matchesStates: "Personal" | "Store";
  tags: never;
}
