import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_validateEquals_ObjectOptional = _test_validateEquals(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) =>
        ((input: any): typia.IValidation<ObjectOptional> => {
            const __is: any = (
                input: any,
                _exceptionable: boolean = true,
            ): input is ObjectOptional => {
                const $io0: any = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (undefined === input.id || "string" === typeof input.id) &&
                    (undefined === input.name ||
                        "string" === typeof input.name) &&
                    (undefined === input.email ||
                        "string" === typeof input.email) &&
                    (undefined === input.sequence ||
                        ("number" === typeof input.sequence &&
                            Number.isFinite(input.sequence))) &&
                    (0 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (
                                ["id", "name", "email", "sequence"].some(
                                    (prop: any) => key === prop,
                                )
                            )
                                return true;
                            const value: any = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                return (
                    "object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input) &&
                    $io0(input, true)
                );
            };
            const errors: any = [] as any[];
            const $report: any = (typia.validateEquals as any).report(errors);
            const $join: any = (typia.validateEquals as any).join;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectOptional => {
                    const $vo0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            undefined === input.id ||
                                "string" === typeof input.id ||
                                $report(_exceptionable, {
                                    path: _path + ".id",
                                    expected: "(string | undefined)",
                                    value: input.id,
                                }),
                            undefined === input.name ||
                                "string" === typeof input.name ||
                                $report(_exceptionable, {
                                    path: _path + ".name",
                                    expected: "(string | undefined)",
                                    value: input.name,
                                }),
                            undefined === input.email ||
                                "string" === typeof input.email ||
                                $report(_exceptionable, {
                                    path: _path + ".email",
                                    expected: "(string | undefined)",
                                    value: input.email,
                                }),
                            undefined === input.sequence ||
                                ("number" === typeof input.sequence &&
                                    Number.isFinite(input.sequence)) ||
                                $report(_exceptionable, {
                                    path: _path + ".sequence",
                                    expected: "(number | undefined)",
                                    value: input.sequence,
                                }),
                            0 === Object.keys(input).length ||
                                false === _exceptionable ||
                                Object.keys(input)
                                    .map((key: any) => {
                                        if (
                                            [
                                                "id",
                                                "name",
                                                "email",
                                                "sequence",
                                            ].some((prop: any) => key === prop)
                                        )
                                            return true;
                                        const value: any = input[key];
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
                        ((("object" === typeof input &&
                            null !== input &&
                            false === Array.isArray(input)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ObjectOptional",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "ObjectOptional",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            const success: any = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        })(input),
);
