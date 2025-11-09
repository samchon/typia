import typia from "typia";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_TypeTagAtomicUnion = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "TypeTagAtomicUnion", 
  })(typia.json.schemas<[TypeTagAtomicUnion], "3.0">());