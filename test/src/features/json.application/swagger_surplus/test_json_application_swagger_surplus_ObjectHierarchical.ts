import typia from "typia";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_ObjectHierarchical =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectHierarchical",
  })(typia.json.application<[ObjectHierarchical], "swagger", true>());
