import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_llm_applicationEquals_3_0_ObjectInternal = (): void =>
  _test_llm_applicationEquals({
    model: "3.0",
    name: "ObjectInternal",
    factory: ObjectInternal,
  })(
    typia.llm.application<ObjectInternalApplication, "3.0", { equals: true }>(),
  );

interface ObjectInternalApplication {
  insert(p: { first: ObjectInternal }): Promise<void>;
  reduce(p: {
    first: ObjectInternal;
    second: ObjectInternal | null;
  }): Promise<ObjectInternal>;
  coalesce(p: {
    first: ObjectInternal | null;
    second: ObjectInternal | null;
    third?: ObjectInternal | null;
  }): Promise<ObjectInternal | null>;
}
