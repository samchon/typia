import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ObjectUnionImplicit = _test_validate(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    TSON.createValidate<ObjectUnionImplicit>(),
    ObjectUnionImplicit.SPOILERS,
);