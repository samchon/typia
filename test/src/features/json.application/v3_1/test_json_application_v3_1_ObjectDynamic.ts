import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_json_application_v3_1_ObjectDynamic = _test_json_application({
  version: "3.1",
  name: "ObjectDynamic",
})(typia.json.application<[ObjectDynamic], "3.1">());
