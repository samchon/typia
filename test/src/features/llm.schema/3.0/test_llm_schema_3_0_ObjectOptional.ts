import typia from "typia";
import { ObjectOptional } from "../../../structures/ObjectOptional";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_ObjectOptional = (): void =>
  _test_llm_schema({
    model: "3.0",
    name: "ObjectOptional",
  })(typia.llm.schema<ObjectOptional, "3.0">());