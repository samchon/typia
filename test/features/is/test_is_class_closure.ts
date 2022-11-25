import TSON from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_is } from "../internal/_test_is";

export const test_is_class_closure = _test_is(
    "class closure",
    ClassClosure.generate,
    (input) => TSON.is(input),
    ClassClosure.SPOILERS,
);
