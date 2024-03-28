import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";

export const test_json_application_swagger_standard_ObjectHierarchical =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectHierarchical",
  })(typia.json.application<[ObjectHierarchical], "swagger", false>());
