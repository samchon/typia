import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_createIsPrune_ObjectUnionImplicit = _test_isPrune(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    typia.createIsPrune<ObjectUnionImplicit>(),
    ObjectUnionImplicit.SPOILERS,
);
