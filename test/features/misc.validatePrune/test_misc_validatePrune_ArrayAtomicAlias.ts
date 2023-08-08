import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_misc_validatePrune_ArrayAtomicAlias =
    _test_misc_validatePrune(
        "ArrayAtomicAlias",
        ArrayAtomicAlias.generate,
        (input) => typia.misc.validatePrune(input),
        ArrayAtomicAlias.SPOILERS,
    );
