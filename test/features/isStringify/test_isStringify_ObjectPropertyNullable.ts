import typia from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ObjectPropertyNullable = _test_isStringify(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => typia.isStringify(input),
    ObjectPropertyNullable.SPOILERS,
);