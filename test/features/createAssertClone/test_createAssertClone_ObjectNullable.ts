import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_createAssertClone_ObjectNullable = _test_assertClone(
    "ObjectNullable",
    ObjectNullable.generate,
    typia.createAssertClone<ObjectNullable>(),
    ObjectNullable.SPOILERS,
);
