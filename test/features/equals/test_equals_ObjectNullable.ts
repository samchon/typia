import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ObjectNullable = _test_equals(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => TSON.equals(input),
);