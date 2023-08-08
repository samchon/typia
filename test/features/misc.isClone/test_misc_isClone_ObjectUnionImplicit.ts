import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_misc_isClone_ObjectUnionImplicit = _test_misc_isClone(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => typia.misc.isClone(input),
    ObjectUnionImplicit.SPOILERS,
);
