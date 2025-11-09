import typia from "typia";
import { AtomicSimple } from "../../../structures/AtomicSimple";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_AtomicSimple = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "AtomicSimple", 
  })(typia.json.schema<AtomicSimple, "3.1">());