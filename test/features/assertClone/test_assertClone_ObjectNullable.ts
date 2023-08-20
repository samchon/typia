import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_assertClone_ObjectNullable = _test_assertClone(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => typia.assertClone<ObjectNullable>(input),
    ObjectNullable.SPOILERS,
);
