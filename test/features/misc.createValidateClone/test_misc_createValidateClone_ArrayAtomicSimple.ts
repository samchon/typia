import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_misc_validateClone_ArrayAtomicSimple =
    _test_misc_validateClone(
        "ArrayAtomicSimple",
        ArrayAtomicSimple.generate,
        typia.misc.createValidateClone<ArrayAtomicSimple>(),
        ArrayAtomicSimple.SPOILERS,
    );
