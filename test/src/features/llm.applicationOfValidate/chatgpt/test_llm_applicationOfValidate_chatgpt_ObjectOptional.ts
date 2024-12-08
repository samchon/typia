import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_llm_applicationOfValidate_chatgpt_ObjectOptional =
  _test_llm_applicationOfValidate({
    model: "chatgpt",
    name: "ObjectOptional",
    factory: ObjectOptional,
  })(typia.llm.applicationOfValidate<ObjectOptionalApplication, "chatgpt">());

interface ObjectOptionalApplication {
  insert(p: { first: ObjectOptional }): Promise<void>;
  reduce(p: {
    first: ObjectOptional;
    second: ObjectOptional | null;
  }): Promise<ObjectOptional>;
  coalesce(p: {
    first: ObjectOptional | null;
    second: ObjectOptional | null;
    third?: ObjectOptional | null;
  }): Promise<ObjectOptional | null>;
}
