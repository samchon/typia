import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_object_union_implicit = _test_validate(
    "union object",
    ObjectUnionImplicit.generate,
    TSON.createValidate<ObjectUnionImplicit>(),
    ObjectUnionImplicit.SPOILERS,
);
