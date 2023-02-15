import typia from "typia";

import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_ObjectPropertyNullable = _test_assertPrune(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    typia.createAssertPrune<ObjectPropertyNullable>(),
    ObjectPropertyNullable.SPOILERS,
);
