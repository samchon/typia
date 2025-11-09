import typia from "typia";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_ObjectRecursive = (): void =>
  _test_llm_schema({
    model: "3.0",
    name: "ObjectRecursive",
  })(typia.llm.schema<ObjectRecursive, "3.0">());