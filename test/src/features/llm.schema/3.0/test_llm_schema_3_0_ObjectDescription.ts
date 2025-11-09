import typia from "typia";
import { ObjectDescription } from "../../../structures/ObjectDescription";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_ObjectDescription = (): void =>
  _test_llm_schema({
    model: "3.0",
    name: "ObjectDescription",
  })(typia.llm.schema<ObjectDescription, "3.0">());