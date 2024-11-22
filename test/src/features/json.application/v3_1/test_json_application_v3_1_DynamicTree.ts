import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_json_application_v3_1_DynamicTree = _test_json_application({
  version: "3.1",
  name: "DynamicTree",
})(typia.json.application<DynamicTreeApplication, "3.1">());

interface DynamicTreeApplication {
  insert(first: DynamicTree): Promise<void>;
  reduce(first: DynamicTree, second: DynamicTree | null): Promise<DynamicTree>;
  coalesce(
    first: DynamicTree | null,
    second: DynamicTree | null,
    third?: DynamicTree | null,
  ): Promise<DynamicTree | null>;
}
