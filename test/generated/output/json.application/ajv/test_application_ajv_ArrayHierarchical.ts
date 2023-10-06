import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayHierarchical } from "../../../../structures/ArrayHierarchical";

export const test_json_application_ajv_ArrayHierarchical =
    _test_json_application("ajv")("ArrayHierarchical")(
        typia.json.application<[ArrayHierarchical], "ajv">(),
    );
