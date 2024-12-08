import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_llm_applicationOfValidate_3_1_ObjectDynamic =
  _test_llm_applicationOfValidate({
    model: "3.1",
    name: "ObjectDynamic",
    factory: ObjectDynamic,
  })(typia.llm.applicationOfValidate<ObjectDynamicApplication, "3.1">());

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
