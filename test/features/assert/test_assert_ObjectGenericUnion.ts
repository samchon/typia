import typia from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ObjectGenericUnion = _test_assert(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => typia.assert(input),
    ObjectGenericUnion.SPOILERS,
);