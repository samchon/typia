import typia from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ObjectNullable = _test_isParse(
    "ObjectNullable",
    ObjectNullable.generate,
    typia.createIsParse<ObjectNullable>(),
    ObjectNullable.SPOILERS,
);
