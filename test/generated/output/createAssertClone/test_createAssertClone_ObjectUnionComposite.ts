import typia from "../../../../src";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ObjectUnionComposite = _test_assertClone(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input: any): typia.Primitive<ObjectUnionComposite> => {
        const assert = (input: any): ObjectUnionComposite => {
            const $guard = (typia.createAssertClone as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectUnionComposite => {
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
                    (("object" === typeof input.p1 && null !== input.p1) ||
                        $guard(_exceptionable, {
                            path: _path + ".p1",
                            expected: "Resolve<ObjectUnionComposite.IPoint>",
                            value: input.p1,
                        })) &&
                    $ao0(input.p1, _path + ".p1", true && _exceptionable) &&
                    (("object" === typeof input.p2 && null !== input.p2) ||
                        $guard(_exceptionable, {
                            path: _path + ".p2",
                            expected: "Resolve<ObjectUnionComposite.IPoint>",
                            value: input.p2,
                        })) &&
                    $ao0(input.p2, _path + ".p2", true && _exceptionable);
                const $ao2 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("object" === typeof input.p1 && null !== input.p1) ||
                        $guard(_exceptionable, {
                            path: _path + ".p1",
                            expected: "Resolve<ObjectUnionComposite.IPoint>",
                            value: input.p1,
                        })) &&
                    $ao0(input.p1, _path + ".p1", true && _exceptionable) &&
                    (("object" === typeof input.p2 && null !== input.p2) ||
                        $guard(_exceptionable, {
                            path: _path + ".p2",
                            expected: "Resolve<ObjectUnionComposite.IPoint>",
                            value: input.p2,
                        })) &&
                    $ao0(input.p2, _path + ".p2", true && _exceptionable) &&
                    (("object" === typeof input.p3 && null !== input.p3) ||
                        $guard(_exceptionable, {
                            path: _path + ".p3",
                            expected: "Resolve<ObjectUnionComposite.IPoint>",
                            value: input.p3,
                        })) &&
                    $ao0(input.p3, _path + ".p3", true && _exceptionable);
                const $ao3 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("object" === typeof input.p1 && null !== input.p1) ||
                        $guard(_exceptionable, {
                            path: _path + ".p1",
                            expected: "Resolve<ObjectUnionComposite.IPoint>",
                            value: input.p1,
                        })) &&
                    $ao0(input.p1, _path + ".p1", true && _exceptionable) &&
                    (("object" === typeof input.p2 && null !== input.p2) ||
                        $guard(_exceptionable, {
                            path: _path + ".p2",
                            expected: "Resolve<ObjectUnionComposite.IPoint>",
                            value: input.p2,
                        })) &&
                    $ao0(input.p2, _path + ".p2", true && _exceptionable) &&
                    (("object" === typeof input.p3 && null !== input.p3) ||
                        $guard(_exceptionable, {
                            path: _path + ".p3",
                            expected: "Resolve<ObjectUnionComposite.IPoint>",
                            value: input.p3,
                        })) &&
                    $ao0(input.p3, _path + ".p3", true && _exceptionable) &&
                    (("object" === typeof input.p4 && null !== input.p4) ||
                        $guard(_exceptionable, {
                            path: _path + ".p4",
                            expected: "Resolve<ObjectUnionComposite.IPoint>",
                            value: input.p4,
                        })) &&
                    $ao0(input.p4, _path + ".p4", true && _exceptionable);
                const $ao4 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (Array.isArray(input.points) ||
                        $guard(_exceptionable, {
                            path: _path + ".points",
                            expected:
                                "Array<Resolve<ObjectUnionComposite.IPoint>>",
                            value: input.points,
                        })) &&
                    input.points.every(
                        (elem: any, _index2: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(_exceptionable, {
                                    path: _path + ".points[" + _index2 + "]",
                                    expected:
                                        "Resolve<ObjectUnionComposite.IPoint>",
                                    value: elem,
                                })) &&
                            $ao0(
                                elem,
                                _path + ".points[" + _index2 + "]",
                                true && _exceptionable,
                            ),
                    );
                const $ao5 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("object" === typeof input.outer &&
                        null !== input.outer) ||
                        $guard(_exceptionable, {
                            path: _path + ".outer",
                            expected: "Resolve<ObjectUnionComposite.IPolyline>",
                            value: input.outer,
                        })) &&
                    $ao4(
                        input.outer,
                        _path + ".outer",
                        true && _exceptionable,
                    ) &&
                    (Array.isArray(input.inner) ||
                        $guard(_exceptionable, {
                            path: _path + ".inner",
                            expected:
                                "Array<Resolve<ObjectUnionComposite.IPolyline>>",
                            value: input.inner,
                        })) &&
                    input.inner.every(
                        (elem: any, _index3: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(_exceptionable, {
                                    path: _path + ".inner[" + _index3 + "]",
                                    expected:
                                        "Resolve<ObjectUnionComposite.IPolyline>",
                                    value: elem,
                                })) &&
                            $ao4(
                                elem,
                                _path + ".inner[" + _index3 + "]",
                                true && _exceptionable,
                            ),
                    );
                const $ao6 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (Array.isArray(input.outer) ||
                        $guard(_exceptionable, {
                            path: _path + ".outer",
                            expected:
                                "Array<Resolve<ObjectUnionComposite.IPoint>>",
                            value: input.outer,
                        })) &&
                    input.outer.every(
                        (elem: any, _index4: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(_exceptionable, {
                                    path: _path + ".outer[" + _index4 + "]",
                                    expected:
                                        "Resolve<ObjectUnionComposite.IPoint>",
                                    value: elem,
                                })) &&
                            $ao0(
                                elem,
                                _path + ".outer[" + _index4 + "]",
                                true && _exceptionable,
                            ),
                    ) &&
                    (("object" === typeof input.inner &&
                        null !== input.inner) ||
                        $guard(_exceptionable, {
                            path: _path + ".inner",
                            expected: "Resolve<ObjectUnionComposite.IPoint>",
                            value: input.inner,
                        })) &&
                    $ao0(input.inner, _path + ".inner", true && _exceptionable);
                const $ao7 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("object" === typeof input.centroid &&
                        null !== input.centroid) ||
                        $guard(_exceptionable, {
                            path: _path + ".centroid",
                            expected: "Resolve<ObjectUnionComposite.IPoint>",
                            value: input.centroid,
                        })) &&
                    $ao0(
                        input.centroid,
                        _path + ".centroid",
                        true && _exceptionable,
                    ) &&
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
                            return $ao0(input, _path, true && _exceptionable);
                        if (undefined !== input.p4)
                            return $ao3(input, _path, true && _exceptionable);
                        if (undefined !== input.points)
                            return $ao4(input, _path, true && _exceptionable);
                        if (
                            "object" === typeof input.outer &&
                            null !== input.outer &&
                            $ao4(
                                input.outer,
                                _path + ".outer",
                                false && _exceptionable,
                            )
                        )
                            return $ao5(input, _path, true && _exceptionable);
                        if (
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
                            return $ao6(input, _path, true && _exceptionable);
                        if (undefined !== input.centroid)
                            return $ao7(input, _path, true && _exceptionable);
                        return (() => {
                            if (undefined !== input.p3)
                                return $ao2(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            return $ao1(input, _path, true && _exceptionable);
                        })();
                    })();
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "Array<(Resolve<ObjectUnionComposite.ICircle> | Resolve<ObjectUnionComposite.ILine> | Resolve<ObjectUnionComposite.IPoint> | Resolve<ObjectUnionComposite.IPointedShape> | Resolve<ObjectUnionComposite.IPolygon> | Resolve<ObjectUnionComposite.IPolyline> | Resolve<ObjectUnionComposite.IRectangle> | Resolve<ObjectUnionComposite.ITriangle>)>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(Resolve<ObjectUnionComposite.ICircle> | Resolve<ObjectUnionComposite.ILine> | Resolve<ObjectUnionComposite.IPoint> | Resolve<ObjectUnionComposite.IPointedShape> | Resolve<ObjectUnionComposite.IPolygon> | Resolve<ObjectUnionComposite.IPolyline> | Resolve<ObjectUnionComposite.IRectangle> | Resolve<ObjectUnionComposite.ITriangle>)",
                                    value: elem,
                                })) &&
                            $au0(elem, _path + "[" + _index1 + "]", true),
                    )
                );
            })(input, "$input", true);
            return input;
        };
        const clone = (
            input: ObjectUnionComposite,
        ): typia.Primitive<ObjectUnionComposite> => {
            const $io0 = (input: any): boolean =>
                "number" === typeof input.x && "number" === typeof input.y;
            const $io1 = (input: any): boolean =>
                "object" === typeof input.p1 &&
                null !== input.p1 &&
                $io0(input.p1) &&
                "object" === typeof input.p2 &&
                null !== input.p2 &&
                $io0(input.p2);
            const $io2 = (input: any): boolean =>
                "object" === typeof input.p1 &&
                null !== input.p1 &&
                $io0(input.p1) &&
                "object" === typeof input.p2 &&
                null !== input.p2 &&
                $io0(input.p2) &&
                "object" === typeof input.p3 &&
                null !== input.p3 &&
                $io0(input.p3);
            const $io3 = (input: any): boolean =>
                "object" === typeof input.p1 &&
                null !== input.p1 &&
                $io0(input.p1) &&
                "object" === typeof input.p2 &&
                null !== input.p2 &&
                $io0(input.p2) &&
                "object" === typeof input.p3 &&
                null !== input.p3 &&
                $io0(input.p3) &&
                "object" === typeof input.p4 &&
                null !== input.p4 &&
                $io0(input.p4);
            const $io4 = (input: any): boolean =>
                Array.isArray(input.points) &&
                input.points.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                );
            const $io5 = (input: any): boolean =>
                "object" === typeof input.outer &&
                null !== input.outer &&
                $io4(input.outer) &&
                Array.isArray(input.inner) &&
                input.inner.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io4(elem),
                );
            const $io6 = (input: any): boolean =>
                Array.isArray(input.outer) &&
                input.outer.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                ) &&
                "object" === typeof input.inner &&
                null !== input.inner &&
                $io0(input.inner);
            const $io7 = (input: any): boolean =>
                "object" === typeof input.centroid &&
                null !== input.centroid &&
                $io0(input.centroid) &&
                "number" === typeof input.radius;
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
                    if (undefined !== input.centroid) return $io7(input);
                    return (() => {
                        if (undefined !== input.p3) return $io2(input);
                        return $io1(input);
                    })();
                })();
            const $co0 = (input: any): any => ({
                x: input.x as any,
                y: input.y as any,
            });
            const $co1 = (input: any): any => ({
                p1:
                    "object" === typeof input.p1 && null !== input.p1
                        ? $co0(input.p1)
                        : (input.p1 as any),
                p2:
                    "object" === typeof input.p2 && null !== input.p2
                        ? $co0(input.p2)
                        : (input.p2 as any),
            });
            const $co2 = (input: any): any => ({
                p1:
                    "object" === typeof input.p1 && null !== input.p1
                        ? $co0(input.p1)
                        : (input.p1 as any),
                p2:
                    "object" === typeof input.p2 && null !== input.p2
                        ? $co0(input.p2)
                        : (input.p2 as any),
                p3:
                    "object" === typeof input.p3 && null !== input.p3
                        ? $co0(input.p3)
                        : (input.p3 as any),
            });
            const $co3 = (input: any): any => ({
                p1:
                    "object" === typeof input.p1 && null !== input.p1
                        ? $co0(input.p1)
                        : (input.p1 as any),
                p2:
                    "object" === typeof input.p2 && null !== input.p2
                        ? $co0(input.p2)
                        : (input.p2 as any),
                p3:
                    "object" === typeof input.p3 && null !== input.p3
                        ? $co0(input.p3)
                        : (input.p3 as any),
                p4:
                    "object" === typeof input.p4 && null !== input.p4
                        ? $co0(input.p4)
                        : (input.p4 as any),
            });
            const $co4 = (input: any): any => ({
                points: Array.isArray(input.points)
                    ? input.points.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co0(elem)
                              : (elem as any),
                      )
                    : (input.points as any),
            });
            const $co5 = (input: any): any => ({
                outer:
                    "object" === typeof input.outer && null !== input.outer
                        ? $co4(input.outer)
                        : (input.outer as any),
                inner: Array.isArray(input.inner)
                    ? input.inner.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co4(elem)
                              : (elem as any),
                      )
                    : (input.inner as any),
            });
            const $co6 = (input: any): any => ({
                outer: Array.isArray(input.outer)
                    ? input.outer.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co0(elem)
                              : (elem as any),
                      )
                    : (input.outer as any),
                inner:
                    "object" === typeof input.inner && null !== input.inner
                        ? $co0(input.inner)
                        : (input.inner as any),
            });
            const $co7 = (input: any): any => ({
                centroid:
                    "object" === typeof input.centroid &&
                    null !== input.centroid
                        ? $co0(input.centroid)
                        : (input.centroid as any),
                radius: input.radius as any,
            });
            const $cu0 = (input: any): any =>
                (() => {
                    if (undefined !== input.x) return $co0(input);
                    if (undefined !== input.p4) return $co3(input);
                    if (undefined !== input.points) return $co4(input);
                    if (
                        "object" === typeof input.outer &&
                        null !== input.outer &&
                        $io4(input.outer)
                    )
                        return $co5(input);
                    if (
                        Array.isArray(input.outer) &&
                        input.outer.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io0(elem),
                        )
                    )
                        return $co6(input);
                    if (undefined !== input.centroid) return $co7(input);
                    return (() => {
                        if (undefined !== input.p3) return $co2(input);
                        return $co1(input);
                    })();
                })();
            return Array.isArray(input)
                ? input.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $cu0(elem)
                          : (elem as any),
                  )
                : (input as any);
        };
        assert(input);
        const output = clone(input);
        return output;
    },
    ObjectUnionComposite.SPOILERS,
);
