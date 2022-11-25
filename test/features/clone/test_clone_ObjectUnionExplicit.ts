import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ObjectUnionExplicit = _test_clone(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => TSON.clone(input),
);