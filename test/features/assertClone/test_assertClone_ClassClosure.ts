import TSON from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ClassClosure = _test_assertClone(
    "ClassClosure",
    ClassClosure.generate,
    (input) => TSON.assertClone(input),
    ClassClosure.SPOILERS,
);