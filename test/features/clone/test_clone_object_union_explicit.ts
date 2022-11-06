import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_clone } from "./_test_clone";

export const test_clone_object_union_explicit = _test_clone(
    "union object",
    ObjectUnionExplicit.generate,
    (input) => TSON.clone(input),
);
