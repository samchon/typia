import TSON from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_stringify } from "../internal/_test_stringify";

export const test_create_stringify_class_property_assignment = _test_stringify(
    "property assigned class",
    ClassPropertyAssignment.generate,
    TSON.createStringify<ClassPropertyAssignment>(),
);
