import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_json_application_swagger_standard_ObjectRecursive =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectRecursive",
  })(typia.json.application<[ObjectRecursive], "swagger", false>());
