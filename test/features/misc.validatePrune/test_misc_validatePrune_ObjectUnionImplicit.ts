import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_misc_validatePrune_ObjectUnionImplicit =
    _test_misc_validatePrune<ObjectUnionImplicit>(ObjectUnionImplicit)(
        (input) => typia.misc.validatePrune(input),
    );
