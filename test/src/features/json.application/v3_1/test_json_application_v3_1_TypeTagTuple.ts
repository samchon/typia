import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagTuple } from "../../../structures/TypeTagTuple";

export const test_json_application_v3_1_TypeTagTuple = _test_json_application({
  version: "3.1",
  name: "TypeTagTuple",
})(typia.json.application<[TypeTagTuple], "3.1">());
