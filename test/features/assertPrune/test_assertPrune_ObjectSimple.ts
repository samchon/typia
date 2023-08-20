import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_assertPrune_ObjectSimple = _test_assertPrune(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.assertPrune<ObjectSimple>(input),
    ObjectSimple.SPOILERS,
);
