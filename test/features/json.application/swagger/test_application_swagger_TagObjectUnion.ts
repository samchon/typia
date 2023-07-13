import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";

export const test_json_application_swagger_TagObjectUnion =
    _test_json_application("swagger")(
        "TagObjectUnion",
        typia.json.application<[TagObjectUnion], "swagger">(),
    );
