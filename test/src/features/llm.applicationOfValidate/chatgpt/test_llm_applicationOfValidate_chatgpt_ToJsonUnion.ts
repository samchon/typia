import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_llm_applicationOfValidate_chatgpt_ToJsonUnion =
  _test_llm_applicationOfValidate({
    model: "chatgpt",
    name: "ToJsonUnion",
    factory: ToJsonUnion,
  })(typia.llm.applicationOfValidate<ToJsonUnionApplication, "chatgpt">());

interface ToJsonUnionApplication {
  insert(p: { first: ToJsonUnion }): Promise<void>;
  reduce(p: {
    first: ToJsonUnion;
    second: ToJsonUnion | null;
  }): Promise<ToJsonUnion>;
  coalesce(p: {
    first: ToJsonUnion | null;
    second: ToJsonUnion | null;
    third?: ToJsonUnion | null;
  }): Promise<ToJsonUnion | null>;
}
