import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_createAssertClone_ObjectUnionImplicit = _test_assertClone(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    typia.createAssertClone<ObjectUnionImplicit>(),
    ObjectUnionImplicit.SPOILERS,
);
