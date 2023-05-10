import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_createRandom_DynamicUnion = _test_random(
    "DynamicUnion",
    (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Primitive<DynamicUnion> => {
        const $generator = (typia.createRandom as any).generator;
        const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => {
            const output = {} as any;
            (generator?.array ?? $generator.array)(
                () =>
                    (output[
                        (generator?.customs ?? $generator.customs)?.number?.(
                            [],
                        ) ?? (generator?.number ?? $generator.number)(0, 100)
                    ] =
                        (generator?.customs ?? $generator.customs)?.string?.(
                            [],
                        ) ?? (generator?.string ?? $generator.string)()),
                (generator?.integer ?? $generator.integer)(0, 3),
            );
            (generator?.array ?? $generator.array)(
                () =>
                    (output[
                        `prefix_${
                            (
                                generator?.customs ?? $generator.customs
                            )?.string?.([]) ??
                            (generator?.string ?? $generator.string)()
                        }`
                    ] =
                        (generator?.customs ?? $generator.customs)?.string?.(
                            [],
                        ) ?? (generator?.string ?? $generator.string)()),
                (generator?.integer ?? $generator.integer)(0, 3),
            );
            (generator?.array ?? $generator.array)(
                () =>
                    (output[
                        `${
                            (
                                generator?.customs ?? $generator.customs
                            )?.string?.([]) ??
                            (generator?.string ?? $generator.string)()
                        }_postfix`
                    ] =
                        (generator?.customs ?? $generator.customs)?.string?.(
                            [],
                        ) ?? (generator?.string ?? $generator.string)()),
                (generator?.integer ?? $generator.integer)(0, 3),
            );
            (generator?.array ?? $generator.array)(
                () =>
                    (output[
                        `value_between_${
                            (
                                generator?.customs ?? $generator.customs
                            )?.number?.([]) ??
                            (generator?.number ?? $generator.number)(0, 100)
                        }_and_${
                            (
                                generator?.customs ?? $generator.customs
                            )?.number?.([]) ??
                            (generator?.number ?? $generator.number)(0, 100)
                        }`
                    ] =
                        (generator?.customs ?? $generator.customs)?.number?.(
                            [],
                        ) ?? (generator?.number ?? $generator.number)(0, 100)),
                (generator?.integer ?? $generator.integer)(0, 3),
            );
            return output;
        };
        return $ro0();
    },
    (input: any): typia.Primitive<DynamicUnion> => {
        const $guard = (typia.createAssert as any).guard;
        const $join = (typia.createAssert as any).join;
        const __is = (input: any): input is typia.Primitive<DynamicUnion> => {
            const $io0 = (input: any): boolean =>
                Object.keys(input).every((key) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/^-?\d+\.?\d*$/).test(key))
                        return "string" === typeof value;
                    if (RegExp(/^(prefix_(.*))/).test(key))
                        return "string" === typeof value;
                    if (RegExp(/((.*)_postfix)$/).test(key))
                        return "string" === typeof value;
                    if (
                        RegExp(
                            /^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/,
                        ).test(key)
                    )
                        return (
                            "number" === typeof value && Number.isFinite(value)
                        );
                    return true;
                });
            return (
                "object" === typeof input &&
                null !== input &&
                false === Array.isArray(input) &&
                $io0(input)
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<DynamicUnion> => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/^-?\d+\.?\d*$/).test(key))
                            return (
                                "string" === typeof value ||
                                $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "string",
                                    value: value,
                                })
                            );
                        if (RegExp(/^(prefix_(.*))/).test(key))
                            return (
                                "string" === typeof value ||
                                $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "string",
                                    value: value,
                                })
                            );
                        if (RegExp(/((.*)_postfix)$/).test(key))
                            return (
                                "string" === typeof value ||
                                $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "string",
                                    value: value,
                                })
                            );
                        if (
                            RegExp(
                                /^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/,
                            ).test(key)
                        )
                            return (
                                ("number" === typeof value &&
                                    Number.isFinite(value)) ||
                                $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "number",
                                    value: value,
                                })
                            );
                        return true;
                    });
                return (
                    (("object" === typeof input &&
                        null !== input &&
                        false === Array.isArray(input)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "DynamicUnion",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
        return input;
    },
);
