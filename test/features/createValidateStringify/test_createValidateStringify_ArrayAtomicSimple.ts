import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createValidateStringify_ArrayAtomicSimple =
    _test_validateStringify(
        "ArrayAtomicSimple",
        ArrayAtomicSimple.generate,
        typia.createValidateStringify<ArrayAtomicSimple>(),
        ArrayAtomicSimple.SPOILERS,
    );
