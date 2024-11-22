import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_json_application_v3_1_ConstantConstEnumeration =
  _test_json_application({
    version: "3.1",
    name: "ConstantConstEnumeration",
  })(typia.json.application<ConstantConstEnumerationApplication, "3.1">());

interface ConstantConstEnumerationApplication {
  insert(first: ConstantConstEnumeration): Promise<void>;
  reduce(
    first: ConstantConstEnumeration,
    second: ConstantConstEnumeration | null,
  ): Promise<ConstantConstEnumeration>;
  coalesce(
    first: ConstantConstEnumeration | null,
    second: ConstantConstEnumeration | null,
    third?: ConstantConstEnumeration | null,
  ): Promise<ConstantConstEnumeration | null>;
}
