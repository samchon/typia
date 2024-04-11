import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagType } from "../../../structures/TypeTagType";

export const test_json_application_v3_0_TypeTagType = _test_json_application({
  version: "3.0",
  name: "TypeTagType",
})(typia.json.application<[TypeTagType], "3.0">());
