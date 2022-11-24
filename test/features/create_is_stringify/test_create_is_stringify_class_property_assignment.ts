import TSON from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_class_property_assignment =
    _test_is_stringify(
        "property assigned class",
        ClassPropertyAssignment.generate,
        TSON.createIsStringify<ClassPropertyAssignment>(),
        ClassPropertyAssignment.SPOILERS,
    );
