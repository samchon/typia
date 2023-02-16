import typia from "typia";

import { ArrayUnion } from "../../../structures/ArrayUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ArrayUnion = _test_application("swagger")(
    "ArrayUnion",
    typia.application<[ArrayUnion], "swagger">(),
);
