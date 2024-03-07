import typia from "typia";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_ObjectHierarchical =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectHierarchical",
  })(typia.json.application<[ObjectHierarchical], "ajv", true>());
