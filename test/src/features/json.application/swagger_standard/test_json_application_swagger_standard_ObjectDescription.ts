import typia from "typia";
import { ObjectDescription } from "../../../structures/ObjectDescription";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_ObjectDescription =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectDescription",
  })(typia.json.application<[ObjectDescription], "swagger", false>());
