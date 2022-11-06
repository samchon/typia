import TSON from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_class_property_assignment =
    _test_assert_clone(
        "property assigned class",
        ClassPropertyAssignment.generate,
        TSON.createAssertClone<ClassPropertyAssignment>(),
        ClassPropertyAssignment.SPOILERS,
    );
