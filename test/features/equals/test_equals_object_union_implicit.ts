import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_object_union_implicit = _test_equals(
    "implicit union object",
    ObjectUnionImplicit.generate,
    (input) => TSON.equals(input),
);
