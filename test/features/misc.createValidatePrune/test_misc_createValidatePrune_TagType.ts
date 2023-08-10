import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TagType } from "../../structures/TagType";

export const test_misc_validatePrune_TagType =
    _test_misc_validatePrune<TagType>(TagType)(
        typia.misc.createValidatePrune<TagType>(),
    );
