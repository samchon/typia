import TSON from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_validate } from "./_test_validate";

export const test_validate_class_closure = _test_validate(
    "class closure",
    ClassClosure.generate,
    (input) => TSON.validate(input),
    // [
    //     (input) => {
    //         (input as any).id = 3;
    //         return ["$input.id"];
    //     },
    //     (input) => {
    //         (input as any).type = null;
    //         return ["$input.type"];
    //     },
    //     (input) => {
    //         (input as any).closure = null;
    //         return ["$input.closure"];
    //     },
    // ],
);
