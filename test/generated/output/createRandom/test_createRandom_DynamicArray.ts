import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_random_DynamicArray = _test_random(
    "DynamicArray",
)<DynamicArray>(DynamicArray)({
    random: (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<DynamicArray> => {
        const $generator = (typia.createRandom as any).generator;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            value: $ro1(_recursive, _recursive ? 1 + _depth : _depth),
        });
        const $ro1 = (_recursive: boolean = false, _depth: number = 0): any => {
            const output = {} as any;
            (generator?.array ?? $generator.array)(
                () =>
                    (output[
                        (generator?.customs ?? $generator.customs)?.string?.(
                            [],
                        ) ?? (generator?.string ?? $generator.string)()
                    ] = (generator?.array ?? $generator.array)(
                        () =>
                            (
                                generator?.customs ?? $generator.customs
                            )?.string?.([]) ??
                            (generator?.string ?? $generator.string)(),
                    )),
                (generator?.integer ?? $generator.integer)(0, 3),
            );
            return output;
        };
        return $ro0();
    },
    assert: (input: any): DynamicArray => {
        const __is = (input: any): input is DynamicArray => {
            const $join = (typia.createAssert as any).join;
            const $io0 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                false === Array.isArray(input.value) &&
                $io1(input.value);
            const $io1 = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            Array.isArray(value) &&
                            value.every((elem: any) => "string" === typeof elem)
                        );
                    return true;
                });
            return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is DynamicArray => {
                const $guard = (typia.createAssert as any).guard;
                const $join = (typia.createAssert as any).join;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ((("object" === typeof input.value &&
                        null !== input.value &&
                        false === Array.isArray(input.value)) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type",
                            value: input.value,
                        })) &&
                        $ao1(
                            input.value,
                            _path + ".value",
                            true && _exceptionable,
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "__type",
                        value: input.value,
                    });
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    false === _exceptionable ||
                    Object.keys(input).every((key: any) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return (
                                ((Array.isArray(value) ||
                                    $guard(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "Array<string>",
                                        value: value,
                                    })) &&
                                    value.every(
                                        (elem: any, _index1: number) =>
                                            "string" === typeof elem ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    $join(key) +
                                                    "[" +
                                                    _index1 +
                                                    "]",
                                                expected: "string",
                                                value: elem,
                                            }),
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "Array<string>",
                                    value: value,
                                })
                            );
                        return true;
                    });
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "DynamicArray",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "DynamicArray",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
