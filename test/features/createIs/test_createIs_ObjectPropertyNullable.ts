import typia from "typia";

import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectPropertyNullable = _test_is(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    typia.createIs<ObjectPropertyNullable>(),
    ObjectPropertyNullable.SPOILERS,
);
