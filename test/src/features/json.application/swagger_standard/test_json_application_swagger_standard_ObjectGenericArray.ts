import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_json_application_swagger_standard_ObjectGenericArray =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectGenericArray",
  })(typia.json.application<[ObjectGenericArray], "swagger", false>());
