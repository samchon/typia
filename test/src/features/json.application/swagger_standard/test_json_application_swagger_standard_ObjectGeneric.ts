import typia from "typia";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_ObjectGeneric =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectGeneric",
  })(typia.json.application<[ObjectGeneric], "swagger", false>());
