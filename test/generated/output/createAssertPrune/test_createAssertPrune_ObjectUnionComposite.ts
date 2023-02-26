import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";

export const test_createAssertPrune_ObjectUnionComposite = _test_assertPrune(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (
        input: any,
    ): Array<
        | ObjectUnionComposite.IPoint
        | ObjectUnionComposite.ILine
        | ObjectUnionComposite.ITriangle
        | ObjectUnionComposite.IRectangle
        | ObjectUnionComposite.IPolyline
        | ObjectUnionComposite.IPolygon
        | ObjectUnionComposite.IPointedShape
        | ObjectUnionComposite.ICircle
    > => {
        const assert = (input: any): ObjectUnionComposite => {
            const $guard = (typia.createAssertPrune as any).guard;
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
        const prune = (input: ObjectUnionComposite): void => {
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
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("x" === key || "y" === key) continue;
                    delete input[key];
                }
            };
            const $po1 = (input: any): any => {
                if ("object" === typeof input.p1 && null !== input.p1)
                    $po0(input.p1);
                if ("object" === typeof input.p2 && null !== input.p2)
                    $po0(input.p2);
                for (const key of Object.keys(input)) {
                    if ("p1" === key || "p2" === key) continue;
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
                    if ("p1" === key || "p2" === key || "p3" === key) continue;
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
                    if (
                        "p1" === key ||
                        "p2" === key ||
                        "p3" === key ||
                        "p4" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            const $po4 = (input: any): any => {
                if (Array.isArray(input.points))
                    input.points.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po0(elem);
                    });
                for (const key of Object.keys(input)) {
                    if ("points" === key) continue;
                    delete input[key];
                }
            };
            const $po5 = (input: any): any => {
                if ("object" === typeof input.outer && null !== input.outer)
                    $po4(input.outer);
                if (Array.isArray(input.inner))
                    input.inner.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po4(elem);
                    });
                for (const key of Object.keys(input)) {
                    if ("outer" === key || "inner" === key) continue;
                    delete input[key];
                }
            };
            const $po6 = (input: any): any => {
                if (Array.isArray(input.outer))
                    input.outer.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po0(elem);
                    });
                if ("object" === typeof input.inner && null !== input.inner)
                    $po0(input.inner);
                for (const key of Object.keys(input)) {
                    if ("outer" === key || "inner" === key) continue;
                    delete input[key];
                }
            };
            const $po7 = (input: any): any => {
                if (
                    "object" === typeof input.centroid &&
                    null !== input.centroid
                )
                    $po0(input.centroid);
                for (const key of Object.keys(input)) {
                    if ("centroid" === key || "radius" === key) continue;
                    delete input[key];
                }
            };
            const $pu0 = (input: any): any =>
                (() => {
                    if (undefined !== input.x) return $po0(input);
                    if (undefined !== input.p4) return $po3(input);
                    if (undefined !== input.points) return $po4(input);
                    if (
                        "object" === typeof input.outer &&
                        null !== input.outer &&
                        $io4(input.outer)
                    )
                        return $po5(input);
                    if (
                        Array.isArray(input.outer) &&
                        input.outer.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io0(elem),
                        )
                    )
                        return $po6(input);
                    if (undefined !== input.centroid) return $po7(input);
                    return (() => {
                        if (undefined !== input.p3) return $po2(input);
                        return $po1(input);
                    })();
                })();
            if (Array.isArray(input))
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $pu0(elem);
                });
        };
        assert(input);
        prune(input);
        return input;
    },
    ObjectUnionComposite.SPOILERS,
);
