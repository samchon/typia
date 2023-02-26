import typia from "typia";

import { DynamicConstant } from "../../../structures/DynamicConstant";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_DynamicConstant = _test_application(
    "swagger",
)("DynamicConstant", typia.application<[DynamicConstant], "swagger">());
