import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_json_application_v3_0_UltimateUnion = _test_json_application({
  version: "3.0",
  name: "UltimateUnion",
})(typia.json.application<UltimateUnionApplication, "3.0">());

interface UltimateUnionApplication {
  insert(first: UltimateUnion): Promise<void>;
  reduce(
    first: UltimateUnion,
    second: UltimateUnion | null,
  ): Promise<UltimateUnion>;
  coalesce(
    first: UltimateUnion | null,
    second: UltimateUnion | null,
    third?: UltimateUnion | null,
  ): Promise<UltimateUnion | null>;
}
