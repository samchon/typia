import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_validate_for_of } from "./_test_validate_for_of";

export const test_validate_object_union_explicit = _test_validate_for_of(
    "union object",
    ObjectUnionExplicit.generate,
    (input) => TSON.validate(input),
    // GIVE UP, SOMEDAY LATER
);
