import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_createAssertEquals_ObjectSimple = _test_assertEquals(
    "ObjectSimple",
    ObjectSimple.generate,
    (input: any): ObjectSimple => {
        const __is: any = (
            input: any,
            _exceptionable: boolean = true,
        ): input is ObjectSimple => {
            const $io0: any = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "object" === typeof input.scale &&
                null !== input.scale &&
                $io1(input.scale, true && _exceptionable) &&
                "object" === typeof input.position &&
                null !== input.position &&
                $io1(input.position, true && _exceptionable) &&
                "object" === typeof input.rotate &&
                null !== input.rotate &&
                $io1(input.rotate, true && _exceptionable) &&
                "object" === typeof input.pivot &&
                null !== input.pivot &&
                $io1(input.pivot, true && _exceptionable) &&
                (4 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            ["scale", "position", "rotate", "pivot"].some(
                                (prop: any) => key === prop,
                            )
                        )
                            return true;
                        const value: any = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io1: any = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "number" === typeof input.x &&
                Number.isFinite(input.x) &&
                "number" === typeof input.y &&
                Number.isFinite(input.y) &&
                "number" === typeof input.z &&
                Number.isFinite(input.z) &&
                (3 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (["x", "y", "z"].some((prop: any) => key === prop))
                            return true;
                        const value: any = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            return (
                "object" === typeof input && null !== input && $io0(input, true)
            );
        };
        const $guard: any = (typia.createAssertEquals as any).guard;
        const $join: any = (typia.createAssertEquals as any).join;
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectSimple => {
                const $ao0: any = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("object" === typeof input.scale &&
                        null !== input.scale) ||
                        $guard(_exceptionable, {
                            path: _path + ".scale",
                            expected: "ObjectSimple.IPoint3D",
                            value: input.scale,
                        })) &&
                    $ao1(
                        input.scale,
                        _path + ".scale",
                        true && _exceptionable,
                    ) &&
                    (("object" === typeof input.position &&
                        null !== input.position) ||
                        $guard(_exceptionable, {
                            path: _path + ".position",
                            expected: "ObjectSimple.IPoint3D",
                            value: input.position,
                        })) &&
                    $ao1(
                        input.position,
                        _path + ".position",
                        true && _exceptionable,
                    ) &&
                    (("object" === typeof input.rotate &&
                        null !== input.rotate) ||
                        $guard(_exceptionable, {
                            path: _path + ".rotate",
                            expected: "ObjectSimple.IPoint3D",
                            value: input.rotate,
                        })) &&
                    $ao1(
                        input.rotate,
                        _path + ".rotate",
                        true && _exceptionable,
                    ) &&
                    (("object" === typeof input.pivot &&
                        null !== input.pivot) ||
                        $guard(_exceptionable, {
                            path: _path + ".pivot",
                            expected: "ObjectSimple.IPoint3D",
                            value: input.pivot,
                        })) &&
                    $ao1(
                        input.pivot,
                        _path + ".pivot",
                        true && _exceptionable,
                    ) &&
                    (4 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (
                                ["scale", "position", "rotate", "pivot"].some(
                                    (prop: any) => key === prop,
                                )
                            )
                                return true;
                            const value: any = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao1: any = (
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
                        })) &&
                    (("number" === typeof input.z &&
                        Number.isFinite(input.z)) ||
                        $guard(_exceptionable, {
                            path: _path + ".z",
                            expected: "number",
                            value: input.z,
                        })) &&
                    (3 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (
                                ["x", "y", "z"].some(
                                    (prop: any) => key === prop,
                                )
                            )
                                return true;
                            const value: any = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                return (
                    (("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectSimple.IBox3D",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
        return input;
    },
);
