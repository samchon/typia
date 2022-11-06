import TSON from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_class_property_assignment = _test_is_clone(
    "property assigned class",
    ClassPropertyAssignment.generate,
    (input) => TSON.isClone(input),
    ClassPropertyAssignment.SPOILERS,
);
