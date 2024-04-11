import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectPartial } from "../../../structures/ObjectPartial";

export const test_json_application_v3_0_ObjectPartial = _test_json_application({
  version: "3.0",
  name: "ObjectPartial",
})(typia.json.application<[ObjectPartial], "3.0">());
