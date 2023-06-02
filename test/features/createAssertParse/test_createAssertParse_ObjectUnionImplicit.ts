import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_createAssertParse_ObjectUnionImplicit = _test_assertParse(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    typia.createAssertParse<ObjectUnionImplicit>(),
    ObjectUnionImplicit.SPOILERS,
);
