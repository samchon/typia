import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_json_isParse_ClassMethod = (): void => _test_json_isParse(
    "ClassMethod",
)<ClassMethod>(
    ClassMethod
)((input) => typia.json.isParse<ClassMethod>(input));
