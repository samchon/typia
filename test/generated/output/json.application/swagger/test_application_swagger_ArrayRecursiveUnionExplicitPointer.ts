import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRecursiveUnionExplicitPointer } from "../../../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_json_application_swagger_ArrayRecursiveUnionExplicitPointer =
    _test_json_application("swagger")("ArrayRecursiveUnionExplicitPointer")(
        typia.json.application<
            [ArrayRecursiveUnionExplicitPointer],
            "swagger"
        >(),
    );
