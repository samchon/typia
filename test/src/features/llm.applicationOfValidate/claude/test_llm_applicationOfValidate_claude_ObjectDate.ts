import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectDate } from "../../../structures/ObjectDate";

export const test_llm_applicationOfValidate_claude_ObjectDate =
  _test_llm_applicationOfValidate({
    model: "claude",
    name: "ObjectDate",
    factory: ObjectDate,
  })(typia.llm.applicationOfValidate<ObjectDateApplication, "claude">());

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
