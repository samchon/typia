import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_object_union_explicit = _test_is_clone(
    "union object",
    ObjectUnionExplicit.generate,
    (input) => TSON.isClone(input),
    ObjectUnionExplicit.SPOILERS,
);
