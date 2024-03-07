import typia from "typia";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_ObjectGeneric =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectGeneric",
  })(typia.json.application<[ObjectGeneric], "swagger", true>());
