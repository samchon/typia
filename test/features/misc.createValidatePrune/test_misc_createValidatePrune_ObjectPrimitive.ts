import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_misc_validatePrune_ObjectPrimitive =
    _test_misc_validatePrune<ObjectPrimitive>(ObjectPrimitive)(
        typia.misc.createValidatePrune<ObjectPrimitive>(),
    );
