import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectTuple } from "../../../structures/ObjectTuple";

export const test_json_application_v3_1_ObjectTuple = _test_json_application({
  version: "3.1",
  name: "ObjectTuple",
})(typia.json.application<[ObjectTuple], "3.1">());
