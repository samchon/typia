import typia from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_validateParse } from "../internal/_test_validateParse";
export const test_validateParse_ObjectUnionExplicit = _test_validateParse("ObjectUnionExplicit", ObjectUnionExplicit.generate, (input) => ((input: string): typia.IValidation<typia.Primitive<ObjectUnionExplicit>> => { const validate = (input: any): typia.IValidation<ObjectUnionExplicit> => {
    const errors = [] as any[];
    const $report = (typia.validateParse as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectUnionExplicit => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.x || $report(_exceptionable, {
                path: _path + ".x",
                expected: "number",
                value: input.x
            }), "number" === typeof input.y || $report(_exceptionable, {
                path: _path + ".y",
                expected: "number",
                value: input.y
            }), "point" === input.type || $report(_exceptionable, {
                path: _path + ".type",
                expected: "\"point\"",
                value: input.type
            })].every((flag: boolean) => flag);
        const $vo1 = (input: any, _path: string, _exceptionable: boolean) => [("object" === typeof input.p1 && null !== input.p1 || $report(_exceptionable, {
                path: _path + ".p1",
                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                value: input.p1
            })) && $vo2(input.p1, _path + ".p1", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".p1",
                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                value: input.p1
            }), ("object" === typeof input.p2 && null !== input.p2 || $report(_exceptionable, {
                path: _path + ".p2",
                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                value: input.p2
            })) && $vo2(input.p2, _path + ".p2", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".p2",
                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                value: input.p2
            }), "line" === input.type || $report(_exceptionable, {
                path: _path + ".type",
                expected: "\"line\"",
                value: input.type
            })].every((flag: boolean) => flag);
        const $vo2 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.x || $report(_exceptionable, {
                path: _path + ".x",
                expected: "number",
                value: input.x
            }), "number" === typeof input.y || $report(_exceptionable, {
                path: _path + ".y",
                expected: "number",
                value: input.y
            })].every((flag: boolean) => flag);
        const $vo3 = (input: any, _path: string, _exceptionable: boolean) => [("object" === typeof input.p1 && null !== input.p1 || $report(_exceptionable, {
                path: _path + ".p1",
                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                value: input.p1
            })) && $vo2(input.p1, _path + ".p1", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".p1",
                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                value: input.p1
            }), ("object" === typeof input.p2 && null !== input.p2 || $report(_exceptionable, {
                path: _path + ".p2",
                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                value: input.p2
            })) && $vo2(input.p2, _path + ".p2", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".p2",
                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                value: input.p2
            }), ("object" === typeof input.p3 && null !== input.p3 || $report(_exceptionable, {
                path: _path + ".p3",
                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                value: input.p3
            })) && $vo2(input.p3, _path + ".p3", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".p3",
                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                value: input.p3
            }), "triangle" === input.type || $report(_exceptionable, {
                path: _path + ".type",
                expected: "\"triangle\"",
                value: input.type
            })].every((flag: boolean) => flag);
        const $vo4 = (input: any, _path: string, _exceptionable: boolean) => [("object" === typeof input.p1 && null !== input.p1 || $report(_exceptionable, {
                path: _path + ".p1",
                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                value: input.p1
            })) && $vo2(input.p1, _path + ".p1", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".p1",
                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                value: input.p1
            }), ("object" === typeof input.p2 && null !== input.p2 || $report(_exceptionable, {
                path: _path + ".p2",
                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                value: input.p2
            })) && $vo2(input.p2, _path + ".p2", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".p2",
                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                value: input.p2
            }), ("object" === typeof input.p3 && null !== input.p3 || $report(_exceptionable, {
                path: _path + ".p3",
                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                value: input.p3
            })) && $vo2(input.p3, _path + ".p3", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".p3",
                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                value: input.p3
            }), ("object" === typeof input.p4 && null !== input.p4 || $report(_exceptionable, {
                path: _path + ".p4",
                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                value: input.p4
            })) && $vo2(input.p4, _path + ".p4", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".p4",
                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                value: input.p4
            }), "rectangle" === input.type || $report(_exceptionable, {
                path: _path + ".type",
                expected: "\"rectangle\"",
                value: input.type
            })].every((flag: boolean) => flag);
        const $vo5 = (input: any, _path: string, _exceptionable: boolean) => [(Array.isArray(input.points) || $report(_exceptionable, {
                path: _path + ".points",
                expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                value: input.points
            })) && input.points.map((elem: any, _index2: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
                path: _path + ".points[" + _index2 + "]",
                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                value: elem
            })) && $vo2(elem, _path + ".points[" + _index2 + "]", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".points[" + _index2 + "]",
                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".points",
                expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                value: input.points
            }), "polyline" === input.type || $report(_exceptionable, {
                path: _path + ".type",
                expected: "\"polyline\"",
                value: input.type
            })].every((flag: boolean) => flag);
        const $vo6 = (input: any, _path: string, _exceptionable: boolean) => [("object" === typeof input.outer && null !== input.outer || $report(_exceptionable, {
                path: _path + ".outer",
                expected: "Resolve<ObjectUnionExplicit.IPolyline>",
                value: input.outer
            })) && $vo7(input.outer, _path + ".outer", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".outer",
                expected: "Resolve<ObjectUnionExplicit.IPolyline>",
                value: input.outer
            }), (Array.isArray(input.inner) || $report(_exceptionable, {
                path: _path + ".inner",
                expected: "Array<Resolve<ObjectUnionExplicit.IPolyline>>",
                value: input.inner
            })) && input.inner.map((elem: any, _index3: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
                path: _path + ".inner[" + _index3 + "]",
                expected: "Resolve<ObjectUnionExplicit.IPolyline>",
                value: elem
            })) && $vo7(elem, _path + ".inner[" + _index3 + "]", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".inner[" + _index3 + "]",
                expected: "Resolve<ObjectUnionExplicit.IPolyline>",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".inner",
                expected: "Array<Resolve<ObjectUnionExplicit.IPolyline>>",
                value: input.inner
            }), "polygon" === input.type || $report(_exceptionable, {
                path: _path + ".type",
                expected: "\"polygon\"",
                value: input.type
            })].every((flag: boolean) => flag);
        const $vo7 = (input: any, _path: string, _exceptionable: boolean) => [(Array.isArray(input.points) || $report(_exceptionable, {
                path: _path + ".points",
                expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                value: input.points
            })) && input.points.map((elem: any, _index4: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
                path: _path + ".points[" + _index4 + "]",
                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                value: elem
            })) && $vo2(elem, _path + ".points[" + _index4 + "]", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".points[" + _index4 + "]",
                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".points",
                expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                value: input.points
            })].every((flag: boolean) => flag);
        const $vo8 = (input: any, _path: string, _exceptionable: boolean) => [("object" === typeof input.centroid && null !== input.centroid || $report(_exceptionable, {
                path: _path + ".centroid",
                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                value: input.centroid
            })) && $vo2(input.centroid, _path + ".centroid", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".centroid",
                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                value: input.centroid
            }), "number" === typeof input.radius || $report(_exceptionable, {
                path: _path + ".radius",
                expected: "number",
                value: input.radius
            }), "circle" === input.type || $report(_exceptionable, {
                path: _path + ".type",
                expected: "\"circle\"",
                value: input.type
            })].every((flag: boolean) => flag);
        const $vu0 = (input: any, _path: string, _exceptionable: boolean) => (() => {
            if ("point" === input.type)
                return $vo0(input, _path, true && _exceptionable);
            if ("line" === input.type)
                return $vo1(input, _path, true && _exceptionable);
            if ("triangle" === input.type)
                return $vo3(input, _path, true && _exceptionable);
            if ("rectangle" === input.type)
                return $vo4(input, _path, true && _exceptionable);
            if ("polyline" === input.type)
                return $vo5(input, _path, true && _exceptionable);
            if ("polygon" === input.type)
                return $vo6(input, _path, true && _exceptionable);
            if ("circle" === input.type)
                return $vo8(input, _path, true && _exceptionable);
            return $report(_exceptionable, {
                path: _path,
                expected: "(ObjectUnionExplicit.Discriminator<\"point\", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<\"line\", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<\"triangle\", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<\"rectangle\", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<\"polyline\", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<\"polygon\", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<\"circle\", ObjectUnionExplicit.ICircle>)",
                value: input
            });
        })();
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<(Resolve<ObjectUnionExplicit.Discriminator<\"circle\", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<\"line\", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<\"point\", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<\"polygon\", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<\"polyline\", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<\"rectangle\", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<\"triangle\", ObjectUnionExplicit.ITriangle>>)>",
            value: input
        })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<ObjectUnionExplicit.Discriminator<\"circle\", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<\"line\", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<\"point\", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<\"polygon\", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<\"polyline\", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<\"rectangle\", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<\"triangle\", ObjectUnionExplicit.ITriangle>>)",
            value: elem
        })) && $vu0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<ObjectUnionExplicit.Discriminator<\"circle\", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<\"line\", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<\"point\", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<\"polygon\", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<\"polyline\", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<\"rectangle\", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<\"triangle\", ObjectUnionExplicit.ITriangle>>)",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<(Resolve<ObjectUnionExplicit.Discriminator<\"circle\", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<\"line\", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<\"point\", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<\"polygon\", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<\"polyline\", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<\"rectangle\", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<\"triangle\", ObjectUnionExplicit.ITriangle>>)>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ObjectUnionExplicit>;
}; input = JSON.parse(input); const output = validate(input); return output; })(input), ObjectUnionExplicit.SPOILERS);
