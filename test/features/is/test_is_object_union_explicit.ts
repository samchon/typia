import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_is } from "./_test_is";

export const test_is_object_union_explicit = _test_is(
    "explicit union object",
    ObjectUnionExplicit.generate,
    (input) => TSON.is(input),
);
