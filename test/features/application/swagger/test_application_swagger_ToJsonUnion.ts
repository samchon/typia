import typia from "typia";

import { ToJsonUnion } from "../../../structures/ToJsonUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ToJsonUnion = _test_application(
    "swagger",
)("ToJsonUnion", typia.application<[ToJsonUnion], "swagger">());
