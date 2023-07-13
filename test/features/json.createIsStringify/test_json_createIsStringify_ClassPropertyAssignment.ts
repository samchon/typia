import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_json_isStringify_ClassPropertyAssignment =
    _test_json_isStringify(
        "ClassPropertyAssignment",
        ClassPropertyAssignment.generate,
        typia.json.createIsStringify<ClassPropertyAssignment>(),
        ClassPropertyAssignment.SPOILERS,
    );
