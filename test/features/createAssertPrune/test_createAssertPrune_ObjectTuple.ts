import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_createAssertPrune_ObjectTuple = _test_assertPrune(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.createAssertPrune<ObjectTuple>(),
    ObjectTuple.SPOILERS,
);
