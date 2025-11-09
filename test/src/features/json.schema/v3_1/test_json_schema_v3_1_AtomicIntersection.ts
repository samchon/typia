import typia from "typia";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_AtomicIntersection = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "AtomicIntersection", 
  })(typia.json.schema<AtomicIntersection, "3.1">());