import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_misc_validatePrune_ObjectOptional =
    _test_misc_validatePrune<ObjectOptional>(ObjectOptional)((input) =>
        typia.misc.validatePrune(input),
    );
