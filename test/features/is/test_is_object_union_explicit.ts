import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_is } from "./_test_is";

export const test_is_object_union_explicit = _test_is(
    "explicit union object",
    ObjectUnionExplicit.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0].type = "line"), // point
        (input) => (input[1].type = "circle"), // line
        (input) => (input[2].type = "polyline"), // triangle
        (input) => (input[3].type = "point"), // rectangle
        (input) => (input[4].type = "line"), // polyline
        (input) => (input[5].type = "point"), // polygon
        (input) => (input[6].type = "polyline"), // circle
    ],
);
