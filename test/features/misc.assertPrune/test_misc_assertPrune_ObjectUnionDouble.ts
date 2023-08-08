import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_misc_assertPrune_ObjectUnionDouble = _test_misc_assertPrune(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => typia.misc.assertPrune(input),
    ObjectUnionDouble.SPOILERS,
);
