import typia from "typia";
import { AtomicAlias } from "../../../structures/AtomicAlias";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_AtomicAlias = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "AtomicAlias", 
  })(typia.json.schemas<[AtomicAlias], "3.1">());