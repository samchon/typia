import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_json_application_ajv_standard_TypeTagFormat =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "TypeTagFormat",
  })(typia.json.application<[TypeTagFormat], "ajv", false>());
