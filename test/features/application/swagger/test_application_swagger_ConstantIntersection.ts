import typia from "typia";

import { _test_application } from "../../../internal/_test_application";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_application_swagger_ConstantIntersection = _test_application(
    "swagger",
)(
    "ConstantIntersection",
    typia.application<[ConstantIntersection], "swagger">(),
);
