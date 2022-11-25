import TSON from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_class_property_assignment = _test_assert_type(
    "property assigned class",
    ClassPropertyAssignment.generate,
    (input) => TSON.assertType(input),
    ClassPropertyAssignment.SPOILERS,
);
