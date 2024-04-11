import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_json_application_v3_0_ArrayHierarchical =
  _test_json_application({
    version: "3.0",
    name: "ArrayHierarchical",
  })(typia.json.application<[ArrayHierarchical], "3.0">());
