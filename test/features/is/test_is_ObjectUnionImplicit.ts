import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectUnionImplicit = _test_is(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => TSON.is(input),
    ObjectUnionImplicit.SPOILERS,
);
