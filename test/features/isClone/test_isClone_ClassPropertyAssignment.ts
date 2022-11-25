import TSON from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ClassPropertyAssignment = _test_isClone(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    (input) => TSON.isClone(input),
    ClassPropertyAssignment.SPOILERS,
);
