import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_isClone_ObjectNullable = _test_isClone(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => typia.isClone(input),
    ObjectNullable.SPOILERS,
);
