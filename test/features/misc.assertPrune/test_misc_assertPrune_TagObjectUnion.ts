import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_misc_assertPrune_TagObjectUnion =
    _test_misc_assertPrune<TagObjectUnion>(TagObjectUnion)((input) =>
        typia.misc.assertPrune<TagObjectUnion>(input),
    );
