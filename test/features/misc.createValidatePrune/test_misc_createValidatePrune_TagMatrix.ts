import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_misc_validatePrune_TagMatrix =
    _test_misc_validatePrune<TagMatrix>(TagMatrix)(
        typia.misc.createValidatePrune<TagMatrix>(),
    );
