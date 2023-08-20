import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_isClone_ObjectPropertyNullable = _test_isClone(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => typia.isClone<ObjectPropertyNullable>(input),
    ObjectPropertyNullable.SPOILERS,
);
