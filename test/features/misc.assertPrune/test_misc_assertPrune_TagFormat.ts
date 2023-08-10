import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TagFormat } from "../../structures/TagFormat";

export const test_misc_assertPrune_TagFormat =
    _test_misc_assertPrune<TagFormat>(TagFormat)((input) =>
        typia.misc.assertPrune<TagFormat>(input),
    );
