import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_createIsParse_ObjectUnionImplicit = _test_isParse(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    typia.createIsParse<ObjectUnionImplicit>(),
    ObjectUnionImplicit.SPOILERS,
);
