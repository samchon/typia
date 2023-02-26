import typia from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_ObjectNullable = _test_assertPrune(
    "ObjectNullable",
    ObjectNullable.generate,
    typia.createAssertPrune<ObjectNullable>(),
    ObjectNullable.SPOILERS,
);
