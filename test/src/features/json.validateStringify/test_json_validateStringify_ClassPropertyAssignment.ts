import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_json_validateStringify_ClassPropertyAssignment = (): void => _test_json_validateStringify(
    "ClassPropertyAssignment",
)<ClassPropertyAssignment>(
    ClassPropertyAssignment
)((input) => typia.json.validateStringify<ClassPropertyAssignment>(input));
