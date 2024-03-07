import typia from "typia";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_ObjectGenericArray =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectGenericArray",
  })(typia.json.application<[ObjectGenericArray], "swagger", true>());
