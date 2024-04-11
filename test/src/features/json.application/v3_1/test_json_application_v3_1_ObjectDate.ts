import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectDate } from "../../../structures/ObjectDate";

export const test_json_application_v3_1_ObjectDate = _test_json_application({
  version: "3.1",
  name: "ObjectDate",
})(typia.json.application<[ObjectDate], "3.1">());
