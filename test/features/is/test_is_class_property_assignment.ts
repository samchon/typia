import TSON from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_is } from "./_test_is";

export const test_is_class_property_assignment = _test_is(
    "property assigned class",
    ClassPropertyAssignment.generate,
    (input) => TSON.is(input),
    [
        (input) => ((input as any).id = null),
        (input) => ((input as any).name = () => "class"),
        (input) => ((input as any).note = () => ({ value: "assignment" })),
        (input) => ((input as any).editable = "Y"),
        (input) => ((input as any).incremental = 1),
    ],
);
