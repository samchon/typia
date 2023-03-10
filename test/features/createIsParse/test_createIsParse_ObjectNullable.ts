import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_createIsParse_ObjectNullable = _test_isParse(
    "ObjectNullable",
    ObjectNullable.generate,
    typia.createIsParse<ObjectNullable>(),
    ObjectNullable.SPOILERS,
);
