import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_validate } from "./_test_validate";

export const test_validate_object_union_explicit = _test_validate(
    "union object",
    ObjectUnionExplicit.generate,
    (input) => TSON.validate(input),
    ObjectUnionExplicit.SPOILERS,
);
