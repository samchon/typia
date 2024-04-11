import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_json_application_v3_1_ObjectRecursive =
  _test_json_application({
    version: "3.1",
    name: "ObjectRecursive",
  })(typia.json.application<[ObjectRecursive], "3.1">());
