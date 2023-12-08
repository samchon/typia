import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_json_application_ajv_ArrayRepeatedNullable =
  _test_json_application("ajv")("ArrayRepeatedNullable")(
    typia.json.application<[ArrayRepeatedNullable], "ajv">(),
  );
