import typia from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ObjectNullable = _test_assertStringify(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => typia.assertStringify(input),
    ObjectNullable.SPOILERS,
);