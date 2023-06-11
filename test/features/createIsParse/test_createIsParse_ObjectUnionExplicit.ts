import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createIsParse_ObjectUnionExplicit = _test_isParse(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createIsParse<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);
