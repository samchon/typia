import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_json_application_swagger_ToJsonAtomicUnion =
    _test_json_application("swagger")("ToJsonAtomicUnion")(
        typia.json.application<[ToJsonAtomicUnion], "swagger">(),
    );
