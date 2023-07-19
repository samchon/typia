import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TagPattern } from "../../structures/TagPattern";

export const test_misc_assertPrune_TagPattern =
    _test_misc_assertPrune<TagPattern>(TagPattern)((input) =>
        typia.misc.assertPrune(input),
    );
