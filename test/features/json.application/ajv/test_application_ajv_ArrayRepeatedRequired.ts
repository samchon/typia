import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_json_application_ajv_ArrayRepeatedRequired =
    _test_json_application("ajv")("ArrayRepeatedRequired")(
        typia.json.application<[ArrayRepeatedRequired], "ajv">(),
    );
