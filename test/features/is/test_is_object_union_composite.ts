import TSON from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_is } from "./_test_is";

export const test_is_object_union_composite = _test_is(
    "union object",
    ObjectUnionComposite.generate,
    (input) => TSON.is(input),
    [
        (input) => ((input[0] as ObjectUnionComposite.IPoint).x = {} as any),
        (input) => ((input[1] as ObjectUnionComposite.ILine).p2 = [] as any),
        (input) => ((input[2] as ObjectUnionComposite.ITriangle).p3 = null!),
        (input) => ((input[3] as ObjectUnionComposite.IRectangle).p4 = null!),
        (input) =>
            ((input[4] as ObjectUnionComposite.IPolyline).points = 3 as any),
        (input) =>
            ((input[5] as ObjectUnionComposite.IPolygon).outer = {} as any),
        (input) =>
            ((input[6] as ObjectUnionComposite.IPointedShape).outer = {
                length: 0,
            } as any),
        (input) =>
            ((input[7] as ObjectUnionComposite.ICircle).radius =
                "string" as any),
    ],
);
