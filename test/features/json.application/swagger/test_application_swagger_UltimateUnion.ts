import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_json_application_swagger_UltimateUnion =
    _test_json_application("swagger")("UltimateUnion")(
        typia.json.application<[UltimateUnion], "swagger">(),
    );
