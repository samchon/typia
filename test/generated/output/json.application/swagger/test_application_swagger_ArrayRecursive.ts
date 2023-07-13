import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRecursive } from "../../../../structures/ArrayRecursive";

export const test_json_application_swagger_ArrayRecursive =
    _test_json_application("swagger")(
        "ArrayRecursive",
        typia.json.application<[ArrayRecursive], "swagger">(),
    );
