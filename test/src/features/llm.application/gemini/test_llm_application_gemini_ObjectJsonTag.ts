import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_llm_application_gemini_ObjectJsonTag = _test_llm_application({
  model: "gemini",
  name: "ObjectJsonTag",
  factory: ObjectJsonTag,
})(typia.llm.application<ObjectJsonTagApplication, "gemini">());

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
