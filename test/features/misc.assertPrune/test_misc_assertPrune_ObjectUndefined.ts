import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_misc_assertPrune_ObjectUndefined =
    _test_misc_assertPrune<ObjectUndefined>(ObjectUndefined)((input) =>
        typia.misc.assertPrune(input),
    );
