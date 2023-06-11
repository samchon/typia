import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_assertClone_ObjectPropertyNullable = _test_assertClone(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => typia.assertClone(input),
    ObjectPropertyNullable.SPOILERS,
);
