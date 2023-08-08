import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_misc_validatePrune_TupleRestArray = _test_misc_validatePrune(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.misc.validatePrune(input),
    TupleRestArray.SPOILERS,
);
