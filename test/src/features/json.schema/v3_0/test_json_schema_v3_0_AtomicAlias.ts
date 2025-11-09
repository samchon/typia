import typia from "typia";
import { AtomicAlias } from "../../../structures/AtomicAlias";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_AtomicAlias = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "AtomicAlias", 
  })(typia.json.schema<AtomicAlias, "3.0">());