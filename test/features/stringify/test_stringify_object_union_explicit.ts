import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_object_union_explicit = _test_stringify(
    "union object",
    ObjectUnionExplicit.generate(),
    (input) => TSON.stringify(input),
);
