import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";

export const test_createRandom_ObjectUnionCompositePointer = _test_random(
    "ObjectUnionCompositePointer",
)<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
    random: (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<ObjectUnionCompositePointer> => {
        const $generator = (typia.createRandom as any).generator;
        const $pick = (typia.createRandom as any).pick;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            value: (generator?.array ?? $generator.array)(() =>
                $ro1(_recursive, _recursive ? 1 + _depth : _depth),
            ),
        });
        const $ro1 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            value: $pick([
                () => $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro3(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro4(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro5(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro6(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro8(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro7(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro9(_recursive, _recursive ? 1 + _depth : _depth),
            ])(),
        });
        const $ro2 = (
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
        const $ro3 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            p1: $ro2(_recursive, _recursive ? 1 + _depth : _depth),
            p2: $ro2(_recursive, _recursive ? 1 + _depth : _depth),
        });
        const $ro4 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            p1: $ro2(_recursive, _recursive ? 1 + _depth : _depth),
            p2: $ro2(_recursive, _recursive ? 1 + _depth : _depth),
            p3: $ro2(_recursive, _recursive ? 1 + _depth : _depth),
        });
        const $ro5 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            p1: $ro2(_recursive, _recursive ? 1 + _depth : _depth),
            p2: $ro2(_recursive, _recursive ? 1 + _depth : _depth),
            p3: $ro2(_recursive, _recursive ? 1 + _depth : _depth),
            p4: $ro2(_recursive, _recursive ? 1 + _depth : _depth),
        });
        const $ro6 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            points: (generator?.array ?? $generator.array)(() =>
                $ro2(_recursive, _recursive ? 1 + _depth : _depth),
            ),
        });
        const $ro7 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            outer: $ro6(_recursive, _recursive ? 1 + _depth : _depth),
            inner: (generator?.array ?? $generator.array)(() =>
                $ro6(_recursive, _recursive ? 1 + _depth : _depth),
            ),
        });
        const $ro8 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            outer: (generator?.array ?? $generator.array)(() =>
                $ro2(_recursive, _recursive ? 1 + _depth : _depth),
            ),
            inner: $ro2(_recursive, _recursive ? 1 + _depth : _depth),
        });
        const $ro9 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            centroid: $ro2(_recursive, _recursive ? 1 + _depth : _depth),
            radius:
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100),
        });
        return $ro0();
    },
    assert: (input: any): ObjectUnionCompositePointer => {
        const __is = (input: any): input is ObjectUnionCompositePointer => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $iu0(input.value);
            const $io2 = (input: any): boolean =>
                "number" === typeof input.x &&
                Number.isFinite(input.x) &&
                "number" === typeof input.y &&
                Number.isFinite(input.y);
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
                Number.isFinite((input.p2 as any).y);
            const $io4 = (input: any): boolean =>
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
            const $io5 = (input: any): boolean =>
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
            const $io6 = (input: any): boolean =>
                Array.isArray(input.points) &&
                input.points.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                );
            const $io7 = (input: any): boolean =>
                "object" === typeof input.outer &&
                null !== input.outer &&
                $io6(input.outer) &&
                Array.isArray(input.inner) &&
                input.inner.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io6(elem),
                );
            const $io8 = (input: any): boolean =>
                Array.isArray(input.outer) &&
                input.outer.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                ) &&
                "object" === typeof input.inner &&
                null !== input.inner &&
                "number" === typeof (input.inner as any).x &&
                Number.isFinite((input.inner as any).x) &&
                "number" === typeof (input.inner as any).y &&
                Number.isFinite((input.inner as any).y);
            const $io9 = (input: any): boolean =>
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
                    if (undefined !== input.x) return $io2(input);
                    else if (undefined !== input.p4) return $io5(input);
                    else if (undefined !== input.points) return $io6(input);
                    else if (
                        Array.isArray(input.outer) &&
                        input.outer.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        )
                    )
                        return $io8(input);
                    else if (
                        "object" === typeof input.outer &&
                        null !== input.outer &&
                        $io6(input.outer)
                    )
                        return $io7(input);
                    else if (undefined !== input.centroid) return $io9(input);
                    else
                        return (() => {
                            if (undefined !== input.p3) return $io4(input);
                            else return $io3(input);
                        })();
                })();
            return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectUnionCompositePointer => {
                const $guard = (typia.createAssert as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ((Array.isArray(input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected:
                                "Array<IPointer<IPoint | ILine | ITriangle | IRectangle | IPolyline | IPolygon | IPointedShape | ICircle>>",
                            value: input.value,
                        })) &&
                        input.value.every(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value[" + _index1 + "]",
                                        expected:
                                            "IPointer<IPoint | ILine | ITriangle | IRectangle | IPolyline | IPolygon | IPointedShape | ICircle>",
                                        value: elem,
                                    })) &&
                                    $ao1(
                                        elem,
                                        _path + ".value[" + _index1 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value[" + _index1 + "]",
                                    expected:
                                        "IPointer<IPoint | ILine | ITriangle | IRectangle | IPolyline | IPolygon | IPointedShape | ICircle>",
                                    value: elem,
                                }),
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected:
                            "Array<IPointer<IPoint | ILine | ITriangle | IRectangle | IPolyline | IPolygon | IPointedShape | ICircle>>",
                        value: input.value,
                    });
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ((("object" === typeof input.value &&
                        null !== input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected:
                                "(ObjectUnionCompositePointer.ICircle | ObjectUnionCompositePointer.ILine | ObjectUnionCompositePointer.IPoint | ObjectUnionCompositePointer.IPointedShape | ObjectUnionCompositePointer.IPolygon | ObjectUnionCompositePointer.IPolyline | ObjectUnionCompositePointer.IRectangle | ObjectUnionCompositePointer.ITriangle)",
                            value: input.value,
                        })) &&
                        $au0(
                            input.value,
                            _path + ".value",
                            true && _exceptionable,
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected:
                            "(ObjectUnionCompositePointer.ICircle | ObjectUnionCompositePointer.ILine | ObjectUnionCompositePointer.IPoint | ObjectUnionCompositePointer.IPointedShape | ObjectUnionCompositePointer.IPolygon | ObjectUnionCompositePointer.IPolyline | ObjectUnionCompositePointer.IRectangle | ObjectUnionCompositePointer.ITriangle)",
                        value: input.value,
                    });
                const $ao2 = (
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
                const $ao3 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((("object" === typeof input.p1 && null !== input.p1) ||
                        $guard(_exceptionable, {
                            path: _path + ".p1",
                            expected: "ObjectUnionCompositePointer.IPoint",
                            value: input.p1,
                        })) &&
                        $ao2(
                            input.p1,
                            _path + ".p1",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".p1",
                            expected: "ObjectUnionCompositePointer.IPoint",
                            value: input.p1,
                        })) &&
                    (((("object" === typeof input.p2 && null !== input.p2) ||
                        $guard(_exceptionable, {
                            path: _path + ".p2",
                            expected: "ObjectUnionCompositePointer.IPoint",
                            value: input.p2,
                        })) &&
                        $ao2(
                            input.p2,
                            _path + ".p2",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".p2",
                            expected: "ObjectUnionCompositePointer.IPoint",
                            value: input.p2,
                        }));
                const $ao4 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((("object" === typeof input.p1 && null !== input.p1) ||
                        $guard(_exceptionable, {
                            path: _path + ".p1",
                            expected: "ObjectUnionCompositePointer.IPoint",
                            value: input.p1,
                        })) &&
                        $ao2(
                            input.p1,
                            _path + ".p1",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".p1",
                            expected: "ObjectUnionCompositePointer.IPoint",
                            value: input.p1,
                        })) &&
                    (((("object" === typeof input.p2 && null !== input.p2) ||
                        $guard(_exceptionable, {
                            path: _path + ".p2",
                            expected: "ObjectUnionCompositePointer.IPoint",
                            value: input.p2,
                        })) &&
                        $ao2(
                            input.p2,
                            _path + ".p2",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".p2",
                            expected: "ObjectUnionCompositePointer.IPoint",
                            value: input.p2,
                        })) &&
                    (((("object" === typeof input.p3 && null !== input.p3) ||
                        $guard(_exceptionable, {
                            path: _path + ".p3",
                            expected: "ObjectUnionCompositePointer.IPoint",
                            value: input.p3,
                        })) &&
                        $ao2(
                            input.p3,
                            _path + ".p3",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".p3",
                            expected: "ObjectUnionCompositePointer.IPoint",
                            value: input.p3,
                        }));
                const $ao5 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((("object" === typeof input.p1 && null !== input.p1) ||
                        $guard(_exceptionable, {
                            path: _path + ".p1",
                            expected: "ObjectUnionCompositePointer.IPoint",
                            value: input.p1,
                        })) &&
                        $ao2(
                            input.p1,
                            _path + ".p1",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".p1",
                            expected: "ObjectUnionCompositePointer.IPoint",
                            value: input.p1,
                        })) &&
                    (((("object" === typeof input.p2 && null !== input.p2) ||
                        $guard(_exceptionable, {
                            path: _path + ".p2",
                            expected: "ObjectUnionCompositePointer.IPoint",
                            value: input.p2,
                        })) &&
                        $ao2(
                            input.p2,
                            _path + ".p2",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".p2",
                            expected: "ObjectUnionCompositePointer.IPoint",
                            value: input.p2,
                        })) &&
                    (((("object" === typeof input.p3 && null !== input.p3) ||
                        $guard(_exceptionable, {
                            path: _path + ".p3",
                            expected: "ObjectUnionCompositePointer.IPoint",
                            value: input.p3,
                        })) &&
                        $ao2(
                            input.p3,
                            _path + ".p3",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".p3",
                            expected: "ObjectUnionCompositePointer.IPoint",
                            value: input.p3,
                        })) &&
                    (((("object" === typeof input.p4 && null !== input.p4) ||
                        $guard(_exceptionable, {
                            path: _path + ".p4",
                            expected: "ObjectUnionCompositePointer.IPoint",
                            value: input.p4,
                        })) &&
                        $ao2(
                            input.p4,
                            _path + ".p4",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".p4",
                            expected: "ObjectUnionCompositePointer.IPoint",
                            value: input.p4,
                        }));
                const $ao6 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ((Array.isArray(input.points) ||
                        $guard(_exceptionable, {
                            path: _path + ".points",
                            expected:
                                "Array<ObjectUnionCompositePointer.IPoint>",
                            value: input.points,
                        })) &&
                        input.points.every(
                            (elem: any, _index2: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".points[" + _index2 + "]",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: elem,
                                    })) &&
                                    $ao2(
                                        elem,
                                        _path + ".points[" + _index2 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".points[" + _index2 + "]",
                                    expected:
                                        "ObjectUnionCompositePointer.IPoint",
                                    value: elem,
                                }),
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + ".points",
                        expected: "Array<ObjectUnionCompositePointer.IPoint>",
                        value: input.points,
                    });
                const $ao7 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((("object" === typeof input.outer &&
                        null !== input.outer) ||
                        $guard(_exceptionable, {
                            path: _path + ".outer",
                            expected: "ObjectUnionCompositePointer.IPolyline",
                            value: input.outer,
                        })) &&
                        $ao6(
                            input.outer,
                            _path + ".outer",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".outer",
                            expected: "ObjectUnionCompositePointer.IPolyline",
                            value: input.outer,
                        })) &&
                    (((Array.isArray(input.inner) ||
                        $guard(_exceptionable, {
                            path: _path + ".inner",
                            expected:
                                "Array<ObjectUnionCompositePointer.IPolyline>",
                            value: input.inner,
                        })) &&
                        input.inner.every(
                            (elem: any, _index3: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".inner[" + _index3 + "]",
                                        expected:
                                            "ObjectUnionCompositePointer.IPolyline",
                                        value: elem,
                                    })) &&
                                    $ao6(
                                        elem,
                                        _path + ".inner[" + _index3 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".inner[" + _index3 + "]",
                                    expected:
                                        "ObjectUnionCompositePointer.IPolyline",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".inner",
                            expected:
                                "Array<ObjectUnionCompositePointer.IPolyline>",
                            value: input.inner,
                        }));
                const $ao8 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((Array.isArray(input.outer) ||
                        $guard(_exceptionable, {
                            path: _path + ".outer",
                            expected:
                                "Array<ObjectUnionCompositePointer.IPoint>",
                            value: input.outer,
                        })) &&
                        input.outer.every(
                            (elem: any, _index4: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".outer[" + _index4 + "]",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: elem,
                                    })) &&
                                    $ao2(
                                        elem,
                                        _path + ".outer[" + _index4 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".outer[" + _index4 + "]",
                                    expected:
                                        "ObjectUnionCompositePointer.IPoint",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".outer",
                            expected:
                                "Array<ObjectUnionCompositePointer.IPoint>",
                            value: input.outer,
                        })) &&
                    (((("object" === typeof input.inner &&
                        null !== input.inner) ||
                        $guard(_exceptionable, {
                            path: _path + ".inner",
                            expected: "ObjectUnionCompositePointer.IPoint",
                            value: input.inner,
                        })) &&
                        $ao2(
                            input.inner,
                            _path + ".inner",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".inner",
                            expected: "ObjectUnionCompositePointer.IPoint",
                            value: input.inner,
                        }));
                const $ao9 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((("object" === typeof input.centroid &&
                        null !== input.centroid) ||
                        $guard(_exceptionable, {
                            path: _path + ".centroid",
                            expected: "ObjectUnionCompositePointer.IPoint",
                            value: input.centroid,
                        })) &&
                        $ao2(
                            input.centroid,
                            _path + ".centroid",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".centroid",
                            expected: "ObjectUnionCompositePointer.IPoint",
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
                            return $ao2(input, _path, true && _exceptionable);
                        else if (undefined !== input.p4)
                            return $ao5(input, _path, true && _exceptionable);
                        else if (undefined !== input.points)
                            return $ao6(input, _path, true && _exceptionable);
                        else if (
                            Array.isArray(input.outer) &&
                            input.outer.every(
                                (elem: any, _index5: number) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $ao2(
                                        elem,
                                        _path + ".outer[" + _index5 + "]",
                                        false && _exceptionable,
                                    ),
                            )
                        )
                            return $ao8(input, _path, true && _exceptionable);
                        else if (
                            "object" === typeof input.outer &&
                            null !== input.outer &&
                            $ao6(
                                input.outer,
                                _path + ".outer",
                                false && _exceptionable,
                            )
                        )
                            return $ao7(input, _path, true && _exceptionable);
                        else if (undefined !== input.centroid)
                            return $ao9(input, _path, true && _exceptionable);
                        else
                            return (() => {
                                if (undefined !== input.p3)
                                    return $ao4(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                else
                                    return $ao3(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                            })();
                    })();
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectUnionCompositePointer",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ObjectUnionCompositePointer",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
