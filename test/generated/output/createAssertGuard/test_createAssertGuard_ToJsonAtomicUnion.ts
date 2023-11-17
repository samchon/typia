import typia from "../../../../src";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_createAssertGuard_ToJsonAtomicUnion = _test_assertGuard(
    "ToJsonAtomicUnion",
)<ToJsonAtomicUnion>(ToJsonAtomicUnion)(
    (input: any): asserts input is ToJsonAtomicUnion => {
        const __is = (input: any): input is ToJsonAtomicUnion => {
            const $io0 = (input: any): boolean =>
                "function" === typeof input.toJSON;
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ToJsonAtomicUnion => {
                const $guard = (typia.createAssertGuard as any).guard;
                const $ao0 = (
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
                    ((Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ToJsonAtomicUnion",
                            value: input,
                        })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "ToJsonAtomicUnion.IToJson",
                                        value: elem,
                                    })) &&
                                    $ao0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    )) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "ToJsonAtomicUnion.IToJson",
                                    value: elem,
                                }),
                        )) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ToJsonAtomicUnion",
                        value: input,
                    })
                );
            })(input, "$input", true);
    },
);
