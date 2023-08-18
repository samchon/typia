import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";

export const test_assert_ObjectUnionComposite =
    _test_assert<ObjectUnionComposite>(ObjectUnionComposite)(
        (input: any): ObjectUnionComposite => {
            const __is = (input: any): input is ObjectUnionComposite => {
                const $io0 = (input: any): boolean =>
                    "number" === typeof input.x &&
                    Number.isFinite(input.x) &&
                    "number" === typeof input.y &&
                    Number.isFinite(input.y);
                const $io1 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    "number" === typeof (input.p1 as any).x &&
                    Number.isFinite((input.p1 as any).x) &&
                    "number" === typeof (input.p1 as any).y &&
                    Number.isFinite((input.p1 as any).y) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    "number" === typeof (input.p2 as any).x &&
                    Number.isFinite((input.p2 as any).x) &&
                    "number" === typeof (input.p2 as any).y &&
                    Number.isFinite((input.p2 as any).y);
                const $io2 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    "number" === typeof (input.p1 as any).x &&
                    Number.isFinite((input.p1 as any).x) &&
                    "number" === typeof (input.p1 as any).y &&
                    Number.isFinite((input.p1 as any).y) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    "number" === typeof (input.p2 as any).x &&
                    Number.isFinite((input.p2 as any).x) &&
                    "number" === typeof (input.p2 as any).y &&
                    Number.isFinite((input.p2 as any).y) &&
                    "object" === typeof input.p3 &&
                    null !== input.p3 &&
                    "number" === typeof (input.p3 as any).x &&
                    Number.isFinite((input.p3 as any).x) &&
                    "number" === typeof (input.p3 as any).y &&
                    Number.isFinite((input.p3 as any).y);
                const $io3 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    "number" === typeof (input.p1 as any).x &&
                    Number.isFinite((input.p1 as any).x) &&
                    "number" === typeof (input.p1 as any).y &&
                    Number.isFinite((input.p1 as any).y) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    "number" === typeof (input.p2 as any).x &&
                    Number.isFinite((input.p2 as any).x) &&
                    "number" === typeof (input.p2 as any).y &&
                    Number.isFinite((input.p2 as any).y) &&
                    "object" === typeof input.p3 &&
                    null !== input.p3 &&
                    "number" === typeof (input.p3 as any).x &&
                    Number.isFinite((input.p3 as any).x) &&
                    "number" === typeof (input.p3 as any).y &&
                    Number.isFinite((input.p3 as any).y) &&
                    "object" === typeof input.p4 &&
                    null !== input.p4 &&
                    "number" === typeof (input.p4 as any).x &&
                    Number.isFinite((input.p4 as any).x) &&
                    "number" === typeof (input.p4 as any).y &&
                    Number.isFinite((input.p4 as any).y);
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
                    "number" === typeof (input.inner as any).x &&
                    Number.isFinite((input.inner as any).x) &&
                    "number" === typeof (input.inner as any).y &&
                    Number.isFinite((input.inner as any).y);
                const $io7 = (input: any): boolean =>
                    "object" === typeof input.centroid &&
                    null !== input.centroid &&
                    "number" === typeof (input.centroid as any).x &&
                    Number.isFinite((input.centroid as any).x) &&
                    "number" === typeof (input.centroid as any).y &&
                    Number.isFinite((input.centroid as any).y) &&
                    "number" === typeof input.radius &&
                    Number.isFinite(input.radius);
                const $iu0 = (input: any): any =>
                    (() => {
                        if (undefined !== input.x) return $io0(input);
                        else if (undefined !== input.p4) return $io3(input);
                        else if (undefined !== input.points) return $io4(input);
                        else if (
                            Array.isArray(input.outer) &&
                            input.outer.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io0(elem),
                            )
                        )
                            return $io6(input);
                        else if (
                            "object" === typeof input.outer &&
                            null !== input.outer &&
                            $io4(input.outer)
                        )
                            return $io5(input);
                        else if (undefined !== input.centroid)
                            return $io7(input);
                        else
                            return (() => {
                                if (undefined !== input.p3) return $io2(input);
                                else return $io1(input);
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
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectUnionComposite => {
                    const $guard = (typia.createAssert as any).guard;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("number" === typeof input.x &&
                            Number.isFinite(input.x)) ||
                            $guard(_exceptionable, {
                                path: _path + ".x",
                                expected: "number",
                                value: input.x,
                            })) &&
                        (("number" === typeof input.y &&
                            Number.isFinite(input.y)) ||
                            $guard(_exceptionable, {
                                path: _path + ".y",
                                expected: "number",
                                value: input.y,
                            }));
                    const $ao1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (((("object" === typeof input.p1 &&
                            null !== input.p1) ||
                            $guard(_exceptionable, {
                                path: _path + ".p1",
                                expected: "ObjectUnionComposite.IPoint",
                                value: input.p1,
                            })) &&
                            $ao0(
                                input.p1,
                                _path + ".p1",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".p1",
                                expected: "ObjectUnionComposite.IPoint",
                                value: input.p1,
                            })) &&
                        (((("object" === typeof input.p2 &&
                            null !== input.p2) ||
                            $guard(_exceptionable, {
                                path: _path + ".p2",
                                expected: "ObjectUnionComposite.IPoint",
                                value: input.p2,
                            })) &&
                            $ao0(
                                input.p2,
                                _path + ".p2",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".p2",
                                expected: "ObjectUnionComposite.IPoint",
                                value: input.p2,
                            }));
                    const $ao2 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (((("object" === typeof input.p1 &&
                            null !== input.p1) ||
                            $guard(_exceptionable, {
                                path: _path + ".p1",
                                expected: "ObjectUnionComposite.IPoint",
                                value: input.p1,
                            })) &&
                            $ao0(
                                input.p1,
                                _path + ".p1",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".p1",
                                expected: "ObjectUnionComposite.IPoint",
                                value: input.p1,
                            })) &&
                        (((("object" === typeof input.p2 &&
                            null !== input.p2) ||
                            $guard(_exceptionable, {
                                path: _path + ".p2",
                                expected: "ObjectUnionComposite.IPoint",
                                value: input.p2,
                            })) &&
                            $ao0(
                                input.p2,
                                _path + ".p2",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".p2",
                                expected: "ObjectUnionComposite.IPoint",
                                value: input.p2,
                            })) &&
                        (((("object" === typeof input.p3 &&
                            null !== input.p3) ||
                            $guard(_exceptionable, {
                                path: _path + ".p3",
                                expected: "ObjectUnionComposite.IPoint",
                                value: input.p3,
                            })) &&
                            $ao0(
                                input.p3,
                                _path + ".p3",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".p3",
                                expected: "ObjectUnionComposite.IPoint",
                                value: input.p3,
                            }));
                    const $ao3 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (((("object" === typeof input.p1 &&
                            null !== input.p1) ||
                            $guard(_exceptionable, {
                                path: _path + ".p1",
                                expected: "ObjectUnionComposite.IPoint",
                                value: input.p1,
                            })) &&
                            $ao0(
                                input.p1,
                                _path + ".p1",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".p1",
                                expected: "ObjectUnionComposite.IPoint",
                                value: input.p1,
                            })) &&
                        (((("object" === typeof input.p2 &&
                            null !== input.p2) ||
                            $guard(_exceptionable, {
                                path: _path + ".p2",
                                expected: "ObjectUnionComposite.IPoint",
                                value: input.p2,
                            })) &&
                            $ao0(
                                input.p2,
                                _path + ".p2",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".p2",
                                expected: "ObjectUnionComposite.IPoint",
                                value: input.p2,
                            })) &&
                        (((("object" === typeof input.p3 &&
                            null !== input.p3) ||
                            $guard(_exceptionable, {
                                path: _path + ".p3",
                                expected: "ObjectUnionComposite.IPoint",
                                value: input.p3,
                            })) &&
                            $ao0(
                                input.p3,
                                _path + ".p3",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".p3",
                                expected: "ObjectUnionComposite.IPoint",
                                value: input.p3,
                            })) &&
                        (((("object" === typeof input.p4 &&
                            null !== input.p4) ||
                            $guard(_exceptionable, {
                                path: _path + ".p4",
                                expected: "ObjectUnionComposite.IPoint",
                                value: input.p4,
                            })) &&
                            $ao0(
                                input.p4,
                                _path + ".p4",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".p4",
                                expected: "ObjectUnionComposite.IPoint",
                                value: input.p4,
                            }));
                    const $ao4 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ((Array.isArray(input.points) ||
                            $guard(_exceptionable, {
                                path: _path + ".points",
                                expected: "Array<ObjectUnionComposite.IPoint>",
                                value: input.points,
                            })) &&
                            input.points.every(
                                (elem: any, _index2: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".points[" +
                                                _index2 +
                                                "]",
                                            expected:
                                                "ObjectUnionComposite.IPoint",
                                            value: elem,
                                        })) &&
                                        $ao0(
                                            elem,
                                            _path + ".points[" + _index2 + "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".points[" + _index2 + "]",
                                        expected: "ObjectUnionComposite.IPoint",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + ".points",
                            expected: "Array<ObjectUnionComposite.IPoint>",
                            value: input.points,
                        });
                    const $ao5 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (((("object" === typeof input.outer &&
                            null !== input.outer) ||
                            $guard(_exceptionable, {
                                path: _path + ".outer",
                                expected: "ObjectUnionComposite.IPolyline",
                                value: input.outer,
                            })) &&
                            $ao4(
                                input.outer,
                                _path + ".outer",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".outer",
                                expected: "ObjectUnionComposite.IPolyline",
                                value: input.outer,
                            })) &&
                        (((Array.isArray(input.inner) ||
                            $guard(_exceptionable, {
                                path: _path + ".inner",
                                expected:
                                    "Array<ObjectUnionComposite.IPolyline>",
                                value: input.inner,
                            })) &&
                            input.inner.every(
                                (elem: any, _index3: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".inner[" +
                                                _index3 +
                                                "]",
                                            expected:
                                                "ObjectUnionComposite.IPolyline",
                                            value: elem,
                                        })) &&
                                        $ao4(
                                            elem,
                                            _path + ".inner[" + _index3 + "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".inner[" + _index3 + "]",
                                        expected:
                                            "ObjectUnionComposite.IPolyline",
                                        value: elem,
                                    }),
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".inner",
                                expected:
                                    "Array<ObjectUnionComposite.IPolyline>",
                                value: input.inner,
                            }));
                    const $ao6 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (((Array.isArray(input.outer) ||
                            $guard(_exceptionable, {
                                path: _path + ".outer",
                                expected: "Array<ObjectUnionComposite.IPoint>",
                                value: input.outer,
                            })) &&
                            input.outer.every(
                                (elem: any, _index4: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".outer[" +
                                                _index4 +
                                                "]",
                                            expected:
                                                "ObjectUnionComposite.IPoint",
                                            value: elem,
                                        })) &&
                                        $ao0(
                                            elem,
                                            _path + ".outer[" + _index4 + "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".outer[" + _index4 + "]",
                                        expected: "ObjectUnionComposite.IPoint",
                                        value: elem,
                                    }),
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".outer",
                                expected: "Array<ObjectUnionComposite.IPoint>",
                                value: input.outer,
                            })) &&
                        (((("object" === typeof input.inner &&
                            null !== input.inner) ||
                            $guard(_exceptionable, {
                                path: _path + ".inner",
                                expected: "ObjectUnionComposite.IPoint",
                                value: input.inner,
                            })) &&
                            $ao0(
                                input.inner,
                                _path + ".inner",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".inner",
                                expected: "ObjectUnionComposite.IPoint",
                                value: input.inner,
                            }));
                    const $ao7 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (((("object" === typeof input.centroid &&
                            null !== input.centroid) ||
                            $guard(_exceptionable, {
                                path: _path + ".centroid",
                                expected: "ObjectUnionComposite.IPoint",
                                value: input.centroid,
                            })) &&
                            $ao0(
                                input.centroid,
                                _path + ".centroid",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".centroid",
                                expected: "ObjectUnionComposite.IPoint",
                                value: input.centroid,
                            })) &&
                        (("number" === typeof input.radius &&
                            Number.isFinite(input.radius)) ||
                            $guard(_exceptionable, {
                                path: _path + ".radius",
                                expected: "number",
                                value: input.radius,
                            }));
                    const $au0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        (() => {
                            if (undefined !== input.x)
                                return $ao0(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if (undefined !== input.p4)
                                return $ao3(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if (undefined !== input.points)
                                return $ao4(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if (
                                Array.isArray(input.outer) &&
                                input.outer.every(
                                    (elem: any, _index5: number) =>
                                        "object" === typeof elem &&
                                        null !== elem &&
                                        $ao0(
                                            elem,
                                            _path + ".outer[" + _index5 + "]",
                                            false && _exceptionable,
                                        ),
                                )
                            )
                                return $ao6(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if (
                                "object" === typeof input.outer &&
                                null !== input.outer &&
                                $ao4(
                                    input.outer,
                                    _path + ".outer",
                                    false && _exceptionable,
                                )
                            )
                                return $ao5(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if (undefined !== input.centroid)
                                return $ao7(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else
                                return (() => {
                                    if (undefined !== input.p3)
                                        return $ao2(
                                            input,
                                            _path,
                                            true && _exceptionable,
                                        );
                                    else
                                        return $ao1(
                                            input,
                                            _path,
                                            true && _exceptionable,
                                        );
                                })();
                        })();
                    return (
                        ((Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ObjectUnionComposite",
                                value: input,
                            })) &&
                            input.every(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(ObjectUnionComposite.ICircle | ObjectUnionComposite.ILine | ObjectUnionComposite.IPoint | ObjectUnionComposite.IPointedShape | ObjectUnionComposite.IPolygon | ObjectUnionComposite.IPolyline | ObjectUnionComposite.IRectangle | ObjectUnionComposite.ITriangle)",
                                            value: elem,
                                        })) &&
                                        $au0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true,
                                        )) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(ObjectUnionComposite.ICircle | ObjectUnionComposite.ILine | ObjectUnionComposite.IPoint | ObjectUnionComposite.IPointedShape | ObjectUnionComposite.IPolygon | ObjectUnionComposite.IPolyline | ObjectUnionComposite.IRectangle | ObjectUnionComposite.ITriangle)",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectUnionComposite",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        },
    );
