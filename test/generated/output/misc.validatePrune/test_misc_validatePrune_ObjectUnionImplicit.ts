import typia from "../../../../src";
import { _test_misc_validatePrune } from "../../../internal/_test_misc_validatePrune";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";

export const test_misc_validatePrune_ObjectUnionImplicit =
    _test_misc_validatePrune<ObjectUnionImplicit>(ObjectUnionImplicit)(
        (input) =>
            ((input: any): typia.IValidation<ObjectUnionImplicit> => {
                const validate = (
                    input: any,
                ): typia.IValidation<ObjectUnionImplicit> => {
                    const errors = [] as any[];
                    const __is = (input: any): input is ObjectUnionImplicit => {
                        const $io0 = (input: any): boolean =>
                            "number" === typeof input.x &&
                            Number.isFinite(input.x) &&
                            "number" === typeof input.y &&
                            Number.isFinite(input.y) &&
                            (null === input.slope ||
                                undefined === input.slope ||
                                ("number" === typeof input.slope &&
                                    Number.isFinite(input.slope)));
                        const $io1 = (input: any): boolean =>
                            "object" === typeof input.p1 &&
                            null !== input.p1 &&
                            $io0(input.p1) &&
                            "object" === typeof input.p2 &&
                            null !== input.p2 &&
                            $io0(input.p2) &&
                            (null === input.width ||
                                undefined === input.width ||
                                ("number" === typeof input.width &&
                                    Number.isFinite(input.width))) &&
                            (null === input.distance ||
                                undefined === input.distance ||
                                ("number" === typeof input.distance &&
                                    Number.isFinite(input.distance)));
                        const $io2 = (input: any): boolean =>
                            "object" === typeof input.p1 &&
                            null !== input.p1 &&
                            $io0(input.p1) &&
                            "object" === typeof input.p2 &&
                            null !== input.p2 &&
                            $io0(input.p2) &&
                            "object" === typeof input.p3 &&
                            null !== input.p3 &&
                            $io0(input.p3) &&
                            (null === input.width ||
                                undefined === input.width ||
                                ("number" === typeof input.width &&
                                    Number.isFinite(input.width))) &&
                            (null === input.height ||
                                undefined === input.height ||
                                ("number" === typeof input.height &&
                                    Number.isFinite(input.height))) &&
                            (null === input.area ||
                                undefined === input.area ||
                                ("number" === typeof input.area &&
                                    Number.isFinite(input.area)));
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
                            $io0(input.p4) &&
                            (null === input.width ||
                                undefined === input.width ||
                                ("number" === typeof input.width &&
                                    Number.isFinite(input.width))) &&
                            (null === input.height ||
                                undefined === input.height ||
                                ("number" === typeof input.height &&
                                    Number.isFinite(input.height))) &&
                            (null === input.area ||
                                undefined === input.area ||
                                ("number" === typeof input.area &&
                                    Number.isFinite(input.area)));
                        const $io4 = (input: any): boolean =>
                            Array.isArray(input.points) &&
                            input.points.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io0(elem),
                            ) &&
                            (null === input.length ||
                                undefined === input.length ||
                                ("number" === typeof input.length &&
                                    Number.isFinite(input.length)));
                        const $io5 = (input: any): boolean =>
                            "object" === typeof input.outer &&
                            null !== input.outer &&
                            $io4(input.outer) &&
                            (undefined === input.inner ||
                                (Array.isArray(input.inner) &&
                                    input.inner.every(
                                        (elem: any) =>
                                            "object" === typeof elem &&
                                            null !== elem &&
                                            $io4(elem),
                                    ))) &&
                            (null === input.area ||
                                undefined === input.area ||
                                ("number" === typeof input.area &&
                                    Number.isFinite(input.area)));
                        const $io6 = (input: any): boolean =>
                            (undefined === input.centroid ||
                                ("object" === typeof input.centroid &&
                                    null !== input.centroid &&
                                    $io0(input.centroid))) &&
                            "number" === typeof input.radius &&
                            Number.isFinite(input.radius) &&
                            (null === input.area ||
                                undefined === input.area ||
                                ("number" === typeof input.area &&
                                    Number.isFinite(input.area)));
                        const $iu0 = (input: any): any =>
                            (() => {
                                if (undefined !== input.x) return $io0(input);
                                if (undefined !== input.p4) return $io3(input);
                                if (undefined !== input.points)
                                    return $io4(input);
                                if (undefined !== input.outer)
                                    return $io5(input);
                                if (undefined !== input.radius)
                                    return $io6(input);
                                return (() => {
                                    if (undefined !== input.p3)
                                        return $io2(input);
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
                    if (false === __is(input)) {
                        const $report = (
                            typia.misc.validatePrune as any
                        ).report(errors);
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is ObjectUnionImplicit => {
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
                                    null === input.slope ||
                                        undefined === input.slope ||
                                        ("number" === typeof input.slope &&
                                            Number.isFinite(input.slope)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".slope",
                                            expected:
                                                "(null | number | undefined)",
                                            value: input.slope,
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
                                                "ObjectUnionImplicit.IPoint",
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
                                                "ObjectUnionImplicit.IPoint",
                                            value: input.p1,
                                        }),
                                    ((("object" === typeof input.p2 &&
                                        null !== input.p2) ||
                                        $report(_exceptionable, {
                                            path: _path + ".p2",
                                            expected:
                                                "ObjectUnionImplicit.IPoint",
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
                                                "ObjectUnionImplicit.IPoint",
                                            value: input.p2,
                                        }),
                                    null === input.width ||
                                        undefined === input.width ||
                                        ("number" === typeof input.width &&
                                            Number.isFinite(input.width)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".width",
                                            expected:
                                                "(null | number | undefined)",
                                            value: input.width,
                                        }),
                                    null === input.distance ||
                                        undefined === input.distance ||
                                        ("number" === typeof input.distance &&
                                            Number.isFinite(input.distance)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".distance",
                                            expected:
                                                "(null | number | undefined)",
                                            value: input.distance,
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
                                                "ObjectUnionImplicit.IPoint",
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
                                                "ObjectUnionImplicit.IPoint",
                                            value: input.p1,
                                        }),
                                    ((("object" === typeof input.p2 &&
                                        null !== input.p2) ||
                                        $report(_exceptionable, {
                                            path: _path + ".p2",
                                            expected:
                                                "ObjectUnionImplicit.IPoint",
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
                                                "ObjectUnionImplicit.IPoint",
                                            value: input.p2,
                                        }),
                                    ((("object" === typeof input.p3 &&
                                        null !== input.p3) ||
                                        $report(_exceptionable, {
                                            path: _path + ".p3",
                                            expected:
                                                "ObjectUnionImplicit.IPoint",
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
                                                "ObjectUnionImplicit.IPoint",
                                            value: input.p3,
                                        }),
                                    null === input.width ||
                                        undefined === input.width ||
                                        ("number" === typeof input.width &&
                                            Number.isFinite(input.width)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".width",
                                            expected:
                                                "(null | number | undefined)",
                                            value: input.width,
                                        }),
                                    null === input.height ||
                                        undefined === input.height ||
                                        ("number" === typeof input.height &&
                                            Number.isFinite(input.height)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".height",
                                            expected:
                                                "(null | number | undefined)",
                                            value: input.height,
                                        }),
                                    null === input.area ||
                                        undefined === input.area ||
                                        ("number" === typeof input.area &&
                                            Number.isFinite(input.area)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".area",
                                            expected:
                                                "(null | number | undefined)",
                                            value: input.area,
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
                                                "ObjectUnionImplicit.IPoint",
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
                                                "ObjectUnionImplicit.IPoint",
                                            value: input.p1,
                                        }),
                                    ((("object" === typeof input.p2 &&
                                        null !== input.p2) ||
                                        $report(_exceptionable, {
                                            path: _path + ".p2",
                                            expected:
                                                "ObjectUnionImplicit.IPoint",
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
                                                "ObjectUnionImplicit.IPoint",
                                            value: input.p2,
                                        }),
                                    ((("object" === typeof input.p3 &&
                                        null !== input.p3) ||
                                        $report(_exceptionable, {
                                            path: _path + ".p3",
                                            expected:
                                                "ObjectUnionImplicit.IPoint",
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
                                                "ObjectUnionImplicit.IPoint",
                                            value: input.p3,
                                        }),
                                    ((("object" === typeof input.p4 &&
                                        null !== input.p4) ||
                                        $report(_exceptionable, {
                                            path: _path + ".p4",
                                            expected:
                                                "ObjectUnionImplicit.IPoint",
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
                                                "ObjectUnionImplicit.IPoint",
                                            value: input.p4,
                                        }),
                                    null === input.width ||
                                        undefined === input.width ||
                                        ("number" === typeof input.width &&
                                            Number.isFinite(input.width)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".width",
                                            expected:
                                                "(null | number | undefined)",
                                            value: input.width,
                                        }),
                                    null === input.height ||
                                        undefined === input.height ||
                                        ("number" === typeof input.height &&
                                            Number.isFinite(input.height)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".height",
                                            expected:
                                                "(null | number | undefined)",
                                            value: input.height,
                                        }),
                                    null === input.area ||
                                        undefined === input.area ||
                                        ("number" === typeof input.area &&
                                            Number.isFinite(input.area)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".area",
                                            expected:
                                                "(null | number | undefined)",
                                            value: input.area,
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
                                                "Array<ObjectUnionImplicit.IPoint>",
                                            value: input.points,
                                        })) &&
                                        input.points
                                            .map(
                                                (elem: any, _index2: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".points[" +
                                                                    _index2 +
                                                                    "]",
                                                                expected:
                                                                    "ObjectUnionImplicit.IPoint",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo0(
                                                            elem,
                                                            _path +
                                                                ".points[" +
                                                                _index2 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".points[" +
                                                            _index2 +
                                                            "]",
                                                        expected:
                                                            "ObjectUnionImplicit.IPoint",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".points",
                                            expected:
                                                "Array<ObjectUnionImplicit.IPoint>",
                                            value: input.points,
                                        }),
                                    null === input.length ||
                                        undefined === input.length ||
                                        ("number" === typeof input.length &&
                                            Number.isFinite(input.length)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".length",
                                            expected:
                                                "(null | number | undefined)",
                                            value: input.length,
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
                                                "ObjectUnionImplicit.IPolyline",
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
                                                "ObjectUnionImplicit.IPolyline",
                                            value: input.outer,
                                        }),
                                    undefined === input.inner ||
                                        ((Array.isArray(input.inner) ||
                                            $report(_exceptionable, {
                                                path: _path + ".inner",
                                                expected:
                                                    "(Array<ObjectUnionImplicit.IPolyline> | undefined)",
                                                value: input.inner,
                                            })) &&
                                            input.inner
                                                .map(
                                                    (
                                                        elem: any,
                                                        _index3: number,
                                                    ) =>
                                                        ((("object" ===
                                                            typeof elem &&
                                                            null !== elem) ||
                                                            $report(
                                                                _exceptionable,
                                                                {
                                                                    path:
                                                                        _path +
                                                                        ".inner[" +
                                                                        _index3 +
                                                                        "]",
                                                                    expected:
                                                                        "ObjectUnionImplicit.IPolyline",
                                                                    value: elem,
                                                                },
                                                            )) &&
                                                            $vo4(
                                                                elem,
                                                                _path +
                                                                    ".inner[" +
                                                                    _index3 +
                                                                    "]",
                                                                true &&
                                                                    _exceptionable,
                                                            )) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".inner[" +
                                                                    _index3 +
                                                                    "]",
                                                                expected:
                                                                    "ObjectUnionImplicit.IPolyline",
                                                                value: elem,
                                                            },
                                                        ),
                                                )
                                                .every(
                                                    (flag: boolean) => flag,
                                                )) ||
                                        $report(_exceptionable, {
                                            path: _path + ".inner",
                                            expected:
                                                "(Array<ObjectUnionImplicit.IPolyline> | undefined)",
                                            value: input.inner,
                                        }),
                                    null === input.area ||
                                        undefined === input.area ||
                                        ("number" === typeof input.area &&
                                            Number.isFinite(input.area)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".area",
                                            expected:
                                                "(null | number | undefined)",
                                            value: input.area,
                                        }),
                                ].every((flag: boolean) => flag);
                            const $vo6 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    undefined === input.centroid ||
                                        ((("object" === typeof input.centroid &&
                                            null !== input.centroid) ||
                                            $report(_exceptionable, {
                                                path: _path + ".centroid",
                                                expected:
                                                    "(ObjectUnionImplicit.IPoint | undefined)",
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
                                                "(ObjectUnionImplicit.IPoint | undefined)",
                                            value: input.centroid,
                                        }),
                                    ("number" === typeof input.radius &&
                                        Number.isFinite(input.radius)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".radius",
                                            expected: "number",
                                            value: input.radius,
                                        }),
                                    null === input.area ||
                                        undefined === input.area ||
                                        ("number" === typeof input.area &&
                                            Number.isFinite(input.area)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".area",
                                            expected:
                                                "(null | number | undefined)",
                                            value: input.area,
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
                                    if (undefined !== input.outer)
                                        return $vo5(
                                            input,
                                            _path,
                                            true && _exceptionable,
                                        );
                                    if (undefined !== input.radius)
                                        return $vo6(
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
                                        expected: "ObjectUnionImplicit",
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
                                                            "(ObjectUnionImplicit.ICircle | ObjectUnionImplicit.ILine | ObjectUnionImplicit.IPoint | ObjectUnionImplicit.IPolygon | ObjectUnionImplicit.IPolyline | ObjectUnionImplicit.IRectangle | ObjectUnionImplicit.ITriangle)",
                                                        value: elem,
                                                    })) &&
                                                    $vu0(
                                                        elem,
                                                        _path +
                                                            "[" +
                                                            _index1 +
                                                            "]",
                                                        true,
                                                    )) ||
                                                $report(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "(ObjectUnionImplicit.ICircle | ObjectUnionImplicit.ILine | ObjectUnionImplicit.IPoint | ObjectUnionImplicit.IPolygon | ObjectUnionImplicit.IPolyline | ObjectUnionImplicit.IRectangle | ObjectUnionImplicit.ITriangle)",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ObjectUnionImplicit",
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
                };
                const prune = (input: ObjectUnionImplicit): void => {
                    const $io0 = (input: any): boolean =>
                        "number" === typeof input.x &&
                        "number" === typeof input.y &&
                        (null === input.slope ||
                            undefined === input.slope ||
                            "number" === typeof input.slope);
                    const $io1 = (input: any): boolean =>
                        "object" === typeof input.p1 &&
                        null !== input.p1 &&
                        $io0(input.p1) &&
                        "object" === typeof input.p2 &&
                        null !== input.p2 &&
                        $io0(input.p2) &&
                        (null === input.width ||
                            undefined === input.width ||
                            "number" === typeof input.width) &&
                        (null === input.distance ||
                            undefined === input.distance ||
                            "number" === typeof input.distance);
                    const $io2 = (input: any): boolean =>
                        "object" === typeof input.p1 &&
                        null !== input.p1 &&
                        $io0(input.p1) &&
                        "object" === typeof input.p2 &&
                        null !== input.p2 &&
                        $io0(input.p2) &&
                        "object" === typeof input.p3 &&
                        null !== input.p3 &&
                        $io0(input.p3) &&
                        (null === input.width ||
                            undefined === input.width ||
                            "number" === typeof input.width) &&
                        (null === input.height ||
                            undefined === input.height ||
                            "number" === typeof input.height) &&
                        (null === input.area ||
                            undefined === input.area ||
                            "number" === typeof input.area);
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
                        $io0(input.p4) &&
                        (null === input.width ||
                            undefined === input.width ||
                            "number" === typeof input.width) &&
                        (null === input.height ||
                            undefined === input.height ||
                            "number" === typeof input.height) &&
                        (null === input.area ||
                            undefined === input.area ||
                            "number" === typeof input.area);
                    const $io4 = (input: any): boolean =>
                        Array.isArray(input.points) &&
                        input.points.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io0(elem),
                        ) &&
                        (null === input.length ||
                            undefined === input.length ||
                            "number" === typeof input.length);
                    const $io5 = (input: any): boolean =>
                        "object" === typeof input.outer &&
                        null !== input.outer &&
                        $io4(input.outer) &&
                        (undefined === input.inner ||
                            (Array.isArray(input.inner) &&
                                input.inner.every(
                                    (elem: any) =>
                                        "object" === typeof elem &&
                                        null !== elem &&
                                        $io4(elem),
                                ))) &&
                        (null === input.area ||
                            undefined === input.area ||
                            "number" === typeof input.area);
                    const $io6 = (input: any): boolean =>
                        (undefined === input.centroid ||
                            ("object" === typeof input.centroid &&
                                null !== input.centroid &&
                                $io0(input.centroid))) &&
                        "number" === typeof input.radius &&
                        (null === input.area ||
                            undefined === input.area ||
                            "number" === typeof input.area);
                    const $pp0 = (input: any) =>
                        input.forEach((elem: any) => {
                            if ("object" === typeof elem && null !== elem)
                                $pu0(elem);
                        });
                    const $pp1 = (input: any) =>
                        input.forEach((elem: any) => {
                            if ("object" === typeof elem && null !== elem)
                                $po0(elem);
                        });
                    const $pp2 = (input: any) =>
                        input.forEach((elem: any) => {
                            if ("object" === typeof elem && null !== elem)
                                $po4(elem);
                        });
                    const $po0 = (input: any): any => {
                        for (const key of Object.keys(input)) {
                            if ("x" === key || "y" === key || "slope" === key)
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
                            if (
                                "p1" === key ||
                                "p2" === key ||
                                "width" === key ||
                                "distance" === key
                            )
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
                            if (
                                "p1" === key ||
                                "p2" === key ||
                                "p3" === key ||
                                "width" === key ||
                                "height" === key ||
                                "area" === key
                            )
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
                            if (
                                "p1" === key ||
                                "p2" === key ||
                                "p3" === key ||
                                "p4" === key ||
                                "width" === key ||
                                "height" === key ||
                                "area" === key
                            )
                                continue;
                            delete input[key];
                        }
                    };
                    const $po4 = (input: any): any => {
                        if (Array.isArray(input.points)) $pp1(input.points);
                        for (const key of Object.keys(input)) {
                            if ("points" === key || "length" === key) continue;
                            delete input[key];
                        }
                    };
                    const $po5 = (input: any): any => {
                        if (
                            "object" === typeof input.outer &&
                            null !== input.outer
                        )
                            $po4(input.outer);
                        if (Array.isArray(input.inner)) $pp2(input.inner);
                        for (const key of Object.keys(input)) {
                            if (
                                "outer" === key ||
                                "inner" === key ||
                                "area" === key
                            )
                                continue;
                            delete input[key];
                        }
                    };
                    const $po6 = (input: any): any => {
                        if (
                            "object" === typeof input.centroid &&
                            null !== input.centroid
                        )
                            $po0(input.centroid);
                        for (const key of Object.keys(input)) {
                            if (
                                "centroid" === key ||
                                "radius" === key ||
                                "area" === key
                            )
                                continue;
                            delete input[key];
                        }
                    };
                    const $pu0 = (input: any): any =>
                        (() => {
                            if (undefined !== input.x) return $po0(input);
                            if (undefined !== input.p4) return $po3(input);
                            if (undefined !== input.points) return $po4(input);
                            if (undefined !== input.outer) return $po5(input);
                            if (undefined !== input.radius) return $po6(input);
                            return (() => {
                                if (undefined !== input.p3) return $po2(input);
                                return $po1(input);
                            })();
                        })();
                    if (Array.isArray(input)) $pp0(input);
                };
                const output = validate(input);
                if (output.success) prune(input);
                return output;
            })(input),
    );
