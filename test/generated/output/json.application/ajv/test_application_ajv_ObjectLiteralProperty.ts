import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectLiteralProperty } from "../../../../structures/ObjectLiteralProperty";

export const test_json_application_ajv_ObjectLiteralProperty =
    _test_json_application("ajv")(
        "ObjectLiteralProperty",
        typia.json.application<[ObjectLiteralProperty], "ajv">(),
    );
