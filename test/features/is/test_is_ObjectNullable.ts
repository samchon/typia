import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectNullable = _test_is(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => TSON.is(input),
    ObjectNullable.SPOILERS,
);