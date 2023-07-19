import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TagPattern } from "../../structures/TagPattern";

export const test_misc_validatePrune_TagPattern =
    _test_misc_validatePrune<TagPattern>(TagPattern)(
        typia.misc.createValidatePrune<TagPattern>(),
    );
