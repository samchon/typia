import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_misc_validatePrune_ObjectUndefined = _test_misc_validatePrune(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.misc.validatePrune(input),
    ObjectUndefined.SPOILERS,
);
