import typia from "typia";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_ObjectGenericArray =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectGenericArray",
  })(typia.json.application<[ObjectGenericArray], "ajv", false>());
