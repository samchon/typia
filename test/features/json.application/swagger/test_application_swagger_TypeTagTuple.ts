import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagTuple } from "../../../structures/TypeTagTuple";

export const test_json_application_swagger_TypeTagTuple =
    _test_json_application("swagger")("TypeTagTuple")(
        typia.json.application<[TypeTagTuple], "swagger">(),
    );
