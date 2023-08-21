import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_validate_ClassPropertyAssignment = _test_validate(
    "ClassPropertyAssignment",
)<ClassPropertyAssignment>(ClassPropertyAssignment)((input) =>
    typia.validate<ClassPropertyAssignment>(input),
);
