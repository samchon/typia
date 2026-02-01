import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_json_isStringify_ClassPropertyAssignment = (): void => _test_json_isStringify(
    "ClassPropertyAssignment",
)<ClassPropertyAssignment>(
    ClassPropertyAssignment
)((input) => typia.json.isStringify<ClassPropertyAssignment>(input));
