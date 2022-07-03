import TSON from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_assert } from "./_test_assert";

export const test_assert_class_closure = _test_assert(
    "class closure",
    ClassClosure.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            (input as any).id = 3;
            return "$input.id";
        },
        (input) => {
            (input as any).type = null;
            return "$input.type";
        },
        (input) => {
            (input as any).closure = null;
            return "$input.closure";
        },
    ],
);
