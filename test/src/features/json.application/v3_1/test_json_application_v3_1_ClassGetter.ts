import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_json_application_v3_1_ClassGetter = _test_json_application({
  version: "3.1",
  name: "ClassGetter",
})(typia.json.application<[ClassGetter], "3.1">());
