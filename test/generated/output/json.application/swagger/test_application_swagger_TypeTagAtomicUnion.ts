import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagAtomicUnion } from "../../../../structures/TypeTagAtomicUnion";

export const test_json_application_swagger_TypeTagAtomicUnion =
    _test_json_application("swagger")("TypeTagAtomicUnion")(
        typia.json.application<[TypeTagAtomicUnion], "swagger">(),
    );
