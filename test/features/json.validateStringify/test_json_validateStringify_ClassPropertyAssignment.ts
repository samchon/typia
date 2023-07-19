import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_json_validateStringify_ClassPropertyAssignment =
    _test_json_validateStringify<ClassPropertyAssignment>(
        ClassPropertyAssignment,
    )((input) => typia.json.validateStringify(input));
