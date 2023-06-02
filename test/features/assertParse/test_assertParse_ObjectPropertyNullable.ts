import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_assertParse_ObjectPropertyNullable = _test_assertParse(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => typia.assertParse<ObjectPropertyNullable>(input),
    ObjectPropertyNullable.SPOILERS,
);
