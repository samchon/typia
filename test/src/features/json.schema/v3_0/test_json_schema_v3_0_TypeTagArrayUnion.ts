import typia from "typia";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_TypeTagArrayUnion = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "TypeTagArrayUnion", 
  })(typia.json.schema<TypeTagArrayUnion, "3.0">());