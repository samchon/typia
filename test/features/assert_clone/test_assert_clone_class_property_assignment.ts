import TSON from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_class_property_assignment =
    _test_assert_clone(
        "property assigned class",
        ClassPropertyAssignment.generate,
        (input) => TSON.assertClone(input),
        ClassPropertyAssignment.SPOILERS,
    );
