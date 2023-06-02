import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_assert_ToJsonAtomicUnion = _test_assert(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    (input) =>
        ((input: any): Array<ToJsonAtomicUnion.IToJson> => {
            const __is: any = (
                input: any,
            ): input is Array<ToJsonAtomicUnion.IToJson> => {
                const $io0: any = (input: any): boolean =>
                    "function" === typeof input.toJSON;
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
                );
            };
            const $guard: any = (typia.assert as any).guard;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is Array<ToJsonAtomicUnion.IToJson> => {
                    const $ao0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        "function" === typeof input.toJSON ||
                        $guard(_exceptionable, {
                            path: _path + ".toJSON",
                            expected: "unknown",
                            value: input.toJSON,
                        });
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ToJsonAtomicUnion",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "ToJsonAtomicUnion.IToJson",
                                        value: elem,
                                    })) &&
                                $ao0(elem, _path + "[" + _index1 + "]", true),
                        )
                    );
                })(input, "$input", true);
            return input;
        })(input),
);
