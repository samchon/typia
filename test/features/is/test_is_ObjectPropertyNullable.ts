import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_is_ObjectPropertyNullable = _test_is(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => typia.is<ObjectPropertyNullable>(input),
    ObjectPropertyNullable.SPOILERS,
);
