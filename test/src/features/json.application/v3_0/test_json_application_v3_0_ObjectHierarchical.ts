import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";

export const test_json_application_v3_0_ObjectHierarchical =
  _test_json_application({
    version: "3.0",
    name: "ObjectHierarchical",
  })(typia.json.application<[ObjectHierarchical], "3.0">());
