import TSON from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_is } from "../internal/_test_is";

export const test_is_class_property_assignment = _test_is(
    "property assigned class",
    ClassPropertyAssignment.generate,
    (input) => TSON.is(input),
    ClassPropertyAssignment.SPOILERS,
);
