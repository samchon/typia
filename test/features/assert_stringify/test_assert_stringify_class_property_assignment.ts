import TSON from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_class_property_assignment =
    _test_assert_stringify(
        "property assigned class",
        ClassPropertyAssignment.generate,
        (input) => TSON.assertStringify(input),
        ClassPropertyAssignment.SPOILERS,
    );
