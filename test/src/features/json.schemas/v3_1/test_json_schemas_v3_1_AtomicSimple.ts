import typia from "typia";
import { AtomicSimple } from "../../../structures/AtomicSimple";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_AtomicSimple = 
  _test_json_schemas({
    version: "3.1",
    name: "AtomicSimple", 
  })(typia.json.schemas<[AtomicSimple], "3.1">());