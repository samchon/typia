import TSON from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_class_property_assignment = _test_is_clone(
    "property assigned class",
    ClassPropertyAssignment.generate,
    TSON.createIsClone<ClassPropertyAssignment>(),
    ClassPropertyAssignment.SPOILERS,
);
