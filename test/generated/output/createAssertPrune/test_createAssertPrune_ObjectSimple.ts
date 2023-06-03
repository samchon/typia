import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_createAssertPrune_ObjectSimple = _test_assertPrune(
    "ObjectSimple",
    ObjectSimple.generate,
    (input: any): ObjectSimple => {
        const assert = (input: any): ObjectSimple => {
            const __is = (input: any): input is ObjectSimple => {
                const $io0 = (input: any): boolean =>
                    "object" === typeof input.scale &&
                    null !== input.scale &&
                    "number" === typeof (input.scale as any).x &&
                    Number.isFinite((input.scale as any).x) &&
                    "number" === typeof (input.scale as any).y &&
                    Number.isFinite((input.scale as any).y) &&
                    "number" === typeof (input.scale as any).z &&
                    Number.isFinite((input.scale as any).z) &&
                    "object" === typeof input.position &&
                    null !== input.position &&
                    "number" === typeof (input.position as any).x &&
                    Number.isFinite((input.position as any).x) &&
                    "number" === typeof (input.position as any).y &&
                    Number.isFinite((input.position as any).y) &&
                    "number" === typeof (input.position as any).z &&
                    Number.isFinite((input.position as any).z) &&
                    "object" === typeof input.rotate &&
                    null !== input.rotate &&
                    "number" === typeof (input.rotate as any).x &&
                    Number.isFinite((input.rotate as any).x) &&
                    "number" === typeof (input.rotate as any).y &&
                    Number.isFinite((input.rotate as any).y) &&
                    "number" === typeof (input.rotate as any).z &&
                    Number.isFinite((input.rotate as any).z) &&
                    "object" === typeof input.pivot &&
                    null !== input.pivot &&
                    "number" === typeof (input.pivot as any).x &&
                    Number.isFinite((input.pivot as any).x) &&
                    "number" === typeof (input.pivot as any).y &&
                    Number.isFinite((input.pivot as any).y) &&
                    "number" === typeof (input.pivot as any).z &&
                    Number.isFinite((input.pivot as any).z);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectSimple => {
                    const $guard = (typia.createAssertPrune as any).guard;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (((("object" === typeof input.scale &&
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
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".scale",
                                expected: "ObjectSimple.IPoint3D",
                                value: input.scale,
                            })) &&
                        (((("object" === typeof input.position &&
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
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".position",
                                expected: "ObjectSimple.IPoint3D",
                                value: input.position,
                            })) &&
                        (((("object" === typeof input.rotate &&
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
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".rotate",
                                expected: "ObjectSimple.IPoint3D",
                                value: input.rotate,
                            })) &&
                        (((("object" === typeof input.pivot &&
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
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".pivot",
                                expected: "ObjectSimple.IPoint3D",
                                value: input.pivot,
                            }));
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
                        ((("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ObjectSimple.IBox3D",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectSimple.IBox3D",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        const prune = (input: ObjectSimple): void => {
            const $io1 = (input: any): boolean =>
                "number" === typeof input.x &&
                "number" === typeof input.y &&
                "number" === typeof input.z;
            const $po0 = (input: any): any => {
                if ("object" === typeof input.scale && null !== input.scale)
                    $po1(input.scale);
                if (
                    "object" === typeof input.position &&
                    null !== input.position
                )
                    $po1(input.position);
                if ("object" === typeof input.rotate && null !== input.rotate)
                    $po1(input.rotate);
                if ("object" === typeof input.pivot && null !== input.pivot)
                    $po1(input.pivot);
                for (const key of Object.keys(input)) {
                    if (
                        "scale" === key ||
                        "position" === key ||
                        "rotate" === key ||
                        "pivot" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            const $po1 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("x" === key || "y" === key || "z" === key) continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        assert(input);
        prune(input);
        return input;
    },
    ObjectSimple.SPOILERS,
);
