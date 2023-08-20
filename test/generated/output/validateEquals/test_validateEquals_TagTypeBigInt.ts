import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { TagTypeBigInt } from "../../../structures/TagTypeBigInt";

export const test_validateEquals_TagTypeBigInt = _test_validateEquals(
    "TagTypeBigInt",
    TagTypeBigInt.generate,
    (input) =>
        ((input: any): typia.IValidation<TagTypeBigInt> => {
            const errors = [] as any[];
            const __is = (
                input: any,
                _exceptionable: boolean = true,
            ): input is TagTypeBigInt => {
                const $io0 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "bigint" === typeof input.in64 &&
                    "bigint" === typeof input.uint64 &&
                    BigInt(0) <= input.uint64 &&
                    (2 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (
                                ["in64", "uint64"].some(
                                    (prop: any) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                return (
                    "object" === typeof input &&
                    null !== input &&
                    $io0(input, true)
                );
            };
            if (false === __is(input)) {
                const $report = (typia.validateEquals as any).report(errors);
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TagTypeBigInt => {
                    const $join = (typia.validateEquals as any).join;
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            "bigint" === typeof input.in64 ||
                                $report(_exceptionable, {
                                    path: _path + ".in64",
                                    expected: "bigint",
                                    value: input.in64,
                                }),
                            ("bigint" === typeof input.uint64 &&
                                (BigInt(0) <= input.uint64 ||
                                    $report(_exceptionable, {
                                        path: _path + ".uint64",
                                        expected: "bigint (@type uint64)",
                                        value: input.uint64,
                                    }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".uint64",
                                    expected: "bigint",
                                    value: input.uint64,
                                }),
                            2 === Object.keys(input).length ||
                                false === _exceptionable ||
                                Object.keys(input)
                                    .map((key: any) => {
                                        if (
                                            ["in64", "uint64"].some(
                                                (prop: any) => key === prop,
                                            )
                                        )
                                            return true;
                                        const value = input[key];
                                        if (undefined === value) return true;
                                        return $report(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "undefined",
                                            value: value,
                                        });
                                    })
                                    .every((flag: boolean) => flag),
                        ].every((flag: boolean) => flag);
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "TagTypeBigInt",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "TagTypeBigInt",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            }
            const success = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        })(input),
);
