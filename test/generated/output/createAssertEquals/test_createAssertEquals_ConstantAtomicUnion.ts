import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_createAssertEquals_ConstantAtomicUnion = _test_assertEquals(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input: any): ConstantAtomicUnion => {
        const __is: any = (
            input: any,
            _exceptionable: boolean = true,
        ): input is ConstantAtomicUnion => {
            const $io0: any = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "key" === input.key &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (["key"].some((prop: any) => key === prop))
                            return true;
                        const value: any = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any, _index1: number) =>
                        false === elem ||
                        1 === elem ||
                        2 === elem ||
                        "three" === elem ||
                        "four" === elem ||
                        ("object" === typeof elem &&
                            null !== elem &&
                            $io0(elem, true)),
                )
            );
        };
        const $guard: any = (typia.createAssertEquals as any).guard;
        const $join: any = (typia.createAssertEquals as any).join;
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ConstantAtomicUnion => {
                const $ao0: any = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("key" === input.key ||
                        $guard(_exceptionable, {
                            path: _path + ".key",
                            expected: '"key"',
                            value: input.key,
                        })) &&
                    (1 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (["key"].some((prop: any) => key === prop))
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
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ConstantAtomicUnion",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            false === elem ||
                            1 === elem ||
                            2 === elem ||
                            "three" === elem ||
                            "four" === elem ||
                            ((("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        '("four" | "three" | 1 | 2 | __type | false)',
                                    value: elem,
                                })) &&
                                $ao0(elem, _path + "[" + _index1 + "]", true)),
                    )
                );
            })(input, "$input", true);
        return input;
    },
);
