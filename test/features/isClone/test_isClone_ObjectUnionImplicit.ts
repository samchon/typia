import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_isClone_ObjectUnionImplicit = _test_isClone(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => typia.isClone(input),
    ObjectUnionImplicit.SPOILERS,
);
