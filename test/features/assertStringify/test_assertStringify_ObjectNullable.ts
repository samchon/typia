import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_assertStringify_ObjectNullable = _test_assertStringify(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => typia.assertStringify(input),
    ObjectNullable.SPOILERS,
);
