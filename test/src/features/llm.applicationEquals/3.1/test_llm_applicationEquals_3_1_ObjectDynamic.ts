import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_llm_applicationEquals_3_1_ObjectDynamic = (): void =>
  _test_llm_applicationEquals({
    model: "3.1",
    name: "ObjectDynamic",
    factory: ObjectDynamic,
  })(typia.llm.application<ObjectDynamicApplication, "3.1", { equal: true }>());

interface ObjectDynamicApplication {
  insert(p: { first: ObjectDynamic }): Promise<void>;
  reduce(p: {
    first: ObjectDynamic;
    second: ObjectDynamic | null;
  }): Promise<ObjectDynamic>;
  coalesce(p: {
    first: ObjectDynamic | null;
    second: ObjectDynamic | null;
    third?: ObjectDynamic | null;
  }): Promise<ObjectDynamic | null>;
}
