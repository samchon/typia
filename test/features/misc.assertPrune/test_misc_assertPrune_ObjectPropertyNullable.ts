import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_misc_assertPrune_ObjectPropertyNullable =
    _test_misc_assertPrune<ObjectPropertyNullable>(ObjectPropertyNullable)(
        (input) => typia.misc.assertPrune(input),
    );
