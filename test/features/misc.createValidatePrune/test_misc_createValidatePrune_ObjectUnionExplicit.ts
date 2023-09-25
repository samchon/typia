import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_misc_createValidatePrune_ObjectUnionExplicit =
    _test_misc_validatePrune("ObjectUnionExplicit")<ObjectUnionExplicit>(
        ObjectUnionExplicit,
    )(typia.misc.createValidatePrune<ObjectUnionExplicit>());
