import typia from "typia";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_TypeTagAtomicUnion = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "TypeTagAtomicUnion", 
  })(typia.json.schema<TypeTagAtomicUnion, "3.1">());