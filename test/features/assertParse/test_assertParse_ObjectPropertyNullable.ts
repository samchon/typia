import typia from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ObjectPropertyNullable = _test_assertParse(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => typia.assertParse<ObjectPropertyNullable>(input),
    ObjectPropertyNullable.SPOILERS,
);
