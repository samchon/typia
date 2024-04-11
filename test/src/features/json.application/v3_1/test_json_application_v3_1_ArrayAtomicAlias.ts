import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";

export const test_json_application_v3_1_ArrayAtomicAlias =
  _test_json_application({
    version: "3.1",
    name: "ArrayAtomicAlias",
  })(typia.json.application<[ArrayAtomicAlias], "3.1">());
