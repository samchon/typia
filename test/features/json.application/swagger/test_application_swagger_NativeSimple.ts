import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { NativeSimple } from "../../../structures/NativeSimple";

export const test_json_application_swagger_NativeSimple =
    _test_json_application("swagger")(
        "NativeSimple",
        typia.json.application<[NativeSimple], "swagger">(),
    );
