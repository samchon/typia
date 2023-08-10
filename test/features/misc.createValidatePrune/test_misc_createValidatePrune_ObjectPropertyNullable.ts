import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_misc_validatePrune_ObjectPropertyNullable =
    _test_misc_validatePrune<ObjectPropertyNullable>(ObjectPropertyNullable)(
        typia.misc.createValidatePrune<ObjectPropertyNullable>(),
    );
