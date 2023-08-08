import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_misc_isPrune_ObjectUnionImplicit = _test_misc_isPrune(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    typia.misc.createIsPrune<ObjectUnionImplicit>(),
    ObjectUnionImplicit.SPOILERS,
);
