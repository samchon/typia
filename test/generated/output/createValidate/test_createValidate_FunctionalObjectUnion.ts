import typia from "../../../../src";
import { FunctionalObjectUnion } from "../../../structures/FunctionalObjectUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_FunctionalObjectUnion = _test_validate(
    "FunctionalObjectUnion",
    FunctionalObjectUnion.generate,
    (input: any): typia.IValidation<FunctionalObjectUnion> => {
        const errors = [] as any[];
        const $report = (typia.createValidate as any).report(errors);
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
                    ("number" === typeof input.x && Number.isFinite(input.x)) ||
                        $report(_exceptionable, {
                            path: _path + ".x",
                            expected: "number",
                            value: input.x,
                        }),
                    ("number" === typeof input.y && Number.isFinite(input.y)) ||
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
                ].every((flag: boolean) => flag);
            const $vo1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    ((("object" === typeof input.p1 && null !== input.p1) ||
                        $report(_exceptionable, {
                            path: _path + ".p1",
                            expected: "Resolve<FunctionalObjectUnion.IPoint>",
                            value: input.p1,
                        })) &&
                        $vo0(
                            input.p1,
                            _path + ".p1",
                            true && _exceptionable,
                        )) ||
                        $report(_exceptionable, {
                            path: _path + ".p1",
                            expected: "Resolve<FunctionalObjectUnion.IPoint>",
                            value: input.p1,
                        }),
                    ((("object" === typeof input.p2 && null !== input.p2) ||
                        $report(_exceptionable, {
                            path: _path + ".p2",
                            expected: "Resolve<FunctionalObjectUnion.IPoint>",
                            value: input.p2,
                        })) &&
                        $vo0(
                            input.p2,
                            _path + ".p2",
                            true && _exceptionable,
                        )) ||
                        $report(_exceptionable, {
                            path: _path + ".p2",
                            expected: "Resolve<FunctionalObjectUnion.IPoint>",
                            value: input.p2,
                        }),
                    "function" === typeof input.length ||
                        $report(_exceptionable, {
                            path: _path + ".length",
                            expected: "unknown",
                            value: input.length,
                        }),
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
                                            _path + ".points[" + _index2 + "]",
                                            true && _exceptionable,
                                        )) ||
                                    $report(_exceptionable, {
                                        path:
                                            _path + ".points[" + _index2 + "]",
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
                                            _path + ".points[" + _index3 + "]",
                                            true && _exceptionable,
                                        )) ||
                                    $report(_exceptionable, {
                                        path:
                                            _path + ".points[" + _index3 + "]",
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
                ].every((flag: boolean) => flag);
            const $vu0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): any =>
                (() => {
                    if (undefined !== input.x)
                        return $vo0(input, _path, true && _exceptionable);
                    if (undefined !== input.p1)
                        return $vo1(input, _path, true && _exceptionable);
                    if (undefined !== input.area)
                        return $vo3(input, _path, true && _exceptionable);
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
                                ((("object" === typeof elem && null !== elem) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
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
    FunctionalObjectUnion.SPOILERS,
);
