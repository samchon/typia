import TSON from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_is } from "./_test_is";

export const test_is_class_closure = _test_is(
    "class closure",
    ClassClosure.generate,
    (input) => TSON.is(input),
    [
        (input) => ((input as any).id = 3),
        (input) => ((input as any).type = null),
        (input) => ((input as any).closure = null),
    ],
);
