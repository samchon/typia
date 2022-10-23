import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_validate } from "./_test_validate";

export const test_validate_object_union_implicit = _test_validate(
    "union object",
    ObjectUnionImplicit.generate,
    (input) => TSON.validate(input),
    ObjectUnionImplicit.SPOILERS,
);
