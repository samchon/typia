import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TagDefault } from "../../structures/TagDefault";

export const test_misc_validatePrune_TagDefault =
    _test_misc_validatePrune<TagDefault>(TagDefault)(
        typia.misc.createValidatePrune<TagDefault>(),
    );
