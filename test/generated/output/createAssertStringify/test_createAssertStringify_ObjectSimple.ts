import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_createAssertStringify_ObjectSimple = _test_assertStringify(
    "ObjectSimple",
    ObjectSimple.generate,
    (input: any): string => {
        const assert = (input: any): ObjectSimple.IBox3D => {
            const $guard = (typia.createAssertStringify as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectSimple.IBox3D => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("object" === typeof input.scale &&
                        null !== input.scale) ||
                        $guard(_exceptionable, {
                            path: _path + ".scale",
                            expected: "Resolve<ObjectSimple.IPoint3D>",
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
                            expected: "Resolve<ObjectSimple.IPoint3D>",
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
                            expected: "Resolve<ObjectSimple.IPoint3D>",
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
                            expected: "Resolve<ObjectSimple.IPoint3D>",
                            value: input.pivot,
                        })) &&
                    $ao1(input.pivot, _path + ".pivot", true && _exceptionable);
                const $ao1 = (
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
                        }));
                return (
                    (("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Resolve<ObjectSimple.IBox3D>",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
            return input;
        };
        const stringify = (input: ObjectSimple.IBox3D): string => {
            const $number = (typia.createAssertStringify as any).number;
            const $io1 = (input: any): boolean =>
                "number" === typeof input.x &&
                "number" === typeof input.y &&
                "number" === typeof input.z;
            const $so0 = (input: any): any =>
                `{"scale":${`{"x":${$number(input.scale.x)},"y":${$number(
                    input.scale.y,
                )},"z":${$number(
                    input.scale.z,
                )}}`},"position":${`{"x":${$number(
                    input.position.x,
                )},"y":${$number(input.position.y)},"z":${$number(
                    input.position.z,
                )}}`},"rotate":${`{"x":${$number(input.rotate.x)},"y":${$number(
                    input.rotate.y,
                )},"z":${$number(input.rotate.z)}}`},"pivot":${`{"x":${$number(
                    input.pivot.x,
                )},"y":${$number(input.pivot.y)},"z":${$number(
                    input.pivot.z,
                )}}`}}`;
            return $so0(input);
        };
        return stringify(assert(input));
    },
    ObjectSimple.SPOILERS,
);
