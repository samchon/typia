import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { FunctionalPropertyUnion } from "../../../structures/FunctionalPropertyUnion";

export const test_createValidateEquals_FunctionalPropertyUnion =
    _test_validateEquals(
        "FunctionalPropertyUnion",
        FunctionalPropertyUnion.generate,
        (input: any): typia.IValidation<FunctionalPropertyUnion> => {
            const __is = (
                input: any,
                _exceptionable: boolean = true,
            ): input is FunctionalPropertyUnion => {
                const $io0 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "string" === typeof input.name &&
                    (null === input.closure ||
                        undefined === input.closure ||
                        "function" === typeof input.closure ||
                        "string" === typeof input.closure ||
                        ("number" === typeof input.closure &&
                            Number.isFinite(input.closure))) &&
                    (1 === Object.keys(input).length ||
                        Object.keys(input).every((key) => {
                            if (
                                ["name", "closure"].some((prop) => key === prop)
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem, true),
                    )
                );
            };
            const errors = [] as any[];
            const $report = (typia.createValidateEquals as any).report(errors);
            const $join = (typia.createValidateEquals as any).join;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is FunctionalPropertyUnion => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            "string" === typeof input.name ||
                                $report(_exceptionable, {
                                    path: _path + ".name",
                                    expected: "string",
                                    value: input.name,
                                }),
                            null === input.closure ||
                                undefined === input.closure ||
                                "function" === typeof input.closure ||
                                "string" === typeof input.closure ||
                                ("number" === typeof input.closure &&
                                    Number.isFinite(input.closure)) ||
                                $report(_exceptionable, {
                                    path: _path + ".closure",
                                    expected:
                                        "(null | number | string | undefined)",
                                    value: input.closure,
                                }),
                            1 === Object.keys(input).length ||
                                false === _exceptionable ||
                                Object.keys(input)
                                    .map((key) => {
                                        if (
                                            ["name", "closure"].some(
                                                (prop) => key === prop,
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
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    "Array<FunctionalPropertyUnion.IUnion>",
                                value: input,
                            })) &&
                            input
                                .map(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "FunctionalPropertyUnion.IUnion",
                                                value: elem,
                                            })) &&
                                            $vo0(
                                                elem,
                                                _path + "[" + _index1 + "]",
                                                true,
                                            )) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "FunctionalPropertyUnion.IUnion",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Array<FunctionalPropertyUnion.IUnion>",
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
        },
    );
