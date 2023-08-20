import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";

export const test_validateEquals_ObjectUnionComposite = _test_validateEquals(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) =>
        ((input: any): typia.IValidation<ObjectUnionComposite> => {
            const errors = [] as any[];
            const __is = (
                input: any,
                _exceptionable: boolean = true,
            ): input is ObjectUnionComposite => {
                const $io0 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "number" === typeof input.x &&
                    Number.isFinite(input.x) &&
                    "number" === typeof input.y &&
                    Number.isFinite(input.y) &&
                    (2 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (["x", "y"].some((prop: any) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                const $io1 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    $io0(input.p1, true && _exceptionable) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    $io0(input.p2, true && _exceptionable) &&
                    (2 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (["p1", "p2"].some((prop: any) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                const $io2 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    $io0(input.p1, true && _exceptionable) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    $io0(input.p2, true && _exceptionable) &&
                    "object" === typeof input.p3 &&
                    null !== input.p3 &&
                    $io0(input.p3, true && _exceptionable) &&
                    (3 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (
                                ["p1", "p2", "p3"].some(
                                    (prop: any) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                const $io3 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    $io0(input.p1, true && _exceptionable) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    $io0(input.p2, true && _exceptionable) &&
                    "object" === typeof input.p3 &&
                    null !== input.p3 &&
                    $io0(input.p3, true && _exceptionable) &&
                    "object" === typeof input.p4 &&
                    null !== input.p4 &&
                    $io0(input.p4, true && _exceptionable) &&
                    (4 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (
                                ["p1", "p2", "p3", "p4"].some(
                                    (prop: any) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                const $io4 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    Array.isArray(input.points) &&
                    input.points.every(
                        (elem: any, _index2: number) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem, true && _exceptionable),
                    ) &&
                    (1 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (["points"].some((prop: any) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                const $io5 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "object" === typeof input.outer &&
                    null !== input.outer &&
                    $io4(input.outer, true && _exceptionable) &&
                    Array.isArray(input.inner) &&
                    input.inner.every(
                        (elem: any, _index3: number) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io4(elem, true && _exceptionable),
                    ) &&
                    (2 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (
                                ["outer", "inner"].some(
                                    (prop: any) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                const $io6 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    Array.isArray(input.outer) &&
                    input.outer.every(
                        (elem: any, _index4: number) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem, true && _exceptionable),
                    ) &&
                    "object" === typeof input.inner &&
                    null !== input.inner &&
                    $io0(input.inner, true && _exceptionable) &&
                    (2 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (
                                ["outer", "inner"].some(
                                    (prop: any) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                const $io7 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "object" === typeof input.centroid &&
                    null !== input.centroid &&
                    $io0(input.centroid, true && _exceptionable) &&
                    "number" === typeof input.radius &&
                    Number.isFinite(input.radius) &&
                    (2 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (
                                ["centroid", "radius"].some(
                                    (prop: any) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                const $iu0 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if (undefined !== input.x)
                            return $io0(input, true && _exceptionable);
                        if (undefined !== input.p4)
                            return $io3(input, true && _exceptionable);
                        if (undefined !== input.points)
                            return $io4(input, true && _exceptionable);
                        if (
                            Array.isArray(input.outer) &&
                            input.outer.every(
                                (elem: any, _index5: number) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io0(elem, false && _exceptionable),
                            )
                        )
                            return $io6(input, true && _exceptionable);
                        if (
                            "object" === typeof input.outer &&
                            null !== input.outer &&
                            $io4(input.outer, false && _exceptionable)
                        )
                            return $io5(input, true && _exceptionable);
                        if (undefined !== input.centroid)
                            return $io7(input, true && _exceptionable);
                        return (() => {
                            if (undefined !== input.p3)
                                return $io2(input, true && _exceptionable);
                            return $io1(input, true && _exceptionable);
                        })();
                    })();
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $iu0(elem, true),
                    )
                );
            };
            if (false === __is(input)) {
                const $report = (typia.validateEquals as any).report(errors);
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectUnionComposite => {
                    const $join = (typia.validateEquals as any).join;
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
                            2 === Object.keys(input).length ||
                                false === _exceptionable ||
                                Object.keys(input)
                                    .map((key: any) => {
                                        if (
                                            ["x", "y"].some(
                                                (prop: any) => key === prop,
                                            )
                                        )
                                            return true;
                                        const value = input[key];
                                        if (undefined === value) return true;
                                        return $report(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "undefined",
                                            value: value,
                                        });
                                    })
                                    .every((flag: boolean) => flag),
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
                                    expected: "ObjectUnionComposite.IPoint",
                                    value: input.p1,
                                })) &&
                                $vo0(
                                    input.p1,
                                    _path + ".p1",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".p1",
                                    expected: "ObjectUnionComposite.IPoint",
                                    value: input.p1,
                                }),
                            ((("object" === typeof input.p2 &&
                                null !== input.p2) ||
                                $report(_exceptionable, {
                                    path: _path + ".p2",
                                    expected: "ObjectUnionComposite.IPoint",
                                    value: input.p2,
                                })) &&
                                $vo0(
                                    input.p2,
                                    _path + ".p2",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".p2",
                                    expected: "ObjectUnionComposite.IPoint",
                                    value: input.p2,
                                }),
                            2 === Object.keys(input).length ||
                                false === _exceptionable ||
                                Object.keys(input)
                                    .map((key: any) => {
                                        if (
                                            ["p1", "p2"].some(
                                                (prop: any) => key === prop,
                                            )
                                        )
                                            return true;
                                        const value = input[key];
                                        if (undefined === value) return true;
                                        return $report(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "undefined",
                                            value: value,
                                        });
                                    })
                                    .every((flag: boolean) => flag),
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
                                    expected: "ObjectUnionComposite.IPoint",
                                    value: input.p1,
                                })) &&
                                $vo0(
                                    input.p1,
                                    _path + ".p1",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".p1",
                                    expected: "ObjectUnionComposite.IPoint",
                                    value: input.p1,
                                }),
                            ((("object" === typeof input.p2 &&
                                null !== input.p2) ||
                                $report(_exceptionable, {
                                    path: _path + ".p2",
                                    expected: "ObjectUnionComposite.IPoint",
                                    value: input.p2,
                                })) &&
                                $vo0(
                                    input.p2,
                                    _path + ".p2",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".p2",
                                    expected: "ObjectUnionComposite.IPoint",
                                    value: input.p2,
                                }),
                            ((("object" === typeof input.p3 &&
                                null !== input.p3) ||
                                $report(_exceptionable, {
                                    path: _path + ".p3",
                                    expected: "ObjectUnionComposite.IPoint",
                                    value: input.p3,
                                })) &&
                                $vo0(
                                    input.p3,
                                    _path + ".p3",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".p3",
                                    expected: "ObjectUnionComposite.IPoint",
                                    value: input.p3,
                                }),
                            3 === Object.keys(input).length ||
                                false === _exceptionable ||
                                Object.keys(input)
                                    .map((key: any) => {
                                        if (
                                            ["p1", "p2", "p3"].some(
                                                (prop: any) => key === prop,
                                            )
                                        )
                                            return true;
                                        const value = input[key];
                                        if (undefined === value) return true;
                                        return $report(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "undefined",
                                            value: value,
                                        });
                                    })
                                    .every((flag: boolean) => flag),
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
                                    expected: "ObjectUnionComposite.IPoint",
                                    value: input.p1,
                                })) &&
                                $vo0(
                                    input.p1,
                                    _path + ".p1",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".p1",
                                    expected: "ObjectUnionComposite.IPoint",
                                    value: input.p1,
                                }),
                            ((("object" === typeof input.p2 &&
                                null !== input.p2) ||
                                $report(_exceptionable, {
                                    path: _path + ".p2",
                                    expected: "ObjectUnionComposite.IPoint",
                                    value: input.p2,
                                })) &&
                                $vo0(
                                    input.p2,
                                    _path + ".p2",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".p2",
                                    expected: "ObjectUnionComposite.IPoint",
                                    value: input.p2,
                                }),
                            ((("object" === typeof input.p3 &&
                                null !== input.p3) ||
                                $report(_exceptionable, {
                                    path: _path + ".p3",
                                    expected: "ObjectUnionComposite.IPoint",
                                    value: input.p3,
                                })) &&
                                $vo0(
                                    input.p3,
                                    _path + ".p3",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".p3",
                                    expected: "ObjectUnionComposite.IPoint",
                                    value: input.p3,
                                }),
                            ((("object" === typeof input.p4 &&
                                null !== input.p4) ||
                                $report(_exceptionable, {
                                    path: _path + ".p4",
                                    expected: "ObjectUnionComposite.IPoint",
                                    value: input.p4,
                                })) &&
                                $vo0(
                                    input.p4,
                                    _path + ".p4",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".p4",
                                    expected: "ObjectUnionComposite.IPoint",
                                    value: input.p4,
                                }),
                            4 === Object.keys(input).length ||
                                false === _exceptionable ||
                                Object.keys(input)
                                    .map((key: any) => {
                                        if (
                                            ["p1", "p2", "p3", "p4"].some(
                                                (prop: any) => key === prop,
                                            )
                                        )
                                            return true;
                                        const value = input[key];
                                        if (undefined === value) return true;
                                        return $report(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "undefined",
                                            value: value,
                                        });
                                    })
                                    .every((flag: boolean) => flag),
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
                                        "Array<ObjectUnionComposite.IPoint>",
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
                                                        "ObjectUnionComposite.IPoint",
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
                                                    "ObjectUnionComposite.IPoint",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".points",
                                    expected:
                                        "Array<ObjectUnionComposite.IPoint>",
                                    value: input.points,
                                }),
                            1 === Object.keys(input).length ||
                                false === _exceptionable ||
                                Object.keys(input)
                                    .map((key: any) => {
                                        if (
                                            ["points"].some(
                                                (prop: any) => key === prop,
                                            )
                                        )
                                            return true;
                                        const value = input[key];
                                        if (undefined === value) return true;
                                        return $report(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "undefined",
                                            value: value,
                                        });
                                    })
                                    .every((flag: boolean) => flag),
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
                                    expected: "ObjectUnionComposite.IPolyline",
                                    value: input.outer,
                                })) &&
                                $vo4(
                                    input.outer,
                                    _path + ".outer",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".outer",
                                    expected: "ObjectUnionComposite.IPolyline",
                                    value: input.outer,
                                }),
                            ((Array.isArray(input.inner) ||
                                $report(_exceptionable, {
                                    path: _path + ".inner",
                                    expected:
                                        "Array<ObjectUnionComposite.IPolyline>",
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
                                                        "ObjectUnionComposite.IPolyline",
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
                                                    "ObjectUnionComposite.IPolyline",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".inner",
                                    expected:
                                        "Array<ObjectUnionComposite.IPolyline>",
                                    value: input.inner,
                                }),
                            2 === Object.keys(input).length ||
                                false === _exceptionable ||
                                Object.keys(input)
                                    .map((key: any) => {
                                        if (
                                            ["outer", "inner"].some(
                                                (prop: any) => key === prop,
                                            )
                                        )
                                            return true;
                                        const value = input[key];
                                        if (undefined === value) return true;
                                        return $report(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "undefined",
                                            value: value,
                                        });
                                    })
                                    .every((flag: boolean) => flag),
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
                                        "Array<ObjectUnionComposite.IPoint>",
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
                                                        "ObjectUnionComposite.IPoint",
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
                                                    "ObjectUnionComposite.IPoint",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".outer",
                                    expected:
                                        "Array<ObjectUnionComposite.IPoint>",
                                    value: input.outer,
                                }),
                            ((("object" === typeof input.inner &&
                                null !== input.inner) ||
                                $report(_exceptionable, {
                                    path: _path + ".inner",
                                    expected: "ObjectUnionComposite.IPoint",
                                    value: input.inner,
                                })) &&
                                $vo0(
                                    input.inner,
                                    _path + ".inner",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".inner",
                                    expected: "ObjectUnionComposite.IPoint",
                                    value: input.inner,
                                }),
                            2 === Object.keys(input).length ||
                                false === _exceptionable ||
                                Object.keys(input)
                                    .map((key: any) => {
                                        if (
                                            ["outer", "inner"].some(
                                                (prop: any) => key === prop,
                                            )
                                        )
                                            return true;
                                        const value = input[key];
                                        if (undefined === value) return true;
                                        return $report(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "undefined",
                                            value: value,
                                        });
                                    })
                                    .every((flag: boolean) => flag),
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
                                    expected: "ObjectUnionComposite.IPoint",
                                    value: input.centroid,
                                })) &&
                                $vo0(
                                    input.centroid,
                                    _path + ".centroid",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".centroid",
                                    expected: "ObjectUnionComposite.IPoint",
                                    value: input.centroid,
                                }),
                            ("number" === typeof input.radius &&
                                Number.isFinite(input.radius)) ||
                                $report(_exceptionable, {
                                    path: _path + ".radius",
                                    expected: "number",
                                    value: input.radius,
                                }),
                            2 === Object.keys(input).length ||
                                false === _exceptionable ||
                                Object.keys(input)
                                    .map((key: any) => {
                                        if (
                                            ["centroid", "radius"].some(
                                                (prop: any) => key === prop,
                                            )
                                        )
                                            return true;
                                        const value = input[key];
                                        if (undefined === value) return true;
                                        return $report(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "undefined",
                                            value: value,
                                        });
                                    })
                                    .every((flag: boolean) => flag),
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
                                expected: "ObjectUnionComposite",
                                value: input,
                            })) &&
                            input
                                .map(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "(ObjectUnionComposite.ICircle | ObjectUnionComposite.ILine | ObjectUnionComposite.IPoint | ObjectUnionComposite.IPointedShape | ObjectUnionComposite.IPolygon | ObjectUnionComposite.IPolyline | ObjectUnionComposite.IRectangle | ObjectUnionComposite.ITriangle)",
                                                value: elem,
                                            })) &&
                                            $vu0(
                                                elem,
                                                _path + "[" + _index1 + "]",
                                                true,
                                            )) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(ObjectUnionComposite.ICircle | ObjectUnionComposite.ILine | ObjectUnionComposite.IPoint | ObjectUnionComposite.IPointedShape | ObjectUnionComposite.IPolygon | ObjectUnionComposite.IPolyline | ObjectUnionComposite.IRectangle | ObjectUnionComposite.ITriangle)",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "ObjectUnionComposite",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            }
            const success = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        })(input),
);
