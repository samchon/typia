import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagObjectUnion } from "../../../../structures/TypeTagObjectUnion";

export const test_json_application_ajv_TypeTagObjectUnion =
    _test_json_application("ajv")("TypeTagObjectUnion")(
        typia.json.application<[TypeTagObjectUnion], "ajv">(),
    );
