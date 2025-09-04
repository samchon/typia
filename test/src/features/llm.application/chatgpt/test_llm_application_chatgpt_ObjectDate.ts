import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectDate } from "../../../structures/ObjectDate";

export const test_llm_application_chatgpt_ObjectDate = (): void =>
  _test_llm_application({
    model: "chatgpt",
    name: "ObjectDate",
    factory: ObjectDate,
  })(typia.llm.application<ObjectDateApplication, "chatgpt">());

interface ObjectDateApplication {
  insert(p: { first: ObjectDate }): Promise<void>;
  reduce(p: {
    first: ObjectDate;
    second: ObjectDate | null;
  }): Promise<ObjectDate>;
  coalesce(p: {
    first: ObjectDate | null;
    second: ObjectDate | null;
    third?: ObjectDate | null;
  }): Promise<ObjectDate | null>;
}
