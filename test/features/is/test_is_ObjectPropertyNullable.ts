import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectPropertyNullable = _test_is(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => TSON.is(input),
    ObjectPropertyNullable.SPOILERS,
);