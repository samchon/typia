import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_object_union_explicit = _test_validate(
    "union object",
    ObjectUnionExplicit.generate,
    TSON.createValidate<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);
