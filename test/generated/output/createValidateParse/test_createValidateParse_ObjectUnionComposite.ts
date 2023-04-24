import typia from "../../../../src";
import { _test_validateParse } from "../../../internal/_test_validateParse";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";

export const test_createValidateParse_ObjectUnionComposite =
    _test_validateParse(
        "ObjectUnionComposite",
        ObjectUnionComposite.generate,
        (
            input: string,
        ): typia.IValidation<typia.Primitive<ObjectUnionComposite>> => {
            const validate = (
                input: any,
            ): typia.IValidation<ObjectUnionComposite> => {
                const __is = (input: any): input is ObjectUnionComposite => {
                    const $io0 = (input: any): boolean =>
                        "number" === typeof input.x &&
                        Number.isFinite(input.x) &&
                        "number" === typeof input.y &&
                        Number.isFinite(input.y);
                    const $io1 = (input: any): boolean =>
                        "object" === typeof input.p1 &&
                        null !== input.p1 &&
                        "number" === typeof input.p1.x &&
                        Number.isFinite(input.p1.x) &&
                        "number" === typeof input.p1.y &&
                        Number.isFinite(input.p1.y) &&
                        "object" === typeof input.p2 &&
                        null !== input.p2 &&
                        "number" === typeof input.p2.x &&
                        Number.isFinite(input.p2.x) &&
                        "number" === typeof input.p2.y &&
                        Number.isFinite(input.p2.y);
                    const $io2 = (input: any): boolean =>
                        "object" === typeof input.p1 &&
                        null !== input.p1 &&
                        "number" === typeof input.p1.x &&
                        Number.isFinite(input.p1.x) &&
                        "number" === typeof input.p1.y &&
                        Number.isFinite(input.p1.y) &&
                        "object" === typeof input.p2 &&
                        null !== input.p2 &&
                        "number" === typeof input.p2.x &&
                        Number.isFinite(input.p2.x) &&
                        "number" === typeof input.p2.y &&
                        Number.isFinite(input.p2.y) &&
                        "object" === typeof input.p3 &&
                        null !== input.p3 &&
                        "number" === typeof input.p3.x &&
                        Number.isFinite(input.p3.x) &&
                        "number" === typeof input.p3.y &&
                        Number.isFinite(input.p3.y);
                    const $io3 = (input: any): boolean =>
                        "object" === typeof input.p1 &&
                        null !== input.p1 &&
                        "number" === typeof input.p1.x &&
                        Number.isFinite(input.p1.x) &&
                        "number" === typeof input.p1.y &&
                        Number.isFinite(input.p1.y) &&
                        "object" === typeof input.p2 &&
                        null !== input.p2 &&
                        "number" === typeof input.p2.x &&
                        Number.isFinite(input.p2.x) &&
                        "number" === typeof input.p2.y &&
                        Number.isFinite(input.p2.y) &&
                        "object" === typeof input.p3 &&
                        null !== input.p3 &&
                        "number" === typeof input.p3.x &&
                        Number.isFinite(input.p3.x) &&
                        "number" === typeof input.p3.y &&
                        Number.isFinite(input.p3.y) &&
                        "object" === typeof input.p4 &&
                        null !== input.p4 &&
                        "number" === typeof input.p4.x &&
                        Number.isFinite(input.p4.x) &&
                        "number" === typeof input.p4.y &&
                        Number.isFinite(input.p4.y);
                    const $io4 = (input: any): boolean =>
                        Array.isArray(input.points) &&
                        input.points.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io0(elem),
                        );
                    const $io5 = (input: any): boolean =>
                        "object" === typeof input.outer &&
                        null !== input.outer &&
                        $io4(input.outer) &&
                        Array.isArray(input.inner) &&
                        input.inner.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io4(elem),
                        );
                    const $io6 = (input: any): boolean =>
                        Array.isArray(input.outer) &&
                        input.outer.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io0(elem),
                        ) &&
                        "object" === typeof input.inner &&
                        null !== input.inner &&
                        "number" === typeof input.inner.x &&
                        Number.isFinite(input.inner.x) &&
                        "number" === typeof input.inner.y &&
                        Number.isFinite(input.inner.y);
                    const $io7 = (input: any): boolean =>
                        "object" === typeof input.centroid &&
                        null !== input.centroid &&
                        "number" === typeof input.centroid.x &&
                        Number.isFinite(input.centroid.x) &&
                        "number" === typeof input.centroid.y &&
                        Number.isFinite(input.centroid.y) &&
                        "number" === typeof input.radius &&
                        Number.isFinite(input.radius);
                    const $iu0 = (input: any): any =>
                        (() => {
                            if (undefined !== input.x) return $io0(input);
                            if (undefined !== input.p4) return $io3(input);
                            if (undefined !== input.points) return $io4(input);
                            if (
                                "object" === typeof input.outer &&
                                null !== input.outer &&
                                $io4(input.outer)
                            )
                                return $io5(input);
                            if (
                                Array.isArray(input.outer) &&
                                input.outer.every(
                                    (elem: any) =>
                                        "object" === typeof elem &&
                                        null !== elem &&
                                        $io0(elem),
                                )
                            )
                                return $io6(input);
                            if (undefined !== input.centroid)
                                return $io7(input);
                            return (() => {
                                if (undefined !== input.p3) return $io2(input);
                                return $io1(input);
                            })();
                        })();
                    return (
                        Array.isArray(input) &&
                        input.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu0(elem),
                        )
                    );
                };
                const errors = [] as any[];
                const $report = (typia.createValidateParse as any).report(
                    errors,
                );
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectUnionComposite => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ("number" === typeof input.x &&
                                    Number.isFinite(input.x)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".x",
                                        expected: "number",
                                        value: input.x,
                                    }),
                                ("number" === typeof input.y &&
                                    Number.isFinite(input.y)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".y",
                                        expected: "number",
                                        value: input.y,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((("object" === typeof input.p1 &&
                                    null !== input.p1) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p1",
                                        expected:
                                            "Resolve<ObjectUnionComposite.IPoint>",
                                        value: input.p1,
                                    })) &&
                                    $vo0(
                                        input.p1,
                                        _path + ".p1",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p1",
                                        expected:
                                            "Resolve<ObjectUnionComposite.IPoint>",
                                        value: input.p1,
                                    }),
                                ((("object" === typeof input.p2 &&
                                    null !== input.p2) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p2",
                                        expected:
                                            "Resolve<ObjectUnionComposite.IPoint>",
                                        value: input.p2,
                                    })) &&
                                    $vo0(
                                        input.p2,
                                        _path + ".p2",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p2",
                                        expected:
                                            "Resolve<ObjectUnionComposite.IPoint>",
                                        value: input.p2,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo2 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((("object" === typeof input.p1 &&
                                    null !== input.p1) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p1",
                                        expected:
                                            "Resolve<ObjectUnionComposite.IPoint>",
                                        value: input.p1,
                                    })) &&
                                    $vo0(
                                        input.p1,
                                        _path + ".p1",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p1",
                                        expected:
                                            "Resolve<ObjectUnionComposite.IPoint>",
                                        value: input.p1,
                                    }),
                                ((("object" === typeof input.p2 &&
                                    null !== input.p2) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p2",
                                        expected:
                                            "Resolve<ObjectUnionComposite.IPoint>",
                                        value: input.p2,
                                    })) &&
                                    $vo0(
                                        input.p2,
                                        _path + ".p2",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p2",
                                        expected:
                                            "Resolve<ObjectUnionComposite.IPoint>",
                                        value: input.p2,
                                    }),
                                ((("object" === typeof input.p3 &&
                                    null !== input.p3) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p3",
                                        expected:
                                            "Resolve<ObjectUnionComposite.IPoint>",
                                        value: input.p3,
                                    })) &&
                                    $vo0(
                                        input.p3,
                                        _path + ".p3",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p3",
                                        expected:
                                            "Resolve<ObjectUnionComposite.IPoint>",
                                        value: input.p3,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo3 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((("object" === typeof input.p1 &&
                                    null !== input.p1) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p1",
                                        expected:
                                            "Resolve<ObjectUnionComposite.IPoint>",
                                        value: input.p1,
                                    })) &&
                                    $vo0(
                                        input.p1,
                                        _path + ".p1",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p1",
                                        expected:
                                            "Resolve<ObjectUnionComposite.IPoint>",
                                        value: input.p1,
                                    }),
                                ((("object" === typeof input.p2 &&
                                    null !== input.p2) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p2",
                                        expected:
                                            "Resolve<ObjectUnionComposite.IPoint>",
                                        value: input.p2,
                                    })) &&
                                    $vo0(
                                        input.p2,
                                        _path + ".p2",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p2",
                                        expected:
                                            "Resolve<ObjectUnionComposite.IPoint>",
                                        value: input.p2,
                                    }),
                                ((("object" === typeof input.p3 &&
                                    null !== input.p3) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p3",
                                        expected:
                                            "Resolve<ObjectUnionComposite.IPoint>",
                                        value: input.p3,
                                    })) &&
                                    $vo0(
                                        input.p3,
                                        _path + ".p3",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p3",
                                        expected:
                                            "Resolve<ObjectUnionComposite.IPoint>",
                                        value: input.p3,
                                    }),
                                ((("object" === typeof input.p4 &&
                                    null !== input.p4) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p4",
                                        expected:
                                            "Resolve<ObjectUnionComposite.IPoint>",
                                        value: input.p4,
                                    })) &&
                                    $vo0(
                                        input.p4,
                                        _path + ".p4",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p4",
                                        expected:
                                            "Resolve<ObjectUnionComposite.IPoint>",
                                        value: input.p4,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo4 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input.points) ||
                                    $report(_exceptionable, {
                                        path: _path + ".points",
                                        expected:
                                            "Array<Resolve<ObjectUnionComposite.IPoint>>",
                                        value: input.points,
                                    })) &&
                                    input.points
                                        .map(
                                            (elem: any, _index2: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".points[" +
                                                            _index2 +
                                                            "]",
                                                        expected:
                                                            "Resolve<ObjectUnionComposite.IPoint>",
                                                        value: elem,
                                                    })) &&
                                                    $vo0(
                                                        elem,
                                                        _path +
                                                            ".points[" +
                                                            _index2 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".points[" +
                                                        _index2 +
                                                        "]",
                                                    expected:
                                                        "Resolve<ObjectUnionComposite.IPoint>",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".points",
                                        expected:
                                            "Array<Resolve<ObjectUnionComposite.IPoint>>",
                                        value: input.points,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo5 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((("object" === typeof input.outer &&
                                    null !== input.outer) ||
                                    $report(_exceptionable, {
                                        path: _path + ".outer",
                                        expected:
                                            "Resolve<ObjectUnionComposite.IPolyline>",
                                        value: input.outer,
                                    })) &&
                                    $vo4(
                                        input.outer,
                                        _path + ".outer",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".outer",
                                        expected:
                                            "Resolve<ObjectUnionComposite.IPolyline>",
                                        value: input.outer,
                                    }),
                                ((Array.isArray(input.inner) ||
                                    $report(_exceptionable, {
                                        path: _path + ".inner",
                                        expected:
                                            "Array<Resolve<ObjectUnionComposite.IPolyline>>",
                                        value: input.inner,
                                    })) &&
                                    input.inner
                                        .map(
                                            (elem: any, _index3: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".inner[" +
                                                            _index3 +
                                                            "]",
                                                        expected:
                                                            "Resolve<ObjectUnionComposite.IPolyline>",
                                                        value: elem,
                                                    })) &&
                                                    $vo4(
                                                        elem,
                                                        _path +
                                                            ".inner[" +
                                                            _index3 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".inner[" +
                                                        _index3 +
                                                        "]",
                                                    expected:
                                                        "Resolve<ObjectUnionComposite.IPolyline>",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".inner",
                                        expected:
                                            "Array<Resolve<ObjectUnionComposite.IPolyline>>",
                                        value: input.inner,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo6 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input.outer) ||
                                    $report(_exceptionable, {
                                        path: _path + ".outer",
                                        expected:
                                            "Array<Resolve<ObjectUnionComposite.IPoint>>",
                                        value: input.outer,
                                    })) &&
                                    input.outer
                                        .map(
                                            (elem: any, _index4: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".outer[" +
                                                            _index4 +
                                                            "]",
                                                        expected:
                                                            "Resolve<ObjectUnionComposite.IPoint>",
                                                        value: elem,
                                                    })) &&
                                                    $vo0(
                                                        elem,
                                                        _path +
                                                            ".outer[" +
                                                            _index4 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".outer[" +
                                                        _index4 +
                                                        "]",
                                                    expected:
                                                        "Resolve<ObjectUnionComposite.IPoint>",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".outer",
                                        expected:
                                            "Array<Resolve<ObjectUnionComposite.IPoint>>",
                                        value: input.outer,
                                    }),
                                ((("object" === typeof input.inner &&
                                    null !== input.inner) ||
                                    $report(_exceptionable, {
                                        path: _path + ".inner",
                                        expected:
                                            "Resolve<ObjectUnionComposite.IPoint>",
                                        value: input.inner,
                                    })) &&
                                    $vo0(
                                        input.inner,
                                        _path + ".inner",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".inner",
                                        expected:
                                            "Resolve<ObjectUnionComposite.IPoint>",
                                        value: input.inner,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo7 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((("object" === typeof input.centroid &&
                                    null !== input.centroid) ||
                                    $report(_exceptionable, {
                                        path: _path + ".centroid",
                                        expected:
                                            "Resolve<ObjectUnionComposite.IPoint>",
                                        value: input.centroid,
                                    })) &&
                                    $vo0(
                                        input.centroid,
                                        _path + ".centroid",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".centroid",
                                        expected:
                                            "Resolve<ObjectUnionComposite.IPoint>",
                                        value: input.centroid,
                                    }),
                                ("number" === typeof input.radius &&
                                    Number.isFinite(input.radius)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".radius",
                                        expected: "number",
                                        value: input.radius,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vu0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): any =>
                            (() => {
                                if (undefined !== input.x)
                                    return $vo0(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if (undefined !== input.p4)
                                    return $vo3(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if (undefined !== input.points)
                                    return $vo4(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if (
                                    "object" === typeof input.outer &&
                                    null !== input.outer &&
                                    $vo4(
                                        input.outer,
                                        _path + ".outer",
                                        false && _exceptionable,
                                    )
                                )
                                    return $vo5(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if (
                                    Array.isArray(input.outer) &&
                                    input.outer
                                        .map(
                                            (elem: any, _index5: number) =>
                                                "object" === typeof elem &&
                                                null !== elem &&
                                                $vo0(
                                                    elem,
                                                    _path +
                                                        ".outer[" +
                                                        _index5 +
                                                        "]",
                                                    false && _exceptionable,
                                                ),
                                        )
                                        .every((flag: boolean) => flag)
                                )
                                    return $vo6(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if (undefined !== input.centroid)
                                    return $vo7(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                return (() => {
                                    if (undefined !== input.p3)
                                        return $vo2(
                                            input,
                                            _path,
                                            true && _exceptionable,
                                        );
                                    return $vo1(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                })();
                            })();
                        return (
                            ((Array.isArray(input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected:
                                        "Array<(Resolve<ObjectUnionComposite.ICircle> | Resolve<ObjectUnionComposite.ILine> | Resolve<ObjectUnionComposite.IPoint> | Resolve<ObjectUnionComposite.IPointedShape> | Resolve<ObjectUnionComposite.IPolygon> | Resolve<ObjectUnionComposite.IPolyline> | Resolve<ObjectUnionComposite.IRectangle> | Resolve<ObjectUnionComposite.ITriangle>)>",
                                    value: input,
                                })) &&
                                input
                                    .map(
                                        (elem: any, _index1: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $report(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "(Resolve<ObjectUnionComposite.ICircle> | Resolve<ObjectUnionComposite.ILine> | Resolve<ObjectUnionComposite.IPoint> | Resolve<ObjectUnionComposite.IPointedShape> | Resolve<ObjectUnionComposite.IPolygon> | Resolve<ObjectUnionComposite.IPolyline> | Resolve<ObjectUnionComposite.IRectangle> | Resolve<ObjectUnionComposite.ITriangle>)",
                                                    value: elem,
                                                })) &&
                                                $vu0(
                                                    elem,
                                                    _path + "[" + _index1 + "]",
                                                    true,
                                                )) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "(Resolve<ObjectUnionComposite.ICircle> | Resolve<ObjectUnionComposite.ILine> | Resolve<ObjectUnionComposite.IPoint> | Resolve<ObjectUnionComposite.IPointedShape> | Resolve<ObjectUnionComposite.IPolygon> | Resolve<ObjectUnionComposite.IPolyline> | Resolve<ObjectUnionComposite.IRectangle> | Resolve<ObjectUnionComposite.ITriangle>)",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    "Array<(Resolve<ObjectUnionComposite.ICircle> | Resolve<ObjectUnionComposite.ILine> | Resolve<ObjectUnionComposite.IPoint> | Resolve<ObjectUnionComposite.IPointedShape> | Resolve<ObjectUnionComposite.IPolygon> | Resolve<ObjectUnionComposite.IPolyline> | Resolve<ObjectUnionComposite.IRectangle> | Resolve<ObjectUnionComposite.ITriangle>)>",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            input = JSON.parse(input);
            const output = validate(input);
            return output as any;
        },
        ObjectUnionComposite.SPOILERS,
    );
