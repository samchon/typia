import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRepeatedRequired } from "../../../../structures/ArrayRepeatedRequired";

export const test_json_application_swagger_ArrayRepeatedRequired =
    _test_json_application("swagger")(
        "ArrayRepeatedRequired",
        typia.json.application<[ArrayRepeatedRequired], "swagger">(),
    );
