import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_json_application_v3_1_DynamicEnumeration =
  _test_json_application({
    version: "3.1",
    name: "DynamicEnumeration",
  })(typia.json.application<DynamicEnumerationApplication, "3.1">());

interface DynamicEnumerationApplication {
  insert(first: DynamicEnumeration): Promise<void>;
  reduce(
    first: DynamicEnumeration,
    second: DynamicEnumeration | null,
  ): Promise<DynamicEnumeration>;
  coalesce(
    first: DynamicEnumeration | null,
    second: DynamicEnumeration | null,
    third?: DynamicEnumeration | null,
  ): Promise<DynamicEnumeration | null>;
}
