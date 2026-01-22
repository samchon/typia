import typia from "typia";

import { _test_llm_application } from "../../internal/_test_llm_application";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_llm_application_ObjectDynamic = (): void =>
  _test_llm_application({
    name: "ObjectDynamic",
    factory: ObjectDynamic,
  })(typia.llm.application<ObjectDynamicApplication>());

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
