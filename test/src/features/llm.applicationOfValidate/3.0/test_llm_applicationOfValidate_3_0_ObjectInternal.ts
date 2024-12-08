import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_llm_applicationOfValidate_3_0_ObjectInternal =
  _test_llm_applicationOfValidate({
    model: "3.0",
    name: "ObjectInternal",
    factory: ObjectInternal,
  })(typia.llm.applicationOfValidate<ObjectInternalApplication, "3.0">());

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
