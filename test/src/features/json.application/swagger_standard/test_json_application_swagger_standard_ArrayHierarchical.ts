import typia from "typia";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_ArrayHierarchical =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ArrayHierarchical",
  })(typia.json.application<[ArrayHierarchical], "swagger", false>());
