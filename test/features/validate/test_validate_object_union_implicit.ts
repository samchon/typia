import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_validate_for_of } from "./_test_validate_for_of";

export const test_validate_object_union_implicit = _test_validate_for_of(
    "union object",
    ObjectUnionImplicit.generate,
    (input) => TSON.validate(input),
    // GIVE UP, SOMEDAY LATER
);
