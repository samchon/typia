import TSON from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_clone } from "./_test_clone";

export const test_clone_class_property_assignment = _test_clone(
    "property assigned class",
    ClassPropertyAssignment.generate,
    (input) => TSON.clone(input),
);
