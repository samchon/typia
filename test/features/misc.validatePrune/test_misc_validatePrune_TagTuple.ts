import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TagTuple } from "../../structures/TagTuple";

export const test_misc_validatePrune_TagTuple =
    _test_misc_validatePrune<TagTuple>(TagTuple)((input) =>
        typia.misc.validatePrune(input),
    );
