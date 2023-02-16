import typia from "typia";

import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_ObjectPropertyNullable = _test_isPrune(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => typia.isPrune(input),
    ObjectPropertyNullable.SPOILERS,
);
