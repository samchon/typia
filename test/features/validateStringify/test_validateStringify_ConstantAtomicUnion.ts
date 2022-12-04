import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ConstantAtomicUnion =
    _test_validateStringify(
        "ConstantAtomicUnion",
        ConstantAtomicUnion.generate,
        (input) => TSON.validateStringify(input),
        ConstantAtomicUnion.SPOILERS,
    );
