import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ObjectPropertyNullable = _test_assertClone(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => TSON.assertClone(input),
    ObjectPropertyNullable.SPOILERS,
);
