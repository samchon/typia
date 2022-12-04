import TSON from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ClassClosure = _test_validateClone(
    "ClassClosure",
    ClassClosure.generate,
    (input) => TSON.validateClone(input),
    ClassClosure.SPOILERS,
);
