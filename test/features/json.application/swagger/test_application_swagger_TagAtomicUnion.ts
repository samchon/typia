import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_json_application_swagger_TagAtomicUnion =
    _test_json_application("swagger")("TagAtomicUnion")(
        typia.json.application<[TagAtomicUnion], "swagger">(),
    );
