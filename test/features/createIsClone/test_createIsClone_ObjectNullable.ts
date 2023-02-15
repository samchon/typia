import typia from "typia";

import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ObjectNullable = _test_isClone(
    "ObjectNullable",
    ObjectNullable.generate,
    typia.createIsClone<ObjectNullable>(),
    ObjectNullable.SPOILERS,
);
