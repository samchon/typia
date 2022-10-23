import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_validate_equals } from "./../validate_equals/_test_validate_equals";

export const test_create_validate_equals_object_union_implicit =
    _test_validate_equals(
        "union object",
        ObjectUnionImplicit.generate,
        TSON.createValidateEquals<ObjectUnionImplicit>(),
    );
