import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagTuple } from "../../../structures/TypeTagTuple";

export const test_json_application_ajv_surplus_TypeTagTuple =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "TypeTagTuple",
  })(typia.json.application<[TypeTagTuple], "ajv", true>());
