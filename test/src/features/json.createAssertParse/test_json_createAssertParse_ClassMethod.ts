import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ClassMethod } from "../../structures/ClassMethod";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_ClassMethod = (): void => _test_json_assertParse(TypeGuardError)(
    "ClassMethod",
)<ClassMethod>(
    ClassMethod
)(typia.json.createAssertParse<ClassMethod>());
