import typia from "typia";

import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectUnionDouble = _test_is(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    typia.createIs<ObjectUnionDouble>(),
    ObjectUnionDouble.SPOILERS,
);
