import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_misc_assertClone_ObjectUnionImplicit = _test_misc_assertClone(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    typia.misc.createAssertClone<ObjectUnionImplicit>(),
    ObjectUnionImplicit.SPOILERS,
);
