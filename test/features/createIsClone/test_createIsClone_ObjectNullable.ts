import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_createIsClone_ObjectNullable = _test_isClone(
    "ObjectNullable",
    ObjectNullable.generate,
    typia.createIsClone<ObjectNullable>(),
    ObjectNullable.SPOILERS,
);
