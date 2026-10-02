import typia from "typia";

/**
 * Supplies an unresolved generic evaluation target for the diagnostic suite.
 *
 * Record's open constraint does not give the transformer concrete properties to
 * evaluate. The fixture must typecheck and reach the native rejection path.
 *
 * 1. Compile this fixture together with the invalid-call matrix.
 * 2. Require its source to be named by a typia diagnostic.
 */
export const evaluate = <T extends Record<string, any>>() =>
  typia.llm.evaluation<T>();
