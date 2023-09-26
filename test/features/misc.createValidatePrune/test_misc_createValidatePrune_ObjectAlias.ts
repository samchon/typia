import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_misc_createValidatePrune_ObjectAlias =
    _test_misc_validatePrune("ObjectAlias")<ObjectAlias>(ObjectAlias)(
        typia.misc.createValidatePrune<ObjectAlias>(),
    );
