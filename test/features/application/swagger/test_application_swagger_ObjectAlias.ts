import typia from "typia";

import { ObjectAlias } from "../../../structures/ObjectAlias";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectAlias = _test_application(
    "swagger",
)("ObjectAlias", typia.application<[ObjectAlias], "swagger">());
