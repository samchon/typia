import typia from "typia";
import { ObjectTuple } from "../../../structures/ObjectTuple";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_ObjectTuple =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectTuple",
  })(typia.json.application<[ObjectTuple], "ajv", false>());
