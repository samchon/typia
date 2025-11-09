import typia from "typia";
import { AtomicClass } from "../../../structures/AtomicClass";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_AtomicClass = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "AtomicClass", 
  })(typia.json.schemas<[AtomicClass], "3.1">());