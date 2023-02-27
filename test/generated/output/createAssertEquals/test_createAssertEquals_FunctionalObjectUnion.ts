import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { FunctionalObjectUnion } from "../../../structures/FunctionalObjectUnion";

export const test_createAssertEquals_FunctionalObjectUnion = _test_assertEquals(
    "FunctionalObjectUnion",
    FunctionalObjectUnion.generate,
    (input: any): FunctionalObjectUnion => {
        const $guard = (typia.createAssertEquals as any).guard;
        const $join = (typia.createAssertEquals as any).join;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is FunctionalObjectUnion => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("number" === typeof input.x && Number.isFinite(input.x)) ||
                    $guard(_exceptionable, {
                        path: _path + ".x",
                        expected: "number",
                        value: input.x,
                    })) &&
                (("number" === typeof input.y && Number.isFinite(input.y)) ||
                    $guard(_exceptionable, {
                        path: _path + ".y",
                        expected: "number",
                        value: input.y,
                    })) &&
                ("function" === typeof input.distance ||
                    $guard(_exceptionable, {
                        path: _path + ".distance",
                        expected: "unknown",
                        value: input.distance,
                    })) &&
                (3 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        if (["x", "y", "distance"].some((prop) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
                    }));
            const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("object" === typeof input.p1 && null !== input.p1) ||
                    $guard(_exceptionable, {
                        path: _path + ".p1",
                        expected: "Resolve<FunctionalObjectUnion.IPoint>",
                        value: input.p1,
                    })) &&
                $ao0(input.p1, _path + ".p1", true && _exceptionable) &&
                (("object" === typeof input.p2 && null !== input.p2) ||
                    $guard(_exceptionable, {
                        path: _path + ".p2",
                        expected: "Resolve<FunctionalObjectUnion.IPoint>",
                        value: input.p2,
                    })) &&
                $ao0(input.p2, _path + ".p2", true && _exceptionable) &&
                ("function" === typeof input.length ||
                    $guard(_exceptionable, {
                        path: _path + ".length",
                        expected: "unknown",
                        value: input.length,
                    })) &&
                (3 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        if (["p1", "p2", "length"].some((prop) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
                    }));
            const $ao2 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (Array.isArray(input.points) ||
                    $guard(_exceptionable, {
                        path: _path + ".points",
                        expected:
                            "Array<Resolve<FunctionalObjectUnion.IPoint>>",
                        value: input.points,
                    })) &&
                input.points.every(
                    (elem: any, _index2: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(_exceptionable, {
                                path: _path + ".points[" + _index2 + "]",
                                expected:
                                    "Resolve<FunctionalObjectUnion.IPoint>",
                                value: elem,
                            })) &&
                        $ao0(
                            elem,
                            _path + ".points[" + _index2 + "]",
                            true && _exceptionable,
                        ),
                ) &&
                ("function" === typeof input.length ||
                    $guard(_exceptionable, {
                        path: _path + ".length",
                        expected: "unknown",
                        value: input.length,
                    })) &&
                (2 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        if (["points", "length"].some((prop) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
                    }));
            const $ao3 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (Array.isArray(input.points) ||
                    $guard(_exceptionable, {
                        path: _path + ".points",
                        expected:
                            "Array<Resolve<FunctionalObjectUnion.IPoint>>",
                        value: input.points,
                    })) &&
                input.points.every(
                    (elem: any, _index3: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(_exceptionable, {
                                path: _path + ".points[" + _index3 + "]",
                                expected:
                                    "Resolve<FunctionalObjectUnion.IPoint>",
                                value: elem,
                            })) &&
                        $ao0(
                            elem,
                            _path + ".points[" + _index3 + "]",
                            true && _exceptionable,
                        ),
                ) &&
                ("function" === typeof input.length ||
                    $guard(_exceptionable, {
                        path: _path + ".length",
                        expected: "unknown",
                        value: input.length,
                    })) &&
                ("function" === typeof input.area ||
                    $guard(_exceptionable, {
                        path: _path + ".area",
                        expected: "unknown",
                        value: input.area,
                    })) &&
                (3 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        if (
                            ["points", "length", "area"].some(
                                (prop) => key === prop,
                            )
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
                    }));
            const $au0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): any =>
                (() => {
                    if (undefined !== input.x)
                        return $ao0(input, _path, true && _exceptionable);
                    if (undefined !== input.p1)
                        return $ao1(input, _path, true && _exceptionable);
                    if (undefined !== input.area)
                        return $ao3(input, _path, true && _exceptionable);
                    return $ao2(input, _path, true && _exceptionable);
                })();
            return (
                (Array.isArray(input) ||
                    $guard(true, {
                        path: _path + "",
                        expected:
                            "Array<(Resolve<FunctionalObjectUnion.ILine> | Resolve<FunctionalObjectUnion.IPoint> | Resolve<FunctionalObjectUnion.IPolygon> | Resolve<FunctionalObjectUnion.IPolyline>)>",
                        value: input,
                    })) &&
                input.every(
                    (elem: any, _index1: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(true, {
                                path: _path + "[" + _index1 + "]",
                                expected:
                                    "(Resolve<FunctionalObjectUnion.ILine> | Resolve<FunctionalObjectUnion.IPoint> | Resolve<FunctionalObjectUnion.IPolygon> | Resolve<FunctionalObjectUnion.IPolyline>)",
                                value: elem,
                            })) &&
                        $au0(elem, _path + "[" + _index1 + "]", true),
                )
            );
        })(input, "$input", true);
        return input;
    },
);
