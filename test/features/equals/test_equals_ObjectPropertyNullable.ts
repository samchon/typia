import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ObjectPropertyNullable = _test_equals(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => TSON.equals(input),
);