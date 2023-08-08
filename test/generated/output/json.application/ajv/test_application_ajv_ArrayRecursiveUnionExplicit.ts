import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRecursiveUnionExplicit } from "../../../../structures/ArrayRecursiveUnionExplicit";

export const test_json_application_ajv_ArrayRecursiveUnionExplicit =
    _test_json_application("ajv")(
        "ArrayRecursiveUnionExplicit",
        typia.json.application<[ArrayRecursiveUnionExplicit], "ajv">(),
    );
