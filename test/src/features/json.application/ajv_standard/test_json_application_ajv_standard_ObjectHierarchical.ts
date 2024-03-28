import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";

export const test_json_application_ajv_standard_ObjectHierarchical =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectHierarchical",
  })(typia.json.application<[ObjectHierarchical], "ajv", false>());
