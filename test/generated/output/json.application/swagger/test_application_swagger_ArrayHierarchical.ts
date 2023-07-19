import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayHierarchical } from "../../../../structures/ArrayHierarchical";

export const test_json_application_swagger_ArrayHierarchical =
    _test_json_application("swagger")("ArrayHierarchical")(
        typia.json.application<[ArrayHierarchical], "swagger">(),
    );
