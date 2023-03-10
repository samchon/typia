import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_assertPrune_ObjectNullable = _test_assertPrune(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => typia.assertPrune(input),
    ObjectNullable.SPOILERS,
);
