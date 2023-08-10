import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArraySimplePointer } from "../../../../structures/ArraySimplePointer";

export const test_json_application_swagger_ArraySimplePointer =
    _test_json_application("swagger")("ArraySimplePointer")(
        typia.json.application<[ArraySimplePointer], "swagger">(),
    );
