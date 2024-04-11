import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_json_application_v3_1_TypeTagFormat = _test_json_application({
  version: "3.1",
  name: "TypeTagFormat",
})(typia.json.application<[TypeTagFormat], "3.1">());
