import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ObjectUnionImplicit = _test_assertParse(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    TSON.createAssertParse<ObjectUnionImplicit>(),
    ObjectUnionImplicit.SPOILERS,
);
