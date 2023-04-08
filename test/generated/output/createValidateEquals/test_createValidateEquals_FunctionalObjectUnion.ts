import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { FunctionalObjectUnion } from "../../../structures/FunctionalObjectUnion";

export const test_createValidateEquals_FunctionalObjectUnion =
    _test_validateEquals(
        "FunctionalObjectUnion",
        FunctionalObjectUnion.generate,
        (input: any): typia.IValidation<FunctionalObjectUnion> => {
            const __is = (
                input: any,
                _exceptionable: boolean = true,
            ): input is FunctionalObjectUnion => {
                const $io0 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "number" === typeof input.x &&
                    Number.isFinite(input.x) &&
                    "number" === typeof input.y &&
                    Number.isFinite(input.y) &&
                    "function" === typeof input.distance &&
                    (3 === Object.keys(input).length ||
                        Object.keys(input).every((key) => {
                            if (
                                ["x", "y", "distance"].some(
                                    (prop) => key === prop,
                                )
                            )
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
                    "function" === typeof input.length &&
                    (3 === Object.keys(input).length ||
                        Object.keys(input).every((key) => {
                            if (
                                ["p1", "p2", "length"].some(
                                    (prop) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                const $io2 = (
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
                    "function" === typeof input.length &&
                    (2 === Object.keys(input).length ||
                        Object.keys(input).every((key) => {
                            if (
                                ["points", "length"].some(
                                    (prop) => key === prop,
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
                    Array.isArray(input.points) &&
                    input.points.every(
                        (elem: any, _index3: number) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem, true && _exceptionable),
                    ) &&
                    "function" === typeof input.length &&
                    "function" === typeof input.area &&
                    (3 === Object.keys(input).length ||
                        Object.keys(input).every((key) => {
                            if (
                                ["points", "length", "area"].some(
                                    (prop) => key === prop,
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
                        if (undefined !== input.p1)
                            return $io1(input, true && _exceptionable);
                        if (undefined !== input.area)
                            return $io3(input, true && _exceptionable);
                        return $io2(input, true && _exceptionable);
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
            const errors = [] as any[];
            const $report = (typia.createValidateEquals as any).report(errors);
            const $join = (typia.createValidateEquals as any).join;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is FunctionalObjectUnion => {
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
                            "function" === typeof input.distance ||
                                $report(_exceptionable, {
                                    path: _path + ".distance",
                                    expected: "unknown",
                                    value: input.distance,
                                }),
                            3 === Object.keys(input).length ||
                                false === _exceptionable ||
                                Object.keys(input)
                                    .map((key) => {
                                        if (
                                            ["x", "y", "distance"].some(
                                                (prop) => key === prop,
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
                                    expected:
                                        "Resolve<FunctionalObjectUnion.IPoint>",
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
                                        "Resolve<FunctionalObjectUnion.IPoint>",
                                    value: input.p1,
                                }),
                            ((("object" === typeof input.p2 &&
                                null !== input.p2) ||
                                $report(_exceptionable, {
                                    path: _path + ".p2",
                                    expected:
                                        "Resolve<FunctionalObjectUnion.IPoint>",
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
                                        "Resolve<FunctionalObjectUnion.IPoint>",
                                    value: input.p2,
                                }),
                            "function" === typeof input.length ||
                                $report(_exceptionable, {
                                    path: _path + ".length",
                                    expected: "unknown",
                                    value: input.length,
                                }),
                            3 === Object.keys(input).length ||
                                false === _exceptionable ||
                                Object.keys(input)
                                    .map((key) => {
                                        if (
                                            ["p1", "p2", "length"].some(
                                                (prop) => key === prop,
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
                            ((Array.isArray(input.points) ||
                                $report(_exceptionable, {
                                    path: _path + ".points",
                                    expected:
                                        "Array<Resolve<FunctionalObjectUnion.IPoint>>",
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
                                                        "Resolve<FunctionalObjectUnion.IPoint>",
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
                                                    "Resolve<FunctionalObjectUnion.IPoint>",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".points",
                                    expected:
                                        "Array<Resolve<FunctionalObjectUnion.IPoint>>",
                                    value: input.points,
                                }),
                            "function" === typeof input.length ||
                                $report(_exceptionable, {
                                    path: _path + ".length",
                                    expected: "unknown",
                                    value: input.length,
                                }),
                            2 === Object.keys(input).length ||
                                false === _exceptionable ||
                                Object.keys(input)
                                    .map((key) => {
                                        if (
                                            ["points", "length"].some(
                                                (prop) => key === prop,
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
                            ((Array.isArray(input.points) ||
                                $report(_exceptionable, {
                                    path: _path + ".points",
                                    expected:
                                        "Array<Resolve<FunctionalObjectUnion.IPoint>>",
                                    value: input.points,
                                })) &&
                                input.points
                                    .map(
                                        (elem: any, _index3: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".points[" +
                                                        _index3 +
                                                        "]",
                                                    expected:
                                                        "Resolve<FunctionalObjectUnion.IPoint>",
                                                    value: elem,
                                                })) &&
                                                $vo0(
                                                    elem,
                                                    _path +
                                                        ".points[" +
                                                        _index3 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".points[" +
                                                    _index3 +
                                                    "]",
                                                expected:
                                                    "Resolve<FunctionalObjectUnion.IPoint>",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".points",
                                    expected:
                                        "Array<Resolve<FunctionalObjectUnion.IPoint>>",
                                    value: input.points,
                                }),
                            "function" === typeof input.length ||
                                $report(_exceptionable, {
                                    path: _path + ".length",
                                    expected: "unknown",
                                    value: input.length,
                                }),
                            "function" === typeof input.area ||
                                $report(_exceptionable, {
                                    path: _path + ".area",
                                    expected: "unknown",
                                    value: input.area,
                                }),
                            3 === Object.keys(input).length ||
                                false === _exceptionable ||
                                Object.keys(input)
                                    .map((key) => {
                                        if (
                                            ["points", "length", "area"].some(
                                                (prop) => key === prop,
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
                            if (undefined !== input.p1)
                                return $vo1(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if (undefined !== input.area)
                                return $vo3(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            return $vo2(input, _path, true && _exceptionable);
                        })();
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    "Array<(Resolve<FunctionalObjectUnion.ILine> | Resolve<FunctionalObjectUnion.IPoint> | Resolve<FunctionalObjectUnion.IPolygon> | Resolve<FunctionalObjectUnion.IPolyline>)>",
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
                                                    "(Resolve<FunctionalObjectUnion.ILine> | Resolve<FunctionalObjectUnion.IPoint> | Resolve<FunctionalObjectUnion.IPolygon> | Resolve<FunctionalObjectUnion.IPolyline>)",
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
                                                "(Resolve<FunctionalObjectUnion.ILine> | Resolve<FunctionalObjectUnion.IPoint> | Resolve<FunctionalObjectUnion.IPolygon> | Resolve<FunctionalObjectUnion.IPolyline>)",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected:
                                "Array<(Resolve<FunctionalObjectUnion.ILine> | Resolve<FunctionalObjectUnion.IPoint> | Resolve<FunctionalObjectUnion.IPolygon> | Resolve<FunctionalObjectUnion.IPolyline>)>",
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
        },
    );
