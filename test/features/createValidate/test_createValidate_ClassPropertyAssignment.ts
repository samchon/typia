import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_createValidate_ClassPropertyAssignment = _test_validate(
    "ClassPropertyAssignment",
)<ClassPropertyAssignment>(ClassPropertyAssignment)(
    typia.createValidate<ClassPropertyAssignment>(),
);
