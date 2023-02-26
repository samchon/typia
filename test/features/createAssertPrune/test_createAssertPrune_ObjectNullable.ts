import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_createAssertPrune_ObjectNullable = _test_assertPrune(
    "ObjectNullable",
    ObjectNullable.generate,
    typia.createAssertPrune<ObjectNullable>(),
    ObjectNullable.SPOILERS,
);
