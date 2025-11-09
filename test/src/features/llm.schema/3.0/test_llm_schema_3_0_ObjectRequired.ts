import typia from "typia";
import { ObjectRequired } from "../../../structures/ObjectRequired";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_ObjectRequired = (): void =>
  _test_llm_schema({
    model: "3.0",
    name: "ObjectRequired",
  })(typia.llm.schema<ObjectRequired, "3.0">());