import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";

export const test_json_application_v3_1_ObjectGeneric = _test_json_application({
  version: "3.1",
  name: "ObjectGeneric",
})(typia.json.application<[ObjectGeneric], "3.1">());
