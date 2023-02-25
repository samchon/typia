import typia from "../../../src";

import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_ObjectPropertyNullable = _test_assertPrune(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => typia.assertPrune(input),
    ObjectPropertyNullable.SPOILERS,
);
