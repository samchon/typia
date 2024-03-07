import typia from "typia";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_ObjectIntersection =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectIntersection",
  })(typia.json.application<[ObjectIntersection], "swagger", false>());
