import typia from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_createAssertClone_ObjectUnionExplicit = _test_assertClone("ObjectUnionExplicit", ObjectUnionExplicit.generate, (input: any): typia.Primitive<ObjectUnionExplicit> => { const assert = (input: any) => {
    const $guard = (typia.createAssertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectUnionExplicit => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.x || $guard(_exceptionable, {
            path: _path + ".x",
            expected: "number",
            value: input.x
        })) && ("number" === typeof input.y || $guard(_exceptionable, {
            path: _path + ".y",
            expected: "number",
            value: input.y
        })) && ("point" === input.type || $guard(_exceptionable, {
            path: _path + ".type",
            expected: "\"point\"",
            value: input.type
        }));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.p1 && null !== input.p1 || $guard(_exceptionable, {
            path: _path + ".p1",
            expected: "Resolve<ObjectUnionExplicit.IPoint>",
            value: input.p1
        })) && $ao2(input.p1, _path + ".p1", true && _exceptionable) && (("object" === typeof input.p2 && null !== input.p2 || $guard(_exceptionable, {
            path: _path + ".p2",
            expected: "Resolve<ObjectUnionExplicit.IPoint>",
            value: input.p2
        })) && $ao2(input.p2, _path + ".p2", true && _exceptionable)) && ("line" === input.type || $guard(_exceptionable, {
            path: _path + ".type",
            expected: "\"line\"",
            value: input.type
        }));
        const $ao2 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.x || $guard(_exceptionable, {
            path: _path + ".x",
            expected: "number",
            value: input.x
        })) && ("number" === typeof input.y || $guard(_exceptionable, {
            path: _path + ".y",
            expected: "number",
            value: input.y
        }));
        const $ao3 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.p1 && null !== input.p1 || $guard(_exceptionable, {
            path: _path + ".p1",
            expected: "Resolve<ObjectUnionExplicit.IPoint>",
            value: input.p1
        })) && $ao2(input.p1, _path + ".p1", true && _exceptionable) && (("object" === typeof input.p2 && null !== input.p2 || $guard(_exceptionable, {
            path: _path + ".p2",
            expected: "Resolve<ObjectUnionExplicit.IPoint>",
            value: input.p2
        })) && $ao2(input.p2, _path + ".p2", true && _exceptionable)) && (("object" === typeof input.p3 && null !== input.p3 || $guard(_exceptionable, {
            path: _path + ".p3",
            expected: "Resolve<ObjectUnionExplicit.IPoint>",
            value: input.p3
        })) && $ao2(input.p3, _path + ".p3", true && _exceptionable)) && ("triangle" === input.type || $guard(_exceptionable, {
            path: _path + ".type",
            expected: "\"triangle\"",
            value: input.type
        }));
        const $ao4 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.p1 && null !== input.p1 || $guard(_exceptionable, {
            path: _path + ".p1",
            expected: "Resolve<ObjectUnionExplicit.IPoint>",
            value: input.p1
        })) && $ao2(input.p1, _path + ".p1", true && _exceptionable) && (("object" === typeof input.p2 && null !== input.p2 || $guard(_exceptionable, {
            path: _path + ".p2",
            expected: "Resolve<ObjectUnionExplicit.IPoint>",
            value: input.p2
        })) && $ao2(input.p2, _path + ".p2", true && _exceptionable)) && (("object" === typeof input.p3 && null !== input.p3 || $guard(_exceptionable, {
            path: _path + ".p3",
            expected: "Resolve<ObjectUnionExplicit.IPoint>",
            value: input.p3
        })) && $ao2(input.p3, _path + ".p3", true && _exceptionable)) && (("object" === typeof input.p4 && null !== input.p4 || $guard(_exceptionable, {
            path: _path + ".p4",
            expected: "Resolve<ObjectUnionExplicit.IPoint>",
            value: input.p4
        })) && $ao2(input.p4, _path + ".p4", true && _exceptionable)) && ("rectangle" === input.type || $guard(_exceptionable, {
            path: _path + ".type",
            expected: "\"rectangle\"",
            value: input.type
        }));
        const $ao5 = (input: any, _path: string, _exceptionable: boolean) => (Array.isArray(input.points) || $guard(_exceptionable, {
            path: _path + ".points",
            expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
            value: input.points
        })) && input.points.every((elem: any, _index2: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
            path: _path + ".points[" + _index2 + "]",
            expected: "Resolve<ObjectUnionExplicit.IPoint>",
            value: elem
        })) && $ao2(elem, _path + ".points[" + _index2 + "]", true && _exceptionable)) && ("polyline" === input.type || $guard(_exceptionable, {
            path: _path + ".type",
            expected: "\"polyline\"",
            value: input.type
        }));
        const $ao6 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.outer && null !== input.outer || $guard(_exceptionable, {
            path: _path + ".outer",
            expected: "Resolve<ObjectUnionExplicit.IPolyline>",
            value: input.outer
        })) && $ao7(input.outer, _path + ".outer", true && _exceptionable) && ((Array.isArray(input.inner) || $guard(_exceptionable, {
            path: _path + ".inner",
            expected: "Array<Resolve<ObjectUnionExplicit.IPolyline>>",
            value: input.inner
        })) && input.inner.every((elem: any, _index3: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
            path: _path + ".inner[" + _index3 + "]",
            expected: "Resolve<ObjectUnionExplicit.IPolyline>",
            value: elem
        })) && $ao7(elem, _path + ".inner[" + _index3 + "]", true && _exceptionable))) && ("polygon" === input.type || $guard(_exceptionable, {
            path: _path + ".type",
            expected: "\"polygon\"",
            value: input.type
        }));
        const $ao7 = (input: any, _path: string, _exceptionable: boolean) => (Array.isArray(input.points) || $guard(_exceptionable, {
            path: _path + ".points",
            expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
            value: input.points
        })) && input.points.every((elem: any, _index4: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
            path: _path + ".points[" + _index4 + "]",
            expected: "Resolve<ObjectUnionExplicit.IPoint>",
            value: elem
        })) && $ao2(elem, _path + ".points[" + _index4 + "]", true && _exceptionable));
        const $ao8 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.centroid && null !== input.centroid || $guard(_exceptionable, {
            path: _path + ".centroid",
            expected: "Resolve<ObjectUnionExplicit.IPoint>",
            value: input.centroid
        })) && $ao2(input.centroid, _path + ".centroid", true && _exceptionable) && ("number" === typeof input.radius || $guard(_exceptionable, {
            path: _path + ".radius",
            expected: "number",
            value: input.radius
        })) && ("circle" === input.type || $guard(_exceptionable, {
            path: _path + ".type",
            expected: "\"circle\"",
            value: input.type
        }));
        const $au0 = (input: any, _path: string, _exceptionable: boolean) => (() => {
            if ("point" === input.type)
                return $ao0(input, _path, true && _exceptionable);
            if ("line" === input.type)
                return $ao1(input, _path, true && _exceptionable);
            if ("triangle" === input.type)
                return $ao3(input, _path, true && _exceptionable);
            if ("rectangle" === input.type)
                return $ao4(input, _path, true && _exceptionable);
            if ("polyline" === input.type)
                return $ao5(input, _path, true && _exceptionable);
            if ("polygon" === input.type)
                return $ao6(input, _path, true && _exceptionable);
            if ("circle" === input.type)
                return $ao8(input, _path, true && _exceptionable);
            return $guard(_exceptionable, {
                path: _path,
                expected: "(ObjectUnionExplicit.Discriminator<\"point\", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<\"line\", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<\"triangle\", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<\"rectangle\", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<\"polyline\", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<\"polygon\", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<\"circle\", ObjectUnionExplicit.ICircle>)",
                value: input
            });
        })();
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(Resolve<ObjectUnionExplicit.Discriminator<\"circle\", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<\"line\", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<\"point\", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<\"polygon\", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<\"polyline\", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<\"rectangle\", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<\"triangle\", ObjectUnionExplicit.ITriangle>>)>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<ObjectUnionExplicit.Discriminator<\"circle\", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<\"line\", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<\"point\", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<\"polygon\", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<\"polyline\", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<\"rectangle\", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<\"triangle\", ObjectUnionExplicit.ITriangle>>)",
            value: elem
        })) && $au0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as ObjectUnionExplicit;
}; const clone = (input: ObjectUnionExplicit): typia.Primitive<ObjectUnionExplicit> => {
    const $throws = (typia.createAssertClone as any).throws;
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
}; assert(input); const output = clone(input); /* Array */; return output as ObjectUnionExplicit; }, ObjectUnionExplicit.SPOILERS);
