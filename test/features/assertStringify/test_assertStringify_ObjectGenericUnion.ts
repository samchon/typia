import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_assertStringify_ObjectGenericUnion = _test_assertStringify(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => typia.assertStringify(input),
    ObjectGenericUnion.SPOILERS,
);
