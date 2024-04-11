import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_json_application_v3_1_ArrayHierarchical =
  _test_json_application({
    version: "3.1",
    name: "ArrayHierarchical",
  })(typia.json.application<[ArrayHierarchical], "3.1">());
