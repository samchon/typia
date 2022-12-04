import TSON from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ClassClosure =
    _test_validateStringify(
        "ClassClosure",
        ClassClosure.generate,
        TSON.createValidateStringify<ClassClosure>(),
        ClassClosure.SPOILERS,
    );
