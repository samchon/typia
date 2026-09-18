import typia from "typia";

// A GENERIC PARAMETER HAS NO PROPERTIES TO ASK ABOUT
export const evaluate = <T extends Record<string, any>>() =>
  typia.llm.evaluation<T>();
