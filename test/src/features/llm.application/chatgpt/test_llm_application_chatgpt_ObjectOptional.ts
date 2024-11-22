import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_llm_application_chatgpt_ObjectOptional =
  _test_llm_application({
    model: "chatgpt",
    name: "ObjectOptional",
  })(typia.llm.application<ObjectOptionalApplication, "chatgpt">());

interface ObjectOptionalApplication {
  insert(first: ObjectOptional): Promise<void>;
  reduce(
    first: ObjectOptional,
    second: ObjectOptional | null,
  ): Promise<ObjectOptional>;
  coalesce(
    first: ObjectOptional | null,
    second: ObjectOptional | null,
    third?: ObjectOptional | null,
  ): Promise<ObjectOptional | null>;
}
