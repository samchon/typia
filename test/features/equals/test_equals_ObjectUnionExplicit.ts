import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ObjectUnionExplicit = _test_equals(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => TSON.equals(input),
);