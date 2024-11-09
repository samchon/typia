import typia from "typia";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_AtomicIntersection = 
  _test_json_schemas({
    version: "3.0",
    name: "AtomicIntersection", 
  })(typia.json.schemas<[AtomicIntersection], "3.0">());