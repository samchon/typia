import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectRequired } from "../../../structures/ObjectRequired";

export const test_llm_applicationEquals_3_0_ObjectRequired = (): void =>
  _test_llm_applicationEquals({
    model: "3.0",
    name: "ObjectRequired",
    factory: ObjectRequired,
  })(
    typia.llm.application<ObjectRequiredApplication, "3.0", { equals: true }>(),
  );

interface ObjectRequiredApplication {
  insert(p: { first: ObjectRequired }): Promise<void>;
  reduce(p: {
    first: ObjectRequired;
    second: ObjectRequired | null;
  }): Promise<ObjectRequired>;
  coalesce(p: {
    first: ObjectRequired | null;
    second: ObjectRequired | null;
    third?: ObjectRequired | null;
  }): Promise<ObjectRequired | null>;
}
