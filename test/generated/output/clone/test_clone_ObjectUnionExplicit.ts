import typia from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_ObjectUnionExplicit = _test_clone("ObjectUnionExplicit", ObjectUnionExplicit.generate, (input) => ((input: ObjectUnionExplicit): typia.Primitive<ObjectUnionExplicit> => {
    const $throws = (typia.clone as any).throws;
    const $io0 = (input: any) => "number" === typeof input.x && "number" === typeof input.y && "point" === input.type;
    const $io1 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && $io2(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io2(input.p2)) && "line" === input.type;
    const $io2 = (input: any) => "number" === typeof input.x && "number" === typeof input.y;
    const $io3 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && $io2(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io2(input.p2)) && ("object" === typeof input.p3 && null !== input.p3 && $io2(input.p3)) && "triangle" === input.type;
    const $io4 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && $io2(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io2(input.p2)) && ("object" === typeof input.p3 && null !== input.p3 && $io2(input.p3)) && ("object" === typeof input.p4 && null !== input.p4 && $io2(input.p4)) && "rectangle" === input.type;
    const $io5 = (input: any) => Array.isArray(input.points) && input.points.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem)) && "polyline" === input.type;
    const $io6 = (input: any) => "object" === typeof input.outer && null !== input.outer && $io7(input.outer) && (Array.isArray(input.inner) && input.inner.every((elem: any) => "object" === typeof elem && null !== elem && $io7(elem))) && "polygon" === input.type;
    const $io7 = (input: any) => Array.isArray(input.points) && input.points.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem));
    const $io8 = (input: any) => "object" === typeof input.centroid && null !== input.centroid && $io2(input.centroid) && "number" === typeof input.radius && "circle" === input.type;
    const $iu0 = (input: any) => (() => {
        if ("point" === input.type)
            return $io0(input);
        if ("line" === input.type)
            return $io1(input);
        if ("triangle" === input.type)
            return $io3(input);
        if ("rectangle" === input.type)
            return $io4(input);
        if ("polyline" === input.type)
            return $io5(input);
        if ("polygon" === input.type)
            return $io6(input);
        if ("circle" === input.type)
            return $io8(input);
        return false;
    })();
    const $co0 = (input: any) => ({
        x: input.x,
        y: input.y,
        type: input.type
    });
    const $co1 = (input: any) => ({
        p1: "object" === typeof input.p1 && null !== input.p1 ? $co2(input.p1) : input.p1,
        p2: "object" === typeof input.p2 && null !== input.p2 ? $co2(input.p2) : input.p2,
        type: input.type
    });
    const $co2 = (input: any) => ({
        x: input.x,
        y: input.y
    });
    const $co3 = (input: any) => ({
        p1: "object" === typeof input.p1 && null !== input.p1 ? $co2(input.p1) : input.p1,
        p2: "object" === typeof input.p2 && null !== input.p2 ? $co2(input.p2) : input.p2,
        p3: "object" === typeof input.p3 && null !== input.p3 ? $co2(input.p3) : input.p3,
        type: input.type
    });
    const $co4 = (input: any) => ({
        p1: "object" === typeof input.p1 && null !== input.p1 ? $co2(input.p1) : input.p1,
        p2: "object" === typeof input.p2 && null !== input.p2 ? $co2(input.p2) : input.p2,
        p3: "object" === typeof input.p3 && null !== input.p3 ? $co2(input.p3) : input.p3,
        p4: "object" === typeof input.p4 && null !== input.p4 ? $co2(input.p4) : input.p4,
        type: input.type
    });
    const $co5 = (input: any) => ({
        points: Array.isArray(input.points) ? input.points.map((elem: any) => "object" === typeof elem && null !== elem ? $co2(elem) : elem) : input.points,
        type: input.type
    });
    const $co6 = (input: any) => ({
        outer: "object" === typeof input.outer && null !== input.outer ? $co7(input.outer) : input.outer,
        inner: Array.isArray(input.inner) ? input.inner.map((elem: any) => "object" === typeof elem && null !== elem ? $co7(elem) : elem) : input.inner,
        type: input.type
    });
    const $co7 = (input: any) => ({
        points: Array.isArray(input.points) ? input.points.map((elem: any) => "object" === typeof elem && null !== elem ? $co2(elem) : elem) : input.points
    });
    const $co8 = (input: any) => ({
        centroid: "object" === typeof input.centroid && null !== input.centroid ? $co2(input.centroid) : input.centroid,
        radius: input.radius,
        type: input.type
    });
    const $cu0 = (input: any) => (() => {
        if ("point" === input.type)
            return $co0(input);
        if ("line" === input.type)
            return $co1(input);
        if ("triangle" === input.type)
            return $co3(input);
        if ("rectangle" === input.type)
            return $co4(input);
        if ("polyline" === input.type)
            return $co5(input);
        if ("polygon" === input.type)
            return $co6(input);
        if ("circle" === input.type)
            return $co8(input);
        $throws({
            expected: "(ObjectUnionExplicit.Discriminator<\"point\", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<\"line\", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<\"triangle\", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<\"rectangle\", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<\"polyline\", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<\"polygon\", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<\"circle\", ObjectUnionExplicit.ICircle>)",
            value: input
        });
    })();
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $cu0(elem) : elem) : input;
})(input));
