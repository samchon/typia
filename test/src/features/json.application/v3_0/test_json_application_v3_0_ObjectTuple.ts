import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectTuple } from "../../../structures/ObjectTuple";

export const test_json_application_v3_0_ObjectTuple = _test_json_application({
  version: "3.0",
  name: "ObjectTuple",
})(typia.json.application<[ObjectTuple], "3.0">());
