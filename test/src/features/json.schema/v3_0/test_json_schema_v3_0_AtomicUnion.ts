import typia from "typia";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_AtomicUnion = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "AtomicUnion", 
  })(typia.json.schema<AtomicUnion, "3.0">());