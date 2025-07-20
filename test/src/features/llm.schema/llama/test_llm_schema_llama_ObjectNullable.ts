import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_llm_schema_llama_ObjectNullable = (): void =>
  _test_llm_schema({
    model: "llama",
    name: "ObjectNullable",
  })(typia.llm.schema<ObjectNullable, "llama">({}));
