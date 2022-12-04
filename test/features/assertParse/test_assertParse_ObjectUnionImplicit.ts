import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ObjectUnionImplicit = _test_assertParse(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => TSON.assertParse<ObjectUnionImplicit>(input),
    ObjectUnionImplicit.SPOILERS,
);
