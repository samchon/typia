import typia from "typia";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_ObjectGenericUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectGenericUnion",
  })(typia.json.application<[ObjectGenericUnion], "swagger", false>());
