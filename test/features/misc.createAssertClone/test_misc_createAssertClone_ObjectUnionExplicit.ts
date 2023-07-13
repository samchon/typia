import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_misc_assertClone_ObjectUnionExplicit = _test_misc_assertClone(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.misc.createAssertClone<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);
