import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createAssertClone_ObjectUnionExplicit = _test_assertClone(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createAssertClone<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);
