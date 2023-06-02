import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_assertPrune_ObjectPropertyNullable = _test_assertPrune(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => typia.assertPrune(input),
    ObjectPropertyNullable.SPOILERS,
);
