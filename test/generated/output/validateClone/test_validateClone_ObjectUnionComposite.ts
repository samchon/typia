import typia from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_validateClone_ObjectUnionComposite = _test_validateClone("ObjectUnionComposite", ObjectUnionComposite.generate, (input) => ((input: any): typia.IValidation<typia.Primitive<ObjectUnionComposite>> => { const validate = (input: any): typia.IValidation<ObjectUnionComposite> => {
    const errors = [] as any[];
    const $report = (typia.validateClone as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectUnionComposite => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.x && !Number.isNaN(input.x) || $report(_exceptionable, {
                path: _path + ".x",
                expected: "number",
                value: input.x
            }), "number" === typeof input.y && !Number.isNaN(input.y) || $report(_exceptionable, {
                path: _path + ".y",
                expected: "number",
                value: input.y
            })].every((flag: boolean) => flag);
        const $vo1 = (input: any, _path: string, _exceptionable: boolean) => [("object" === typeof input.p1 && null !== input.p1 || $report(_exceptionable, {
                path: _path + ".p1",
                expected: "Resolve<ObjectUnionComposite.IPoint>",
                value: input.p1
            })) && $vo0(input.p1, _path + ".p1", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".p1",
                expected: "Resolve<ObjectUnionComposite.IPoint>",
                value: input.p1
            }), ("object" === typeof input.p2 && null !== input.p2 || $report(_exceptionable, {
                path: _path + ".p2",
                expected: "Resolve<ObjectUnionComposite.IPoint>",
                value: input.p2
            })) && $vo0(input.p2, _path + ".p2", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".p2",
                expected: "Resolve<ObjectUnionComposite.IPoint>",
                value: input.p2
            })].every((flag: boolean) => flag);
        const $vo2 = (input: any, _path: string, _exceptionable: boolean) => [("object" === typeof input.p1 && null !== input.p1 || $report(_exceptionable, {
                path: _path + ".p1",
                expected: "Resolve<ObjectUnionComposite.IPoint>",
                value: input.p1
            })) && $vo0(input.p1, _path + ".p1", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".p1",
                expected: "Resolve<ObjectUnionComposite.IPoint>",
                value: input.p1
            }), ("object" === typeof input.p2 && null !== input.p2 || $report(_exceptionable, {
                path: _path + ".p2",
                expected: "Resolve<ObjectUnionComposite.IPoint>",
                value: input.p2
            })) && $vo0(input.p2, _path + ".p2", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".p2",
                expected: "Resolve<ObjectUnionComposite.IPoint>",
                value: input.p2
            }), ("object" === typeof input.p3 && null !== input.p3 || $report(_exceptionable, {
                path: _path + ".p3",
                expected: "Resolve<ObjectUnionComposite.IPoint>",
                value: input.p3
            })) && $vo0(input.p3, _path + ".p3", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".p3",
                expected: "Resolve<ObjectUnionComposite.IPoint>",
                value: input.p3
            })].every((flag: boolean) => flag);
        const $vo3 = (input: any, _path: string, _exceptionable: boolean) => [("object" === typeof input.p1 && null !== input.p1 || $report(_exceptionable, {
                path: _path + ".p1",
                expected: "Resolve<ObjectUnionComposite.IPoint>",
                value: input.p1
            })) && $vo0(input.p1, _path + ".p1", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".p1",
                expected: "Resolve<ObjectUnionComposite.IPoint>",
                value: input.p1
            }), ("object" === typeof input.p2 && null !== input.p2 || $report(_exceptionable, {
                path: _path + ".p2",
                expected: "Resolve<ObjectUnionComposite.IPoint>",
                value: input.p2
            })) && $vo0(input.p2, _path + ".p2", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".p2",
                expected: "Resolve<ObjectUnionComposite.IPoint>",
                value: input.p2
            }), ("object" === typeof input.p3 && null !== input.p3 || $report(_exceptionable, {
                path: _path + ".p3",
                expected: "Resolve<ObjectUnionComposite.IPoint>",
                value: input.p3
            })) && $vo0(input.p3, _path + ".p3", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".p3",
                expected: "Resolve<ObjectUnionComposite.IPoint>",
                value: input.p3
            }), ("object" === typeof input.p4 && null !== input.p4 || $report(_exceptionable, {
                path: _path + ".p4",
                expected: "Resolve<ObjectUnionComposite.IPoint>",
                value: input.p4
            })) && $vo0(input.p4, _path + ".p4", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".p4",
                expected: "Resolve<ObjectUnionComposite.IPoint>",
                value: input.p4
            })].every((flag: boolean) => flag);
        const $vo4 = (input: any, _path: string, _exceptionable: boolean) => [(Array.isArray(input.points) || $report(_exceptionable, {
                path: _path + ".points",
                expected: "Array<Resolve<ObjectUnionComposite.IPoint>>",
                value: input.points
            })) && input.points.map((elem: any, _index2: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
                path: _path + ".points[" + _index2 + "]",
                expected: "Resolve<ObjectUnionComposite.IPoint>",
                value: elem
            })) && $vo0(elem, _path + ".points[" + _index2 + "]", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".points[" + _index2 + "]",
                expected: "Resolve<ObjectUnionComposite.IPoint>",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".points",
                expected: "Array<Resolve<ObjectUnionComposite.IPoint>>",
                value: input.points
            })].every((flag: boolean) => flag);
        const $vo5 = (input: any, _path: string, _exceptionable: boolean) => [("object" === typeof input.outer && null !== input.outer || $report(_exceptionable, {
                path: _path + ".outer",
                expected: "Resolve<ObjectUnionComposite.IPolyline>",
                value: input.outer
            })) && $vo4(input.outer, _path + ".outer", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".outer",
                expected: "Resolve<ObjectUnionComposite.IPolyline>",
                value: input.outer
            }), (Array.isArray(input.inner) || $report(_exceptionable, {
                path: _path + ".inner",
                expected: "Array<Resolve<ObjectUnionComposite.IPolyline>>",
                value: input.inner
            })) && input.inner.map((elem: any, _index3: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
                path: _path + ".inner[" + _index3 + "]",
                expected: "Resolve<ObjectUnionComposite.IPolyline>",
                value: elem
            })) && $vo4(elem, _path + ".inner[" + _index3 + "]", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".inner[" + _index3 + "]",
                expected: "Resolve<ObjectUnionComposite.IPolyline>",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".inner",
                expected: "Array<Resolve<ObjectUnionComposite.IPolyline>>",
                value: input.inner
            })].every((flag: boolean) => flag);
        const $vo6 = (input: any, _path: string, _exceptionable: boolean) => [(Array.isArray(input.outer) || $report(_exceptionable, {
                path: _path + ".outer",
                expected: "Array<Resolve<ObjectUnionComposite.IPoint>>",
                value: input.outer
            })) && input.outer.map((elem: any, _index4: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
                path: _path + ".outer[" + _index4 + "]",
                expected: "Resolve<ObjectUnionComposite.IPoint>",
                value: elem
            })) && $vo0(elem, _path + ".outer[" + _index4 + "]", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".outer[" + _index4 + "]",
                expected: "Resolve<ObjectUnionComposite.IPoint>",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".outer",
                expected: "Array<Resolve<ObjectUnionComposite.IPoint>>",
                value: input.outer
            }), ("object" === typeof input.inner && null !== input.inner || $report(_exceptionable, {
                path: _path + ".inner",
                expected: "Resolve<ObjectUnionComposite.IPoint>",
                value: input.inner
            })) && $vo0(input.inner, _path + ".inner", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".inner",
                expected: "Resolve<ObjectUnionComposite.IPoint>",
                value: input.inner
            })].every((flag: boolean) => flag);
        const $vo7 = (input: any, _path: string, _exceptionable: boolean) => [("object" === typeof input.centroid && null !== input.centroid || $report(_exceptionable, {
                path: _path + ".centroid",
                expected: "Resolve<ObjectUnionComposite.IPoint>",
                value: input.centroid
            })) && $vo0(input.centroid, _path + ".centroid", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".centroid",
                expected: "Resolve<ObjectUnionComposite.IPoint>",
                value: input.centroid
            }), "number" === typeof input.radius && !Number.isNaN(input.radius) || $report(_exceptionable, {
                path: _path + ".radius",
                expected: "number",
                value: input.radius
            })].every((flag: boolean) => flag);
        const $vu0 = (input: any, _path: string, _exceptionable: boolean) => (() => {
            if (undefined !== input.x)
                return $vo0(input, _path, true && _exceptionable);
            if (undefined !== input.p4)
                return $vo3(input, _path, true && _exceptionable);
            if (undefined !== input.points)
                return $vo4(input, _path, true && _exceptionable);
            if ("object" === typeof input.outer && null !== input.outer && $vo4(input.outer, _path + ".outer", false && _exceptionable))
                return $vo5(input, _path, true && _exceptionable);
            if (Array.isArray(input.outer) && input.outer.map((elem: any, _index5: number) => "object" === typeof elem && null !== elem && $vo0(elem, _path + ".outer[" + _index5 + "]", false && _exceptionable)).every((flag: boolean) => flag))
                return $vo6(input, _path, true && _exceptionable);
            if (undefined !== input.centroid)
                return $vo7(input, _path, true && _exceptionable);
            return (() => {
                if (undefined !== input.p3)
                    return $vo2(input, _path, true && _exceptionable);
                return $vo1(input, _path, true && _exceptionable);
            })();
        })();
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<(Resolve<ObjectUnionComposite.ICircle> | Resolve<ObjectUnionComposite.ILine> | Resolve<ObjectUnionComposite.IPoint> | Resolve<ObjectUnionComposite.IPointedShape> | Resolve<ObjectUnionComposite.IPolygon> | Resolve<ObjectUnionComposite.IPolyline> | Resolve<ObjectUnionComposite.IRectangle> | Resolve<ObjectUnionComposite.ITriangle>)>",
            value: input
        })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<ObjectUnionComposite.ICircle> | Resolve<ObjectUnionComposite.ILine> | Resolve<ObjectUnionComposite.IPoint> | Resolve<ObjectUnionComposite.IPointedShape> | Resolve<ObjectUnionComposite.IPolygon> | Resolve<ObjectUnionComposite.IPolyline> | Resolve<ObjectUnionComposite.IRectangle> | Resolve<ObjectUnionComposite.ITriangle>)",
            value: elem
        })) && $vu0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<ObjectUnionComposite.ICircle> | Resolve<ObjectUnionComposite.ILine> | Resolve<ObjectUnionComposite.IPoint> | Resolve<ObjectUnionComposite.IPointedShape> | Resolve<ObjectUnionComposite.IPolygon> | Resolve<ObjectUnionComposite.IPolyline> | Resolve<ObjectUnionComposite.IRectangle> | Resolve<ObjectUnionComposite.ITriangle>)",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<(Resolve<ObjectUnionComposite.ICircle> | Resolve<ObjectUnionComposite.ILine> | Resolve<ObjectUnionComposite.IPoint> | Resolve<ObjectUnionComposite.IPointedShape> | Resolve<ObjectUnionComposite.IPolygon> | Resolve<ObjectUnionComposite.IPolyline> | Resolve<ObjectUnionComposite.IRectangle> | Resolve<ObjectUnionComposite.ITriangle>)>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ObjectUnionComposite>;
}; const clone = (input: ObjectUnionComposite): typia.Primitive<ObjectUnionComposite> => {
    const $io0 = (input: any) => "number" === typeof input.x && "number" === typeof input.y;
    const $io1 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2));
    const $io2 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2)) && ("object" === typeof input.p3 && null !== input.p3 && $io0(input.p3));
    const $io3 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2)) && ("object" === typeof input.p3 && null !== input.p3 && $io0(input.p3)) && ("object" === typeof input.p4 && null !== input.p4 && $io0(input.p4));
    const $io4 = (input: any) => Array.isArray(input.points) && input.points.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
    const $io5 = (input: any) => "object" === typeof input.outer && null !== input.outer && $io4(input.outer) && (Array.isArray(input.inner) && input.inner.every((elem: any) => "object" === typeof elem && null !== elem && $io4(elem)));
    const $io6 = (input: any) => Array.isArray(input.outer) && input.outer.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)) && ("object" === typeof input.inner && null !== input.inner && $io0(input.inner));
    const $io7 = (input: any) => "object" === typeof input.centroid && null !== input.centroid && $io0(input.centroid) && "number" === typeof input.radius;
    const $iu0 = (input: any) => (() => {
        if (undefined !== input.x)
            return $io0(input);
        if (undefined !== input.p4)
            return $io3(input);
        if (undefined !== input.points)
            return $io4(input);
        if ("object" === typeof input.outer && null !== input.outer && $io4(input.outer))
            return $io5(input);
        if (Array.isArray(input.outer) && input.outer.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)))
            return $io6(input);
        if (undefined !== input.centroid)
            return $io7(input);
        return (() => {
            if (undefined !== input.p3)
                return $io2(input);
            return $io1(input);
        })();
    })();
    const $co0 = (input: any) => ({
        x: input.x,
        y: input.y
    });
    const $co1 = (input: any) => ({
        p1: "object" === typeof input.p1 && null !== input.p1 ? $co0(input.p1) : input.p1,
        p2: "object" === typeof input.p2 && null !== input.p2 ? $co0(input.p2) : input.p2
    });
    const $co2 = (input: any) => ({
        p1: "object" === typeof input.p1 && null !== input.p1 ? $co0(input.p1) : input.p1,
        p2: "object" === typeof input.p2 && null !== input.p2 ? $co0(input.p2) : input.p2,
        p3: "object" === typeof input.p3 && null !== input.p3 ? $co0(input.p3) : input.p3
    });
    const $co3 = (input: any) => ({
        p1: "object" === typeof input.p1 && null !== input.p1 ? $co0(input.p1) : input.p1,
        p2: "object" === typeof input.p2 && null !== input.p2 ? $co0(input.p2) : input.p2,
        p3: "object" === typeof input.p3 && null !== input.p3 ? $co0(input.p3) : input.p3,
        p4: "object" === typeof input.p4 && null !== input.p4 ? $co0(input.p4) : input.p4
    });
    const $co4 = (input: any) => ({
        points: Array.isArray(input.points) ? input.points.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input.points
    });
    const $co5 = (input: any) => ({
        outer: "object" === typeof input.outer && null !== input.outer ? $co4(input.outer) : input.outer,
        inner: Array.isArray(input.inner) ? input.inner.map((elem: any) => "object" === typeof elem && null !== elem ? $co4(elem) : elem) : input.inner
    });
    const $co6 = (input: any) => ({
        outer: Array.isArray(input.outer) ? input.outer.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input.outer,
        inner: "object" === typeof input.inner && null !== input.inner ? $co0(input.inner) : input.inner
    });
    const $co7 = (input: any) => ({
        centroid: "object" === typeof input.centroid && null !== input.centroid ? $co0(input.centroid) : input.centroid,
        radius: input.radius
    });
    const $cu0 = (input: any) => (() => {
        if (undefined !== input.x)
            return $co0(input);
        if (undefined !== input.p4)
            return $co3(input);
        if (undefined !== input.points)
            return $co4(input);
        if ("object" === typeof input.outer && null !== input.outer && $io4(input.outer))
            return $co5(input);
        if (Array.isArray(input.outer) && input.outer.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)))
            return $co6(input);
        if (undefined !== input.centroid)
            return $co7(input);
        return (() => {
            if (undefined !== input.p3)
                return $co2(input);
            return $co1(input);
        })();
    })();
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $cu0(elem) : elem) : input;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; })(input), ObjectUnionComposite.SPOILERS);
