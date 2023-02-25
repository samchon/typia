import typia from "typia";

import { ObjectRecursive } from "../../../structures/ObjectRecursive";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectRecursive = _test_application(
    "swagger",
)("ObjectRecursive", typia.application<[ObjectRecursive], "swagger">());
