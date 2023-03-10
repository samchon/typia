import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_assertClone_ObjectGenericUnion = _test_assertClone(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => typia.assertClone(input),
    ObjectGenericUnion.SPOILERS,
);
