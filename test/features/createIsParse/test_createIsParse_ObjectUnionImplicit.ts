import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ObjectUnionImplicit = _test_isParse(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    TSON.createIsParse<ObjectUnionImplicit>(),
    ObjectUnionImplicit.SPOILERS,
);
