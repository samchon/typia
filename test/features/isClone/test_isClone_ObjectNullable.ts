import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ObjectNullable = _test_isClone(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => TSON.isClone(input),
    ObjectNullable.SPOILERS,
);