import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArraySimplePointer } from "../../../../structures/ArraySimplePointer";

export const test_json_application_ajv_ArraySimplePointer =
    _test_json_application("ajv")("ArraySimplePointer")(
        typia.json.application<[ArraySimplePointer], "ajv">(),
    );
