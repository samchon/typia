import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TagCustom } from "../../structures/TagCustom";

export const test_misc_assertPrune_TagCustom =
    _test_misc_assertPrune<TagCustom>(TagCustom)((input) =>
        typia.misc.assertPrune<TagCustom>(input),
    );
