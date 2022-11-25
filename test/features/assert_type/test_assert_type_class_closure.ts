import TSON from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_class_closure = _test_assert_type(
    "class closure",
    ClassClosure.generate,
    (input) => TSON.assertType(input),
    ClassClosure.SPOILERS,
);
