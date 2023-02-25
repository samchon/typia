import typia from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_ObjectGeneric = _test_assertPrune(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => typia.assertPrune(input),
    ObjectGeneric.SPOILERS,
);
