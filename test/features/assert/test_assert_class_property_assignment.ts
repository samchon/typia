import TSON from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_assert } from "./_test_assert";

export const test_assert_class_property_assignment = _test_assert(
    "property assigned class",
    ClassPropertyAssignment.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            (input as any).id = null;
            return "$input.id";
        },
        (input) => {
            (input as any).name = () => "class";
            return "$input.name";
        },
        (input) => {
            (input as any).note = () => ({ value: "assignment" });
            return "$input.note";
        },
        (input) => {
            (input as any).editable = "Y";
            return "$input.editable";
        },
        (input) => {
            (input as any).incremental = 1;
            return "$input.incremental";
        },
    ],
);
