import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_validateClone_ObjectSimple = _test_validateClone(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) =>
        ((
            input: any,
        ): typia.IValidation<typia.Primitive<ObjectSimple.IBox3D>> => {
            const validate = (
                input: any,
            ): typia.IValidation<ObjectSimple.IBox3D> => {
                const __is = (input: any): input is ObjectSimple.IBox3D => {
                    const $io0 = (input: any): boolean =>
                        "object" === typeof input.scale &&
                        null !== input.scale &&
                        "number" === typeof input.scale.x &&
                        Number.isFinite(input.scale.x) &&
                        "number" === typeof input.scale.y &&
                        Number.isFinite(input.scale.y) &&
                        "number" === typeof input.scale.z &&
                        Number.isFinite(input.scale.z) &&
                        "object" === typeof input.position &&
                        null !== input.position &&
                        "number" === typeof input.position.x &&
                        Number.isFinite(input.position.x) &&
                        "number" === typeof input.position.y &&
                        Number.isFinite(input.position.y) &&
                        "number" === typeof input.position.z &&
                        Number.isFinite(input.position.z) &&
                        "object" === typeof input.rotate &&
                        null !== input.rotate &&
                        "number" === typeof input.rotate.x &&
                        Number.isFinite(input.rotate.x) &&
                        "number" === typeof input.rotate.y &&
                        Number.isFinite(input.rotate.y) &&
                        "number" === typeof input.rotate.z &&
                        Number.isFinite(input.rotate.z) &&
                        "object" === typeof input.pivot &&
                        null !== input.pivot &&
                        "number" === typeof input.pivot.x &&
                        Number.isFinite(input.pivot.x) &&
                        "number" === typeof input.pivot.y &&
                        Number.isFinite(input.pivot.y) &&
                        "number" === typeof input.pivot.z &&
                        Number.isFinite(input.pivot.z);
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                const errors = [] as any[];
                const $report = (typia.validateClone as any).report(errors);
                if (false === __is(input))
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
                                        expected: "ObjectSimple.IPoint3D",
                                        value: input.scale,
                                    })) &&
                                    $vo1(
                                        input.scale,
                                        _path + ".scale",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".scale",
                                        expected: "ObjectSimple.IPoint3D",
                                        value: input.scale,
                                    }),
                                ((("object" === typeof input.position &&
                                    null !== input.position) ||
                                    $report(_exceptionable, {
                                        path: _path + ".position",
                                        expected: "ObjectSimple.IPoint3D",
                                        value: input.position,
                                    })) &&
                                    $vo1(
                                        input.position,
                                        _path + ".position",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".position",
                                        expected: "ObjectSimple.IPoint3D",
                                        value: input.position,
                                    }),
                                ((("object" === typeof input.rotate &&
                                    null !== input.rotate) ||
                                    $report(_exceptionable, {
                                        path: _path + ".rotate",
                                        expected: "ObjectSimple.IPoint3D",
                                        value: input.rotate,
                                    })) &&
                                    $vo1(
                                        input.rotate,
                                        _path + ".rotate",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".rotate",
                                        expected: "ObjectSimple.IPoint3D",
                                        value: input.rotate,
                                    }),
                                ((("object" === typeof input.pivot &&
                                    null !== input.pivot) ||
                                    $report(_exceptionable, {
                                        path: _path + ".pivot",
                                        expected: "ObjectSimple.IPoint3D",
                                        value: input.pivot,
                                    })) &&
                                    $vo1(
                                        input.pivot,
                                        _path + ".pivot",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".pivot",
                                        expected: "ObjectSimple.IPoint3D",
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
                                    expected: "ObjectSimple.IBox3D",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ObjectSimple.IBox3D",
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
            const clone = (
                input: ObjectSimple.IBox3D,
            ): typia.Primitive<ObjectSimple.IBox3D> => {
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.x &&
                    "number" === typeof input.y &&
                    "number" === typeof input.z;
                const $co0 = (input: any): any => ({
                    scale:
                        "object" === typeof input.scale && null !== input.scale
                            ? $co1(input.scale)
                            : (input.scale as any),
                    position:
                        "object" === typeof input.position &&
                        null !== input.position
                            ? $co1(input.position)
                            : (input.position as any),
                    rotate:
                        "object" === typeof input.rotate &&
                        null !== input.rotate
                            ? $co1(input.rotate)
                            : (input.rotate as any),
                    pivot:
                        "object" === typeof input.pivot && null !== input.pivot
                            ? $co1(input.pivot)
                            : (input.pivot as any),
                });
                const $co1 = (input: any): any => ({
                    x: input.x as any,
                    y: input.y as any,
                    z: input.z as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            const output = validate(input) as any;
            if (output.success) output.data = clone(input);
            return output;
        })(input),
    ObjectSimple.SPOILERS,
);
