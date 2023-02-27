import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_assertEquals_ToJsonAtomicUnion = _test_assertEquals(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    (input) =>
        ((input: any): Array<ToJsonAtomicUnion.IToJson> => {
            const $guard = (typia.assertEquals as any).guard;
            const $join = (typia.assertEquals as any).join;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is Array<ToJsonAtomicUnion.IToJson> => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("function" === typeof input.toJSON ||
                        $guard(_exceptionable, {
                            path: _path + ".toJSON",
                            expected: "unknown",
                            value: input.toJSON,
                        })) &&
                    (1 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key) => {
                            if (["toJSON"].some((prop) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "Array<Resolve<ToJsonAtomicUnion.IToJson>>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "Resolve<ToJsonAtomicUnion.IToJson>",
                                    value: elem,
                                })) &&
                            $ao0(elem, _path + "[" + _index1 + "]", true),
                    )
                );
            })(input, "$input", true);
            return input;
        })(input),
);
