import TSON from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_assert } from "../internal/_test_assert";

export const test_create_assert_class_closure = _test_assert(
    "class closure",
    ClassClosure.generate,
    TSON.createAssert<ClassClosure>(),
    ClassClosure.SPOILERS,
);
