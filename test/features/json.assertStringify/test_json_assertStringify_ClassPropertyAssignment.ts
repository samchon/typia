import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_json_assertStringify_ClassPropertyAssignment =
    _test_json_assertStringify(
        "ClassPropertyAssignment",
    )<ClassPropertyAssignment>(ClassPropertyAssignment)((input) =>
        typia.json.assertStringify<ClassPropertyAssignment>(input),
    );
