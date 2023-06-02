import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_createRandom_DynamicTemplate = _test_random(
    "DynamicTemplate",
    (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Primitive<DynamicTemplate> => {
        const $generator: any = (typia.createRandom as any).generator;
        const $ro0: any = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => {
            const output: any = {} as any;
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
                        `value_${
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
            (generator?.array ?? $generator.array)(
                () =>
                    (output[
                        `between_${
                            (
                                generator?.customs ?? $generator.customs
                            )?.string?.([]) ??
                            (generator?.string ?? $generator.string)()
                        }_and_${
                            (
                                generator?.customs ?? $generator.customs
                            )?.number?.([]) ??
                            (generator?.number ?? $generator.number)(0, 100)
                        }`
                    ] = (generator?.boolean ?? $generator.boolean)()),
                (generator?.integer ?? $generator.integer)(0, 3),
            );
            return output;
        };
        return $ro0();
    },
    (input: any): typia.Primitive<DynamicTemplate> => {
        const __is: any = (
            input: any,
        ): input is typia.Primitive<DynamicTemplate> => {
            const $join: any = (typia.createAssert as any).join;
            const $io0: any = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value: any = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/^(prefix_(.*))/).test(key))
                        return "string" === typeof value;
                    if (RegExp(/((.*)_postfix)$/).test(key))
                        return "string" === typeof value;
                    if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
                        return (
                            "number" === typeof value && Number.isFinite(value)
                        );
                    if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key))
                        return "boolean" === typeof value;
                    return true;
                });
            return (
                "object" === typeof input &&
                null !== input &&
                false === Array.isArray(input) &&
                $io0(input)
            );
        };
        const $guard: any = (typia.createAssert as any).guard;
        const $join: any = (typia.createAssert as any).join;
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<DynamicTemplate> => {
                const $ao0: any = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    false === _exceptionable ||
                    Object.keys(input).every((key: any) => {
                        const value: any = input[key];
                        if (undefined === value) return true;
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
                        if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
                            return (
                                ("number" === typeof value &&
                                    Number.isFinite(value)) ||
                                $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "number",
                                    value: value,
                                })
                            );
                        if (
                            RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key)
                        )
                            return (
                                "boolean" === typeof value ||
                                $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "boolean",
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
                            expected: "DynamicTemplate",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
        return input;
    },
);
