import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_misc_isPrune_TagObjectUnion =
    _test_misc_isPrune<TagObjectUnion>(TagObjectUnion)(
        typia.misc.createIsPrune<TagObjectUnion>(),
    );
