import TSON from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ClassClosure = _test_validateClone(
    "ClassClosure",
    ClassClosure.generate,
    TSON.createValidateClone<ClassClosure>(),
    ClassClosure.SPOILERS,
);
