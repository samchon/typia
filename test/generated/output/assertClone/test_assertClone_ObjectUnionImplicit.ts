import typia from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_assertClone_ObjectUnionImplicit = _test_assertClone("ObjectUnionImplicit", ObjectUnionImplicit.generate, (input) => ((input: any): typia.Primitive<ObjectUnionImplicit> => { const assert = (input: any) => {
    const $guard = (typia.assertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectUnionImplicit => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.x || $guard(_exceptionable, {
            path: _path + ".x",
            expected: "number",
            value: input.x
        })) && ("number" === typeof input.y || $guard(_exceptionable, {
            path: _path + ".y",
            expected: "number",
            value: input.y
        })) && (undefined === input.slope || "number" === typeof input.slope || $guard(_exceptionable, {
            path: _path + ".slope",
            expected: "(number | undefined)",
            value: input.slope
        }));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.p1 && null !== input.p1 || $guard(_exceptionable, {
            path: _path + ".p1",
            expected: "Resolve<ObjectUnionImplicit.IPoint>",
            value: input.p1
        })) && $ao0(input.p1, _path + ".p1", true && _exceptionable) && (("object" === typeof input.p2 && null !== input.p2 || $guard(_exceptionable, {
            path: _path + ".p2",
            expected: "Resolve<ObjectUnionImplicit.IPoint>",
            value: input.p2
        })) && $ao0(input.p2, _path + ".p2", true && _exceptionable)) && (undefined === input.width || "number" === typeof input.width || $guard(_exceptionable, {
            path: _path + ".width",
            expected: "(number | undefined)",
            value: input.width
        })) && (undefined === input.distance || "number" === typeof input.distance || $guard(_exceptionable, {
            path: _path + ".distance",
            expected: "(number | undefined)",
            value: input.distance
        }));
        const $ao2 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.p1 && null !== input.p1 || $guard(_exceptionable, {
            path: _path + ".p1",
            expected: "Resolve<ObjectUnionImplicit.IPoint>",
            value: input.p1
        })) && $ao0(input.p1, _path + ".p1", true && _exceptionable) && (("object" === typeof input.p2 && null !== input.p2 || $guard(_exceptionable, {
            path: _path + ".p2",
            expected: "Resolve<ObjectUnionImplicit.IPoint>",
            value: input.p2
        })) && $ao0(input.p2, _path + ".p2", true && _exceptionable)) && (("object" === typeof input.p3 && null !== input.p3 || $guard(_exceptionable, {
            path: _path + ".p3",
            expected: "Resolve<ObjectUnionImplicit.IPoint>",
            value: input.p3
        })) && $ao0(input.p3, _path + ".p3", true && _exceptionable)) && (undefined === input.width || "number" === typeof input.width || $guard(_exceptionable, {
            path: _path + ".width",
            expected: "(number | undefined)",
            value: input.width
        })) && (undefined === input.height || "number" === typeof input.height || $guard(_exceptionable, {
            path: _path + ".height",
            expected: "(number | undefined)",
            value: input.height
        })) && (undefined === input.area || "number" === typeof input.area || $guard(_exceptionable, {
            path: _path + ".area",
            expected: "(number | undefined)",
            value: input.area
        }));
        const $ao3 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.p1 && null !== input.p1 || $guard(_exceptionable, {
            path: _path + ".p1",
            expected: "Resolve<ObjectUnionImplicit.IPoint>",
            value: input.p1
        })) && $ao0(input.p1, _path + ".p1", true && _exceptionable) && (("object" === typeof input.p2 && null !== input.p2 || $guard(_exceptionable, {
            path: _path + ".p2",
            expected: "Resolve<ObjectUnionImplicit.IPoint>",
            value: input.p2
        })) && $ao0(input.p2, _path + ".p2", true && _exceptionable)) && (("object" === typeof input.p3 && null !== input.p3 || $guard(_exceptionable, {
            path: _path + ".p3",
            expected: "Resolve<ObjectUnionImplicit.IPoint>",
            value: input.p3
        })) && $ao0(input.p3, _path + ".p3", true && _exceptionable)) && (("object" === typeof input.p4 && null !== input.p4 || $guard(_exceptionable, {
            path: _path + ".p4",
            expected: "Resolve<ObjectUnionImplicit.IPoint>",
            value: input.p4
        })) && $ao0(input.p4, _path + ".p4", true && _exceptionable)) && (undefined === input.width || "number" === typeof input.width || $guard(_exceptionable, {
            path: _path + ".width",
            expected: "(number | undefined)",
            value: input.width
        })) && (undefined === input.height || "number" === typeof input.height || $guard(_exceptionable, {
            path: _path + ".height",
            expected: "(number | undefined)",
            value: input.height
        })) && (undefined === input.area || "number" === typeof input.area || $guard(_exceptionable, {
            path: _path + ".area",
            expected: "(number | undefined)",
            value: input.area
        }));
        const $ao4 = (input: any, _path: string, _exceptionable: boolean) => (Array.isArray(input.points) || $guard(_exceptionable, {
            path: _path + ".points",
            expected: "Array<Resolve<ObjectUnionImplicit.IPoint>>",
            value: input.points
        })) && input.points.every((elem: any, _index2: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
            path: _path + ".points[" + _index2 + "]",
            expected: "Resolve<ObjectUnionImplicit.IPoint>",
            value: elem
        })) && $ao0(elem, _path + ".points[" + _index2 + "]", true && _exceptionable)) && (undefined === input.length || "number" === typeof input.length || $guard(_exceptionable, {
            path: _path + ".length",
            expected: "(number | undefined)",
            value: input.length
        }));
        const $ao5 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.outer && null !== input.outer || $guard(_exceptionable, {
            path: _path + ".outer",
            expected: "Resolve<ObjectUnionImplicit.IPolyline>",
            value: input.outer
        })) && $ao4(input.outer, _path + ".outer", true && _exceptionable) && (undefined === input.inner || (Array.isArray(input.inner) || $guard(_exceptionable, {
            path: _path + ".inner",
            expected: "(Array<Resolve<ObjectUnionImplicit.IPolyline>> | undefined)",
            value: input.inner
        })) && input.inner.every((elem: any, _index3: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
            path: _path + ".inner[" + _index3 + "]",
            expected: "Resolve<ObjectUnionImplicit.IPolyline>",
            value: elem
        })) && $ao4(elem, _path + ".inner[" + _index3 + "]", true && _exceptionable))) && (undefined === input.area || "number" === typeof input.area || $guard(_exceptionable, {
            path: _path + ".area",
            expected: "(number | undefined)",
            value: input.area
        }));
        const $ao6 = (input: any, _path: string, _exceptionable: boolean) => (undefined === input.centroid || ("object" === typeof input.centroid && null !== input.centroid || $guard(_exceptionable, {
            path: _path + ".centroid",
            expected: "(Resolve<ObjectUnionImplicit.IPoint> | undefined)",
            value: input.centroid
        })) && $ao0(input.centroid, _path + ".centroid", true && _exceptionable)) && ("number" === typeof input.radius || $guard(_exceptionable, {
            path: _path + ".radius",
            expected: "number",
            value: input.radius
        })) && (undefined === input.area || "number" === typeof input.area || $guard(_exceptionable, {
            path: _path + ".area",
            expected: "(number | undefined)",
            value: input.area
        }));
        const $au0 = (input: any, _path: string, _exceptionable: boolean) => (() => {
            if (undefined !== input.x)
                return $ao0(input, _path, true && _exceptionable);
            if (undefined !== input.p4)
                return $ao3(input, _path, true && _exceptionable);
            if (undefined !== input.points)
                return $ao4(input, _path, true && _exceptionable);
            if (undefined !== input.outer)
                return $ao5(input, _path, true && _exceptionable);
            if (undefined !== input.radius)
                return $ao6(input, _path, true && _exceptionable);
            return (() => {
                if (undefined !== input.p3)
                    return $ao2(input, _path, true && _exceptionable);
                return $ao1(input, _path, true && _exceptionable);
            })();
        })();
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(Resolve<ObjectUnionImplicit.ICircle> | Resolve<ObjectUnionImplicit.ILine> | Resolve<ObjectUnionImplicit.IPoint> | Resolve<ObjectUnionImplicit.IPolygon> | Resolve<ObjectUnionImplicit.IPolyline> | Resolve<ObjectUnionImplicit.IRectangle> | Resolve<ObjectUnionImplicit.ITriangle>)>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<ObjectUnionImplicit.ICircle> | Resolve<ObjectUnionImplicit.ILine> | Resolve<ObjectUnionImplicit.IPoint> | Resolve<ObjectUnionImplicit.IPolygon> | Resolve<ObjectUnionImplicit.IPolyline> | Resolve<ObjectUnionImplicit.IRectangle> | Resolve<ObjectUnionImplicit.ITriangle>)",
            value: elem
        })) && $au0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as ObjectUnionImplicit;
}; const clone = (input: ObjectUnionImplicit): typia.Primitive<ObjectUnionImplicit> => {
    const $io0 = (input: any) => "number" === typeof input.x && "number" === typeof input.y && (undefined === input.slope || "number" === typeof input.slope);
    const $io1 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2)) && (undefined === input.width || "number" === typeof input.width) && (undefined === input.distance || "number" === typeof input.distance);
    const $io2 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2)) && ("object" === typeof input.p3 && null !== input.p3 && $io0(input.p3)) && (undefined === input.width || "number" === typeof input.width) && (undefined === input.height || "number" === typeof input.height) && (undefined === input.area || "number" === typeof input.area);
    const $io3 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2)) && ("object" === typeof input.p3 && null !== input.p3 && $io0(input.p3)) && ("object" === typeof input.p4 && null !== input.p4 && $io0(input.p4)) && (undefined === input.width || "number" === typeof input.width) && (undefined === input.height || "number" === typeof input.height) && (undefined === input.area || "number" === typeof input.area);
    const $io4 = (input: any) => Array.isArray(input.points) && input.points.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)) && (undefined === input.length || "number" === typeof input.length);
    const $io5 = (input: any) => "object" === typeof input.outer && null !== input.outer && $io4(input.outer) && (undefined === input.inner || Array.isArray(input.inner) && input.inner.every((elem: any) => "object" === typeof elem && null !== elem && $io4(elem))) && (undefined === input.area || "number" === typeof input.area);
    const $io6 = (input: any) => (undefined === input.centroid || "object" === typeof input.centroid && null !== input.centroid && $io0(input.centroid)) && "number" === typeof input.radius && (undefined === input.area || "number" === typeof input.area);
    const $iu0 = (input: any) => (() => {
        if (undefined !== input.x)
            return $io0(input);
        if (undefined !== input.p4)
            return $io3(input);
        if (undefined !== input.points)
            return $io4(input);
        if (undefined !== input.outer)
            return $io5(input);
        if (undefined !== input.radius)
            return $io6(input);
        return (() => {
            if (undefined !== input.p3)
                return $io2(input);
            return $io1(input);
        })();
    })();
    const $co0 = (input: any) => ({
        x: input.x,
        y: input.y,
        slope: input.slope
    });
    const $co1 = (input: any) => ({
        p1: "object" === typeof input.p1 && null !== input.p1 ? $co0(input.p1) : input.p1,
        p2: "object" === typeof input.p2 && null !== input.p2 ? $co0(input.p2) : input.p2,
        width: input.width,
        distance: input.distance
    });
    const $co2 = (input: any) => ({
        p1: "object" === typeof input.p1 && null !== input.p1 ? $co0(input.p1) : input.p1,
        p2: "object" === typeof input.p2 && null !== input.p2 ? $co0(input.p2) : input.p2,
        p3: "object" === typeof input.p3 && null !== input.p3 ? $co0(input.p3) : input.p3,
        width: input.width,
        height: input.height,
        area: input.area
    });
    const $co3 = (input: any) => ({
        p1: "object" === typeof input.p1 && null !== input.p1 ? $co0(input.p1) : input.p1,
        p2: "object" === typeof input.p2 && null !== input.p2 ? $co0(input.p2) : input.p2,
        p3: "object" === typeof input.p3 && null !== input.p3 ? $co0(input.p3) : input.p3,
        p4: "object" === typeof input.p4 && null !== input.p4 ? $co0(input.p4) : input.p4,
        width: input.width,
        height: input.height,
        area: input.area
    });
    const $co4 = (input: any) => ({
        points: Array.isArray(input.points) ? input.points.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input.points,
        length: input.length
    });
    const $co5 = (input: any) => ({
        outer: "object" === typeof input.outer && null !== input.outer ? $co4(input.outer) : input.outer,
        inner: Array.isArray(input.inner) ? input.inner.map((elem: any) => "object" === typeof elem && null !== elem ? $co4(elem) : elem) : input.inner,
        area: input.area
    });
    const $co6 = (input: any) => ({
        centroid: "object" === typeof input.centroid && null !== input.centroid ? $co0(input.centroid) : input.centroid,
        radius: input.radius,
        area: input.area
    });
    const $cu0 = (input: any) => (() => {
        if (undefined !== input.x)
            return $co0(input);
        if (undefined !== input.p4)
            return $co3(input);
        if (undefined !== input.points)
            return $co4(input);
        if (undefined !== input.outer)
            return $co5(input);
        if (undefined !== input.radius)
            return $co6(input);
        return (() => {
            if (undefined !== input.p3)
                return $co2(input);
            return $co1(input);
        })();
    })();
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $cu0(elem) : elem) : input;
}; assert(input); const output = clone(input); /* Array */; return output as ObjectUnionImplicit; })(input), ObjectUnionImplicit.SPOILERS);
