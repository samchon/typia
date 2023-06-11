import typia from "../../../../src";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
export const test_validatePrune_ObjectUnionComposite = _test_validatePrune("ObjectUnionComposite", ObjectUnionComposite.generate, (input) => ((input: any): typia.IValidation<Array<ObjectUnionComposite.IPoint | ObjectUnionComposite.ILine | ObjectUnionComposite.ITriangle | ObjectUnionComposite.IRectangle | ObjectUnionComposite.IPolyline | ObjectUnionComposite.IPolygon | ObjectUnionComposite.IPointedShape | ObjectUnionComposite.ICircle>> => { const validate = (input: any): typia.IValidation<Array<ObjectUnionComposite.IPoint | ObjectUnionComposite.ILine | ObjectUnionComposite.ITriangle | ObjectUnionComposite.IRectangle | ObjectUnionComposite.IPolyline | ObjectUnionComposite.IPolygon | ObjectUnionComposite.IPointedShape | ObjectUnionComposite.ICircle>> => {
    const errors = [] as any[];
    const $report = (typia.validatePrune as any).report(errors);
    const __is = (input: any): input is Array<ObjectUnionComposite.IPoint | ObjectUnionComposite.ILine | ObjectUnionComposite.ITriangle | ObjectUnionComposite.IRectangle | ObjectUnionComposite.IPolyline | ObjectUnionComposite.IPolygon | ObjectUnionComposite.IPointedShape | ObjectUnionComposite.ICircle> => {
        const $io0 = (input: any): boolean => "number" === typeof input.x && Number.isFinite(input.x) && ("number" === typeof input.y && Number.isFinite(input.y));
        const $io1 = (input: any): boolean => "object" === typeof input.p1 && null !== input.p1 && ("number" === typeof (input.p1 as any).x && Number.isFinite((input.p1 as any).x) && ("number" === typeof (input.p1 as any).y && Number.isFinite((input.p1 as any).y))) && ("object" === typeof input.p2 && null !== input.p2 && ("number" === typeof (input.p2 as any).x && Number.isFinite((input.p2 as any).x) && ("number" === typeof (input.p2 as any).y && Number.isFinite((input.p2 as any).y))));
        const $io2 = (input: any): boolean => "object" === typeof input.p1 && null !== input.p1 && ("number" === typeof (input.p1 as any).x && Number.isFinite((input.p1 as any).x) && ("number" === typeof (input.p1 as any).y && Number.isFinite((input.p1 as any).y))) && ("object" === typeof input.p2 && null !== input.p2 && ("number" === typeof (input.p2 as any).x && Number.isFinite((input.p2 as any).x) && ("number" === typeof (input.p2 as any).y && Number.isFinite((input.p2 as any).y)))) && ("object" === typeof input.p3 && null !== input.p3 && ("number" === typeof (input.p3 as any).x && Number.isFinite((input.p3 as any).x) && ("number" === typeof (input.p3 as any).y && Number.isFinite((input.p3 as any).y))));
        const $io3 = (input: any): boolean => "object" === typeof input.p1 && null !== input.p1 && ("number" === typeof (input.p1 as any).x && Number.isFinite((input.p1 as any).x) && ("number" === typeof (input.p1 as any).y && Number.isFinite((input.p1 as any).y))) && ("object" === typeof input.p2 && null !== input.p2 && ("number" === typeof (input.p2 as any).x && Number.isFinite((input.p2 as any).x) && ("number" === typeof (input.p2 as any).y && Number.isFinite((input.p2 as any).y)))) && ("object" === typeof input.p3 && null !== input.p3 && ("number" === typeof (input.p3 as any).x && Number.isFinite((input.p3 as any).x) && ("number" === typeof (input.p3 as any).y && Number.isFinite((input.p3 as any).y)))) && ("object" === typeof input.p4 && null !== input.p4 && ("number" === typeof (input.p4 as any).x && Number.isFinite((input.p4 as any).x) && ("number" === typeof (input.p4 as any).y && Number.isFinite((input.p4 as any).y))));
        const $io4 = (input: any): boolean => Array.isArray(input.points) && input.points.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
        const $io5 = (input: any): boolean => "object" === typeof input.outer && null !== input.outer && $io4(input.outer) && (Array.isArray(input.inner) && input.inner.every((elem: any) => "object" === typeof elem && null !== elem && $io4(elem)));
        const $io6 = (input: any): boolean => Array.isArray(input.outer) && input.outer.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)) && ("object" === typeof input.inner && null !== input.inner && ("number" === typeof (input.inner as any).x && Number.isFinite((input.inner as any).x) && ("number" === typeof (input.inner as any).y && Number.isFinite((input.inner as any).y))));
        const $io7 = (input: any): boolean => "object" === typeof input.centroid && null !== input.centroid && ("number" === typeof (input.centroid as any).x && Number.isFinite((input.centroid as any).x) && ("number" === typeof (input.centroid as any).y && Number.isFinite((input.centroid as any).y))) && ("number" === typeof input.radius && Number.isFinite(input.radius));
        const $iu0 = (input: any): any => (() => {
            if (undefined !== input.x)
                return $io0(input);
            if (undefined !== input.p4)
                return $io3(input);
            if (undefined !== input.points)
                return $io4(input);
            if (Array.isArray(input.outer) && input.outer.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)))
                return $io6(input);
            if ("object" === typeof input.outer && null !== input.outer && $io4(input.outer))
                return $io5(input);
            if (undefined !== input.centroid)
                return $io7(input);
            return (() => {
                if (undefined !== input.p3)
                    return $io2(input);
                return $io1(input);
            })();
        })();
        return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Array<ObjectUnionComposite.IPoint | ObjectUnionComposite.ILine | ObjectUnionComposite.ITriangle | ObjectUnionComposite.IRectangle | ObjectUnionComposite.IPolyline | ObjectUnionComposite.IPolygon | ObjectUnionComposite.IPointedShape | ObjectUnionComposite.ICircle> => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["number" === typeof input.x && Number.isFinite(input.x) || $report(_exceptionable, {
                    path: _path + ".x",
                    expected: "number",
                    value: input.x
                }), "number" === typeof input.y && Number.isFinite(input.y) || $report(_exceptionable, {
                    path: _path + ".y",
                    expected: "number",
                    value: input.y
                })].every((flag: boolean) => flag);
            const $vo1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [("object" === typeof input.p1 && null !== input.p1 || $report(_exceptionable, {
                    path: _path + ".p1",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p1
                })) && $vo0(input.p1, _path + ".p1", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".p1",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p1
                }), ("object" === typeof input.p2 && null !== input.p2 || $report(_exceptionable, {
                    path: _path + ".p2",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p2
                })) && $vo0(input.p2, _path + ".p2", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".p2",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p2
                })].every((flag: boolean) => flag);
            const $vo2 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [("object" === typeof input.p1 && null !== input.p1 || $report(_exceptionable, {
                    path: _path + ".p1",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p1
                })) && $vo0(input.p1, _path + ".p1", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".p1",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p1
                }), ("object" === typeof input.p2 && null !== input.p2 || $report(_exceptionable, {
                    path: _path + ".p2",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p2
                })) && $vo0(input.p2, _path + ".p2", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".p2",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p2
                }), ("object" === typeof input.p3 && null !== input.p3 || $report(_exceptionable, {
                    path: _path + ".p3",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p3
                })) && $vo0(input.p3, _path + ".p3", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".p3",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p3
                })].every((flag: boolean) => flag);
            const $vo3 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [("object" === typeof input.p1 && null !== input.p1 || $report(_exceptionable, {
                    path: _path + ".p1",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p1
                })) && $vo0(input.p1, _path + ".p1", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".p1",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p1
                }), ("object" === typeof input.p2 && null !== input.p2 || $report(_exceptionable, {
                    path: _path + ".p2",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p2
                })) && $vo0(input.p2, _path + ".p2", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".p2",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p2
                }), ("object" === typeof input.p3 && null !== input.p3 || $report(_exceptionable, {
                    path: _path + ".p3",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p3
                })) && $vo0(input.p3, _path + ".p3", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".p3",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p3
                }), ("object" === typeof input.p4 && null !== input.p4 || $report(_exceptionable, {
                    path: _path + ".p4",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p4
                })) && $vo0(input.p4, _path + ".p4", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".p4",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p4
                })].every((flag: boolean) => flag);
            const $vo4 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [(Array.isArray(input.points) || $report(_exceptionable, {
                    path: _path + ".points",
                    expected: "Array<ObjectUnionComposite.IPoint>",
                    value: input.points
                })) && input.points.map((elem: any, _index2: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
                    path: _path + ".points[" + _index2 + "]",
                    expected: "ObjectUnionComposite.IPoint",
                    value: elem
                })) && $vo0(elem, _path + ".points[" + _index2 + "]", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".points[" + _index2 + "]",
                    expected: "ObjectUnionComposite.IPoint",
                    value: elem
                })).every((flag: boolean) => flag) || $report(_exceptionable, {
                    path: _path + ".points",
                    expected: "Array<ObjectUnionComposite.IPoint>",
                    value: input.points
                })].every((flag: boolean) => flag);
            const $vo5 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [("object" === typeof input.outer && null !== input.outer || $report(_exceptionable, {
                    path: _path + ".outer",
                    expected: "ObjectUnionComposite.IPolyline",
                    value: input.outer
                })) && $vo4(input.outer, _path + ".outer", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".outer",
                    expected: "ObjectUnionComposite.IPolyline",
                    value: input.outer
                }), (Array.isArray(input.inner) || $report(_exceptionable, {
                    path: _path + ".inner",
                    expected: "Array<ObjectUnionComposite.IPolyline>",
                    value: input.inner
                })) && input.inner.map((elem: any, _index3: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
                    path: _path + ".inner[" + _index3 + "]",
                    expected: "ObjectUnionComposite.IPolyline",
                    value: elem
                })) && $vo4(elem, _path + ".inner[" + _index3 + "]", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".inner[" + _index3 + "]",
                    expected: "ObjectUnionComposite.IPolyline",
                    value: elem
                })).every((flag: boolean) => flag) || $report(_exceptionable, {
                    path: _path + ".inner",
                    expected: "Array<ObjectUnionComposite.IPolyline>",
                    value: input.inner
                })].every((flag: boolean) => flag);
            const $vo6 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [(Array.isArray(input.outer) || $report(_exceptionable, {
                    path: _path + ".outer",
                    expected: "Array<ObjectUnionComposite.IPoint>",
                    value: input.outer
                })) && input.outer.map((elem: any, _index4: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
                    path: _path + ".outer[" + _index4 + "]",
                    expected: "ObjectUnionComposite.IPoint",
                    value: elem
                })) && $vo0(elem, _path + ".outer[" + _index4 + "]", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".outer[" + _index4 + "]",
                    expected: "ObjectUnionComposite.IPoint",
                    value: elem
                })).every((flag: boolean) => flag) || $report(_exceptionable, {
                    path: _path + ".outer",
                    expected: "Array<ObjectUnionComposite.IPoint>",
                    value: input.outer
                }), ("object" === typeof input.inner && null !== input.inner || $report(_exceptionable, {
                    path: _path + ".inner",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.inner
                })) && $vo0(input.inner, _path + ".inner", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".inner",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.inner
                })].every((flag: boolean) => flag);
            const $vo7 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [("object" === typeof input.centroid && null !== input.centroid || $report(_exceptionable, {
                    path: _path + ".centroid",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.centroid
                })) && $vo0(input.centroid, _path + ".centroid", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".centroid",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.centroid
                }), "number" === typeof input.radius && Number.isFinite(input.radius) || $report(_exceptionable, {
                    path: _path + ".radius",
                    expected: "number",
                    value: input.radius
                })].every((flag: boolean) => flag);
            const $vu0 = (input: any, _path: string, _exceptionable: boolean = true): any => (() => {
                if (undefined !== input.x)
                    return $vo0(input, _path, true && _exceptionable);
                if (undefined !== input.p4)
                    return $vo3(input, _path, true && _exceptionable);
                if (undefined !== input.points)
                    return $vo4(input, _path, true && _exceptionable);
                if (Array.isArray(input.outer) && input.outer.map((elem: any, _index5: number) => "object" === typeof elem && null !== elem && $vo0(elem, _path + ".outer[" + _index5 + "]", false && _exceptionable)).every((flag: boolean) => flag))
                    return $vo6(input, _path, true && _exceptionable);
                if ("object" === typeof input.outer && null !== input.outer && $vo4(input.outer, _path + ".outer", false && _exceptionable))
                    return $vo5(input, _path, true && _exceptionable);
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
                expected: "ObjectUnionComposite",
                value: input
            })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(ObjectUnionComposite.ICircle | ObjectUnionComposite.ILine | ObjectUnionComposite.IPoint | ObjectUnionComposite.IPointedShape | ObjectUnionComposite.IPolygon | ObjectUnionComposite.IPolyline | ObjectUnionComposite.IRectangle | ObjectUnionComposite.ITriangle)",
                value: elem
            })) && $vu0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(ObjectUnionComposite.ICircle | ObjectUnionComposite.ILine | ObjectUnionComposite.IPoint | ObjectUnionComposite.IPointedShape | ObjectUnionComposite.IPolygon | ObjectUnionComposite.IPolyline | ObjectUnionComposite.IRectangle | ObjectUnionComposite.ITriangle)",
                value: elem
            })).every((flag: boolean) => flag) || $report(true, {
                path: _path + "",
                expected: "ObjectUnionComposite",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; const prune = (input: Array<ObjectUnionComposite.IPoint | ObjectUnionComposite.ILine | ObjectUnionComposite.ITriangle | ObjectUnionComposite.IRectangle | ObjectUnionComposite.IPolyline | ObjectUnionComposite.IPolygon | ObjectUnionComposite.IPointedShape | ObjectUnionComposite.ICircle>): void => {
    const $io0 = (input: any): boolean => "number" === typeof input.x && "number" === typeof input.y;
    const $io1 = (input: any): boolean => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2));
    const $io2 = (input: any): boolean => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2)) && ("object" === typeof input.p3 && null !== input.p3 && $io0(input.p3));
    const $io3 = (input: any): boolean => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2)) && ("object" === typeof input.p3 && null !== input.p3 && $io0(input.p3)) && ("object" === typeof input.p4 && null !== input.p4 && $io0(input.p4));
    const $io4 = (input: any): boolean => Array.isArray(input.points) && input.points.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
    const $io5 = (input: any): boolean => "object" === typeof input.outer && null !== input.outer && $io4(input.outer) && (Array.isArray(input.inner) && input.inner.every((elem: any) => "object" === typeof elem && null !== elem && $io4(elem)));
    const $io6 = (input: any): boolean => Array.isArray(input.outer) && input.outer.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)) && ("object" === typeof input.inner && null !== input.inner && $io0(input.inner));
    const $io7 = (input: any): boolean => "object" === typeof input.centroid && null !== input.centroid && $io0(input.centroid) && "number" === typeof input.radius;
    const $pp0 = (input: any) => input.forEach((elem: any) => {
        if ("object" === typeof elem && null !== elem)
            $pu0(elem);
    });
    const $pp1 = (input: any) => input.forEach((elem: any) => {
        if ("object" === typeof elem && null !== elem)
            $po0(elem);
    });
    const $pp2 = (input: any) => input.forEach((elem: any) => {
        if ("object" === typeof elem && null !== elem)
            $po4(elem);
    });
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("x" === key || "y" === key)
                continue;
            delete input[key];
        }
    };
    const $po1 = (input: any): any => {
        if ("object" === typeof input.p1 && null !== input.p1)
            $po0(input.p1);
        if ("object" === typeof input.p2 && null !== input.p2)
            $po0(input.p2);
        for (const key of Object.keys(input)) {
            if ("p1" === key || "p2" === key)
                continue;
            delete input[key];
        }
    };
    const $po2 = (input: any): any => {
        if ("object" === typeof input.p1 && null !== input.p1)
            $po0(input.p1);
        if ("object" === typeof input.p2 && null !== input.p2)
            $po0(input.p2);
        if ("object" === typeof input.p3 && null !== input.p3)
            $po0(input.p3);
        for (const key of Object.keys(input)) {
            if ("p1" === key || "p2" === key || "p3" === key)
                continue;
            delete input[key];
        }
    };
    const $po3 = (input: any): any => {
        if ("object" === typeof input.p1 && null !== input.p1)
            $po0(input.p1);
        if ("object" === typeof input.p2 && null !== input.p2)
            $po0(input.p2);
        if ("object" === typeof input.p3 && null !== input.p3)
            $po0(input.p3);
        if ("object" === typeof input.p4 && null !== input.p4)
            $po0(input.p4);
        for (const key of Object.keys(input)) {
            if ("p1" === key || "p2" === key || "p3" === key || "p4" === key)
                continue;
            delete input[key];
        }
    };
    const $po4 = (input: any): any => {
        if (Array.isArray(input.points))
            $pp1(input.points);
        for (const key of Object.keys(input)) {
            if ("points" === key)
                continue;
            delete input[key];
        }
    };
    const $po5 = (input: any): any => {
        if ("object" === typeof input.outer && null !== input.outer)
            $po4(input.outer);
        if (Array.isArray(input.inner))
            $pp2(input.inner);
        for (const key of Object.keys(input)) {
            if ("outer" === key || "inner" === key)
                continue;
            delete input[key];
        }
    };
    const $po6 = (input: any): any => {
        if (Array.isArray(input.outer))
            $pp1(input.outer);
        if ("object" === typeof input.inner && null !== input.inner)
            $po0(input.inner);
        for (const key of Object.keys(input)) {
            if ("outer" === key || "inner" === key)
                continue;
            delete input[key];
        }
    };
    const $po7 = (input: any): any => {
        if ("object" === typeof input.centroid && null !== input.centroid)
            $po0(input.centroid);
        for (const key of Object.keys(input)) {
            if ("centroid" === key || "radius" === key)
                continue;
            delete input[key];
        }
    };
    const $pu0 = (input: any): any => (() => {
        if (undefined !== input.x)
            return $po0(input);
        if (undefined !== input.p4)
            return $po3(input);
        if (undefined !== input.points)
            return $po4(input);
        if (Array.isArray(input.outer) && input.outer.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)))
            return $po6(input);
        if ("object" === typeof input.outer && null !== input.outer && $io4(input.outer))
            return $po5(input);
        if (undefined !== input.centroid)
            return $po7(input);
        return (() => {
            if (undefined !== input.p3)
                return $po2(input);
            return $po1(input);
        })();
    })();
    if (Array.isArray(input))
        $pp0(input);
}; const output = validate(input); if (output.success)
    prune(input); return output; })(input), ObjectUnionComposite.SPOILERS);
