import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_assertClone_ObjectUnionExplicit = _test_assertClone(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => typia.assertClone(input),
    ObjectUnionExplicit.SPOILERS,
);
