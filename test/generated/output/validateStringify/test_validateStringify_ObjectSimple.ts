import typia from "../../../../src";
import { ObjectSimple } from "../../../structures/ObjectSimple";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectSimple = _test_validateStringify(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) =>
        ((input: ObjectSimple.IBox3D): typia.IValidation<string> => {
            const validate = (
                input: any,
            ): typia.IValidation<ObjectSimple.IBox3D> => {
                const errors = [] as any[];
                const $report = (typia.validateStringify as any).report(errors);
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectSimple.IBox3D => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((("object" === typeof input.scale &&
                                null !== input.scale) ||
                                $report(_exceptionable, {
                                    path: _path + ".scale",
                                    expected: "Resolve<ObjectSimple.IPoint3D>",
                                    value: input.scale,
                                })) &&
                                $vo1(
                                    input.scale,
                                    _path + ".scale",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".scale",
                                    expected: "Resolve<ObjectSimple.IPoint3D>",
                                    value: input.scale,
                                }),
                            ((("object" === typeof input.position &&
                                null !== input.position) ||
                                $report(_exceptionable, {
                                    path: _path + ".position",
                                    expected: "Resolve<ObjectSimple.IPoint3D>",
                                    value: input.position,
                                })) &&
                                $vo1(
                                    input.position,
                                    _path + ".position",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".position",
                                    expected: "Resolve<ObjectSimple.IPoint3D>",
                                    value: input.position,
                                }),
                            ((("object" === typeof input.rotate &&
                                null !== input.rotate) ||
                                $report(_exceptionable, {
                                    path: _path + ".rotate",
                                    expected: "Resolve<ObjectSimple.IPoint3D>",
                                    value: input.rotate,
                                })) &&
                                $vo1(
                                    input.rotate,
                                    _path + ".rotate",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".rotate",
                                    expected: "Resolve<ObjectSimple.IPoint3D>",
                                    value: input.rotate,
                                }),
                            ((("object" === typeof input.pivot &&
                                null !== input.pivot) ||
                                $report(_exceptionable, {
                                    path: _path + ".pivot",
                                    expected: "Resolve<ObjectSimple.IPoint3D>",
                                    value: input.pivot,
                                })) &&
                                $vo1(
                                    input.pivot,
                                    _path + ".pivot",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".pivot",
                                    expected: "Resolve<ObjectSimple.IPoint3D>",
                                    value: input.pivot,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo1 = (
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
                            ("number" === typeof input.z &&
                                Number.isFinite(input.z)) ||
                                $report(_exceptionable, {
                                    path: _path + ".z",
                                    expected: "number",
                                    value: input.z,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "Resolve<ObjectSimple.IBox3D>",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Resolve<ObjectSimple.IBox3D>",
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
            };
            const stringify = (input: ObjectSimple.IBox3D): string => {
                const $number = (typia.validateStringify as any).number;
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
                    )}}`},"rotate":${`{"x":${$number(
                        input.rotate.x,
                    )},"y":${$number(input.rotate.y)},"z":${$number(
                        input.rotate.z,
                    )}}`},"pivot":${`{"x":${$number(
                        input.pivot.x,
                    )},"y":${$number(input.pivot.y)},"z":${$number(
                        input.pivot.z,
                    )}}`}}`;
                return $so0(input);
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        })(input),
    ObjectSimple.SPOILERS,
);
