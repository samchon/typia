import TSON from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_validate } from "./_test_validate";

export const test_validate_class_property_assignment = _test_validate(
    "property assigned class",
    ClassPropertyAssignment.generate,
    (input) => TSON.validate(input),
    // [
    //     (input) => {
    //         (input as any).id = null;
    //         return ["$input.id"];
    //     },
    //     (input) => {
    //         (input as any).name = () => "class";
    //         return ["$input.name"];
    //     },
    //     (input) => {
    //         (input as any).note = () => ({ value: "assignment" });
    //         return ["$input.note"];
    //     },
    //     (input) => {
    //         (input as any).editable = "Y";
    //         return ["$input.editable"];
    //     },
    //     (input) => {
    //         (input as any).incremental = 1;
    //         return ["$input.incremental"];
    //     },
    // ],
);
