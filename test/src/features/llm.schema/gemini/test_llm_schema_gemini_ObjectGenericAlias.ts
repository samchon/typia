import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_llm_schema_gemini_ObjectGenericAlias = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ObjectGenericAlias",
  })(typia.llm.schema<ObjectGenericAlias, "gemini">());
