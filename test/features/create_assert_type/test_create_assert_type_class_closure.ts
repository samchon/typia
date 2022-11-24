import TSON from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_class_closure = _test_assert_type(
    "class closure",
    ClassClosure.generate,
    TSON.createAssertType<ClassClosure>(),
    ClassClosure.SPOILERS,
);
