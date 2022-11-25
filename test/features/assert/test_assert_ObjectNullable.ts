import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ObjectNullable = _test_assert(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => TSON.assert(input),
    ObjectNullable.SPOILERS,
);