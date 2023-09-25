import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_misc_createValidatePrune_ObjectInternal =
    _test_misc_validatePrune("ObjectInternal")<ObjectInternal>(ObjectInternal)(
        typia.misc.createValidatePrune<ObjectInternal>(),
    );
