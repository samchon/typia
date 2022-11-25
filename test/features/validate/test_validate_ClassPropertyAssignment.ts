import TSON from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ClassPropertyAssignment = _test_validate(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    (input) => TSON.validate(input),
    ClassPropertyAssignment.SPOILERS,
);