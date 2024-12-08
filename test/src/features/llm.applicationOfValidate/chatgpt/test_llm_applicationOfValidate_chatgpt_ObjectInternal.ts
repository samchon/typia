import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_llm_applicationOfValidate_chatgpt_ObjectInternal =
  _test_llm_applicationOfValidate({
    model: "chatgpt",
    name: "ObjectInternal",
    factory: ObjectInternal,
  })(typia.llm.applicationOfValidate<ObjectInternalApplication, "chatgpt">());

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
