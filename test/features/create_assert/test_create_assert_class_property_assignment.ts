import TSON from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_assert } from "../internal/_test_assert";

export const test_create_assert_class_property_assignment = _test_assert(
    "property assigned class",
    ClassPropertyAssignment.generate,
    TSON.createAssert<ClassPropertyAssignment>(),
    ClassPropertyAssignment.SPOILERS,
);
