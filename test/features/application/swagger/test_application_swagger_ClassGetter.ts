import typia from "typia";

import { ClassGetter } from "../../../structures/ClassGetter";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ClassGetter = _test_application(
    "swagger",
)("ClassGetter", typia.application<[ClassGetter], "swagger">());
