import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_misc_validatePrune_ObjectInternal = _test_misc_validatePrune(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => typia.misc.validatePrune(input),
    ObjectInternal.SPOILERS,
);
