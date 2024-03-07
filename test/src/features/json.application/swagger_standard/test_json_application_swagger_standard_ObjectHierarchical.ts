import typia from "typia";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_ObjectHierarchical =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectHierarchical",
  })(typia.json.application<[ObjectHierarchical], "swagger", false>());
