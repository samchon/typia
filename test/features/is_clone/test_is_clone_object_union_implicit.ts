import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_object_union_implicit = _test_is_clone(
    "union object",
    ObjectUnionImplicit.generate,
    (input) => TSON.isClone(input),
    ObjectUnionImplicit.SPOILERS,
);
