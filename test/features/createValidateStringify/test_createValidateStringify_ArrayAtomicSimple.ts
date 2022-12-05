import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ArrayAtomicSimple =
    _test_validateStringify(
        "ArrayAtomicSimple",
        ArrayAtomicSimple.generate,
        TSON.createValidateStringify<ArrayAtomicSimple>(),
        ArrayAtomicSimple.SPOILERS,
    );
