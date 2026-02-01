import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_json_stringify_ClassMethod = (): void => _test_json_stringify(
    "ClassMethod",
)<ClassMethod>(
    ClassMethod
)((input) => typia.json.stringify<ClassMethod>(input));
