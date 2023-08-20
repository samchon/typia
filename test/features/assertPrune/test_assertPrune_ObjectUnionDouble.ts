import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_assertPrune_ObjectUnionDouble = _test_assertPrune(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => typia.assertPrune<ObjectUnionDouble>(input),
    ObjectUnionDouble.SPOILERS,
);
