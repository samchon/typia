import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_isClone_ObjectUnionExplicit = _test_isClone(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => typia.isClone(input),
    ObjectUnionExplicit.SPOILERS,
);
