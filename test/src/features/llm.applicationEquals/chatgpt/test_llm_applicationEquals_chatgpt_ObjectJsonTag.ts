import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_llm_applicationEquals_chatgpt_ObjectJsonTag = (): void =>
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "ObjectJsonTag",
    factory: ObjectJsonTag,
  })(
    typia.llm.application<
      ObjectJsonTagApplication,
      "chatgpt",
      { equals:; true }
    >(),
  );

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
