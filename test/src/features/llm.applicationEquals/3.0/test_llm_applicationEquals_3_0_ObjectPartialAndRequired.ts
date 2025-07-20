import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_llm_applicationEquals_3_0_ObjectPartialAndRequired =
  (): void =>
    _test_llm_applicationEquals({
      model: "3.0",
      name: "ObjectPartialAndRequired",
      factory: ObjectPartialAndRequired,
    })(
      typia.llm.application<
        ObjectPartialAndRequiredApplication,
        "3.0",
        { equal: true }
      >(),
    );

interface ObjectPartialAndRequiredApplication {
  insert(p: { first: ObjectPartialAndRequired }): Promise<void>;
  reduce(p: {
    first: ObjectPartialAndRequired;
    second: ObjectPartialAndRequired | null;
  }): Promise<ObjectPartialAndRequired>;
  coalesce(p: {
    first: ObjectPartialAndRequired | null;
    second: ObjectPartialAndRequired | null;
    third?: ObjectPartialAndRequired | null;
  }): Promise<ObjectPartialAndRequired | null>;
}
