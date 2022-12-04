import TSON from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ClassPropertyAssignment =
    _test_validateClone(
        "ClassPropertyAssignment",
        ClassPropertyAssignment.generate,
        TSON.createValidateClone<ClassPropertyAssignment>(),
        ClassPropertyAssignment.SPOILERS,
    );
