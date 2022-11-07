import TSON from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_assert } from "./_test_assert";

export const test_assert_class_closure = _test_assert(
    "class closure",
    ClassClosure.generate,
    (input) => TSON.assert(input),
    ClassClosure.SPOILERS,
);
