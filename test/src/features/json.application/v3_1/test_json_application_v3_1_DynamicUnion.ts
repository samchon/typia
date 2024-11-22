import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_json_application_v3_1_DynamicUnion = _test_json_application({
  version: "3.1",
  name: "DynamicUnion",
})(typia.json.application<DynamicUnionApplication, "3.1">());

interface DynamicUnionApplication {
  insert(first: DynamicUnion): Promise<void>;
  reduce(
    first: DynamicUnion,
    second: DynamicUnion | null,
  ): Promise<DynamicUnion>;
  coalesce(
    first: DynamicUnion | null,
    second: DynamicUnion | null,
    third?: DynamicUnion | null,
  ): Promise<DynamicUnion | null>;
}
