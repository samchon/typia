import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_isStringify_ObjectNullable = _test_isStringify(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => typia.isStringify<ObjectNullable>(input),
    ObjectNullable.SPOILERS,
);
