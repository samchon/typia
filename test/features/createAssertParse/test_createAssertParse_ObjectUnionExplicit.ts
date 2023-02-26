import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createAssertParse_ObjectUnionExplicit = _test_assertParse(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createAssertParse<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);
