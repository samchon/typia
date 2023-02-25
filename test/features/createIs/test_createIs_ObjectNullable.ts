import typia from "../../../src";

import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectNullable = _test_is(
    "ObjectNullable",
    ObjectNullable.generate,
    typia.createIs<ObjectNullable>(),
    ObjectNullable.SPOILERS,
);
