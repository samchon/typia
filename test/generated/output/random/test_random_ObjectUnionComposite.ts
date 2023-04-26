import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";

export const test_random_ObjectUnionComposite = _test_random(
    "ObjectUnionComposite",
    () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Primitive<ObjectUnionComposite> => {
            const $generator = (typia.random as any).generator;
            const $pick = (typia.random as any).pick;
            const $ro0 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                x:
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
                y:
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
            });
            const $ro1 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                p1: $ro0(_recursive, _recursive ? 1 + _depth : _depth),
                p2: $ro0(_recursive, _recursive ? 1 + _depth : _depth),
            });
            const $ro2 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                p1: $ro0(_recursive, _recursive ? 1 + _depth : _depth),
                p2: $ro0(_recursive, _recursive ? 1 + _depth : _depth),
                p3: $ro0(_recursive, _recursive ? 1 + _depth : _depth),
            });
            const $ro3 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                p1: $ro0(_recursive, _recursive ? 1 + _depth : _depth),
                p2: $ro0(_recursive, _recursive ? 1 + _depth : _depth),
                p3: $ro0(_recursive, _recursive ? 1 + _depth : _depth),
                p4: $ro0(_recursive, _recursive ? 1 + _depth : _depth),
            });
            const $ro4 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                points: (generator?.array ?? $generator.array)(() =>
                    $ro0(_recursive, _recursive ? 1 + _depth : _depth),
                ),
            });
            const $ro5 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                outer: $ro4(_recursive, _recursive ? 1 + _depth : _depth),
                inner: (generator?.array ?? $generator.array)(() =>
                    $ro4(_recursive, _recursive ? 1 + _depth : _depth),
                ),
            });
            const $ro6 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                outer: (generator?.array ?? $generator.array)(() =>
                    $ro0(_recursive, _recursive ? 1 + _depth : _depth),
                ),
                inner: $ro0(_recursive, _recursive ? 1 + _depth : _depth),
            });
            const $ro7 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                centroid: $ro0(_recursive, _recursive ? 1 + _depth : _depth),
                radius:
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
            });
            return (generator?.array ?? $generator.array)(() =>
                $pick([
                    () => $ro0(),
                    () => $ro1(),
                    () => $ro2(),
                    () => $ro3(),
                    () => $ro4(),
                    () => $ro5(),
                    () => $ro6(),
                    () => $ro7(),
                ])(),
            );
        })(),
    (input: any): typia.Primitive<ObjectUnionComposite> => {
        const $guard = (typia.createAssert as any).guard;
        const __is = (
            input: any,
        ): input is typia.Primitive<ObjectUnionComposite> => {
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
                    if (undefined !== input.centroid) return $io7(input);
                    return (() => {
                        if (undefined !== input.p3) return $io2(input);
                        return $io1(input);
                    })();
                })();
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $iu0(elem),
                )
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<ObjectUnionComposite> => {
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
                            expected: "ObjectUnionComposite.IPoint",
                            value: input.p1,
                        })) &&
                    $ao0(input.p1, _path + ".p1", true && _exceptionable) &&
                    (("object" === typeof input.p2 && null !== input.p2) ||
                        $guard(_exceptionable, {
                            path: _path + ".p2",
                            expected: "ObjectUnionComposite.IPoint",
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
                            expected: "ObjectUnionComposite.IPoint",
                            value: input.p1,
                        })) &&
                    $ao0(input.p1, _path + ".p1", true && _exceptionable) &&
                    (("object" === typeof input.p2 && null !== input.p2) ||
                        $guard(_exceptionable, {
                            path: _path + ".p2",
                            expected: "ObjectUnionComposite.IPoint",
                            value: input.p2,
                        })) &&
                    $ao0(input.p2, _path + ".p2", true && _exceptionable) &&
                    (("object" === typeof input.p3 && null !== input.p3) ||
                        $guard(_exceptionable, {
                            path: _path + ".p3",
                            expected: "ObjectUnionComposite.IPoint",
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
                            expected: "ObjectUnionComposite.IPoint",
                            value: input.p1,
                        })) &&
                    $ao0(input.p1, _path + ".p1", true && _exceptionable) &&
                    (("object" === typeof input.p2 && null !== input.p2) ||
                        $guard(_exceptionable, {
                            path: _path + ".p2",
                            expected: "ObjectUnionComposite.IPoint",
                            value: input.p2,
                        })) &&
                    $ao0(input.p2, _path + ".p2", true && _exceptionable) &&
                    (("object" === typeof input.p3 && null !== input.p3) ||
                        $guard(_exceptionable, {
                            path: _path + ".p3",
                            expected: "ObjectUnionComposite.IPoint",
                            value: input.p3,
                        })) &&
                    $ao0(input.p3, _path + ".p3", true && _exceptionable) &&
                    (("object" === typeof input.p4 && null !== input.p4) ||
                        $guard(_exceptionable, {
                            path: _path + ".p4",
                            expected: "ObjectUnionComposite.IPoint",
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
                            expected: "Array<ObjectUnionComposite.IPoint>",
                            value: input.points,
                        })) &&
                    input.points.every(
                        (elem: any, _index2: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(_exceptionable, {
                                    path: _path + ".points[" + _index2 + "]",
                                    expected: "ObjectUnionComposite.IPoint",
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
                            expected: "ObjectUnionComposite.IPolyline",
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
                            expected: "Array<ObjectUnionComposite.IPolyline>",
                            value: input.inner,
                        })) &&
                    input.inner.every(
                        (elem: any, _index3: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(_exceptionable, {
                                    path: _path + ".inner[" + _index3 + "]",
                                    expected: "ObjectUnionComposite.IPolyline",
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
                            expected: "Array<ObjectUnionComposite.IPoint>",
                            value: input.outer,
                        })) &&
                    input.outer.every(
                        (elem: any, _index4: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(_exceptionable, {
                                    path: _path + ".outer[" + _index4 + "]",
                                    expected: "ObjectUnionComposite.IPoint",
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
                            expected: "ObjectUnionComposite.IPoint",
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
                            expected: "ObjectUnionComposite.IPoint",
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
                                "Array<(ObjectUnionComposite.ICircle | ObjectUnionComposite.ILine | ObjectUnionComposite.IPoint | ObjectUnionComposite.IPointedShape | ObjectUnionComposite.IPolygon | ObjectUnionComposite.IPolyline | ObjectUnionComposite.IRectangle | ObjectUnionComposite.ITriangle)>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(ObjectUnionComposite.ICircle | ObjectUnionComposite.ILine | ObjectUnionComposite.IPoint | ObjectUnionComposite.IPointedShape | ObjectUnionComposite.IPolygon | ObjectUnionComposite.IPolyline | ObjectUnionComposite.IRectangle | ObjectUnionComposite.ITriangle)",
                                    value: elem,
                                })) &&
                            $au0(elem, _path + "[" + _index1 + "]", true),
                    )
                );
            })(input, "$input", true);
        return input;
    },
);
