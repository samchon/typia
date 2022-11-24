import TSON from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_class_property_assignment = _test_validate(
    "property assigned class",
    ClassPropertyAssignment.generate,
    TSON.createValidate<ClassPropertyAssignment>(),
    ClassPropertyAssignment.SPOILERS,
);
