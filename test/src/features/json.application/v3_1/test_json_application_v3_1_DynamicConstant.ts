import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_json_application_v3_1_DynamicConstant =
  _test_json_application({
    version: "3.1",
    name: "DynamicConstant",
  })(typia.json.application<DynamicConstantApplication, "3.1">());

interface DynamicConstantApplication {
  insert(first: DynamicConstant): Promise<void>;
  reduce(
    first: DynamicConstant,
    second: DynamicConstant | null,
  ): Promise<DynamicConstant>;
  coalesce(
    first: DynamicConstant | null,
    second: DynamicConstant | null,
    third?: DynamicConstant | null,
  ): Promise<DynamicConstant | null>;
}
