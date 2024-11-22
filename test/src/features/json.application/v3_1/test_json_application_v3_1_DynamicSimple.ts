import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_json_application_v3_1_DynamicSimple = _test_json_application({
  version: "3.1",
  name: "DynamicSimple",
})(typia.json.application<DynamicSimpleApplication, "3.1">());

interface DynamicSimpleApplication {
  insert(first: DynamicSimple): Promise<void>;
  reduce(
    first: DynamicSimple,
    second: DynamicSimple | null,
  ): Promise<DynamicSimple>;
  coalesce(
    first: DynamicSimple | null,
    second: DynamicSimple | null,
    third?: DynamicSimple | null,
  ): Promise<DynamicSimple | null>;
}
