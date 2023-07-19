import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TagLength } from "../../structures/TagLength";

export const test_misc_assertPrune_TagLength =
    _test_misc_assertPrune<TagLength>(TagLength)(
        typia.misc.createAssertPrune<TagLength>(),
    );
