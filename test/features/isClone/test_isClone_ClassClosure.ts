import TSON from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ClassClosure = _test_isClone(
    "ClassClosure",
    ClassClosure.generate,
    (input) => TSON.isClone(input),
    ClassClosure.SPOILERS,
);
