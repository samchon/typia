import TSON from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_is } from "./../is/_test_is";

export const test_create_is_class_closure = _test_is(
    "class closure",
    ClassClosure.generate,
    TSON.createIs<ClassClosure>(),
    ClassClosure.SPOILERS,
);
