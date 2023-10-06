import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectPartialAndRequired } from "../../../../structures/ObjectPartialAndRequired";

export const test_json_application_ajv_ObjectPartialAndRequired =
    _test_json_application("ajv")("ObjectPartialAndRequired")(
        typia.json.application<[ObjectPartialAndRequired], "ajv">(),
    );
