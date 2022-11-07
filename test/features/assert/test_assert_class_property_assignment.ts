import TSON from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_assert } from "./_test_assert";

export const test_assert_class_property_assignment = _test_assert(
    "property assigned class",
    ClassPropertyAssignment.generate,
    (input) => TSON.assert(input),
    ClassPropertyAssignment.SPOILERS,
);
