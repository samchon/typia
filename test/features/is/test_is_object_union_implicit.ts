import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_is } from "./_test_is";

export const test_is_object_union_implicit = _test_is(
    "implicit union object",
    ObjectUnionImplicit.generate,
    (input) => TSON.is(input),
);
