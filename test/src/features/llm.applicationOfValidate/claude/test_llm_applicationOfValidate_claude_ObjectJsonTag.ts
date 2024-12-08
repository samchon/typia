import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_llm_applicationOfValidate_claude_ObjectJsonTag =
  _test_llm_applicationOfValidate({
    model: "claude",
    name: "ObjectJsonTag",
    factory: ObjectJsonTag,
  })(typia.llm.applicationOfValidate<ObjectJsonTagApplication, "claude">());

interface ObjectJsonTagApplication {
  insert(p: { first: ObjectJsonTag }): Promise<void>;
  reduce(p: {
    first: ObjectJsonTag;
    second: ObjectJsonTag | null;
  }): Promise<ObjectJsonTag>;
  coalesce(p: {
    first: ObjectJsonTag | null;
    second: ObjectJsonTag | null;
    third?: ObjectJsonTag | null;
  }): Promise<ObjectJsonTag | null>;
}
