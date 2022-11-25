import TSON from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ClassClosure = _test_isClone(
    "ClassClosure",
    ClassClosure.generate,
    TSON.createIsClone<ClassClosure>(),
    ClassClosure.SPOILERS,
);