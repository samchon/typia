import typia from "typia";
import { ObjectDate } from "../../../structures/ObjectDate";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_ObjectDate =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectDate",
  })(typia.json.application<[ObjectDate], "swagger", false>());
