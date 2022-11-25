import TSON from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ClassClosure = _test_assertClone(
    "ClassClosure",
    ClassClosure.generate,
    TSON.createAssertClone<ClassClosure>(),
    ClassClosure.SPOILERS,
);
