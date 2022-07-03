import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_is } from "./_test_is";

export const test_is_object_union_implicit = _test_is(
    "implicit union object",
    ObjectUnionImplicit.generate,
    (input) => TSON.is(input),
    [
        (input) => ((input[0] as ObjectUnionImplicit.IPoint).x = {} as any),
        (input) => ((input[1] as ObjectUnionImplicit.ILine).p2 = [] as any),
        (input) => ((input[2] as ObjectUnionImplicit.ITriangle).p3 = null!),
        (input) => ((input[3] as ObjectUnionImplicit.IRectangle).p4 = null!),
        (input) =>
            ((input[4] as ObjectUnionImplicit.IPolyline).points = 3 as any),
        (input) =>
            ((input[5] as ObjectUnionImplicit.IPolygon).outer = {} as any),
        (input) =>
            ((input[6] as ObjectUnionImplicit.ICircle).radius =
                "string" as any),
    ],
);
