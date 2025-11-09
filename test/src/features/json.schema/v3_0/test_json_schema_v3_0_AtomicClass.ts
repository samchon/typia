import typia from "typia";
import { AtomicClass } from "../../../structures/AtomicClass";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_AtomicClass = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "AtomicClass", 
  })(typia.json.schema<AtomicClass, "3.0">());