import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_validate_equals } from "./_test_validate_equals";

export const test_validate_equals_object_union_explicit = _test_validate_equals(
    "union object",
    ObjectUnionExplicit.generate,
    (input) => TSON.validateEquals(input),
);
