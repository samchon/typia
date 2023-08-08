import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_misc_assertPrune_ObjectGenericArray = _test_misc_assertPrune(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => typia.misc.assertPrune(input),
    ObjectGenericArray.SPOILERS,
);
