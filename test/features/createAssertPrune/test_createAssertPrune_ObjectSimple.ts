import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_createAssertPrune_ObjectSimple = _test_assertPrune(
    "ObjectSimple",
    ObjectSimple.generate,
    typia.createAssertPrune<ObjectSimple>(),
    ObjectSimple.SPOILERS,
);
