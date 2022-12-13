import typia from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ObjectNullable = _test_isStringify(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => typia.isStringify(input),
    ObjectNullable.SPOILERS,
);