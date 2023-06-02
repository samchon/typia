import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_assertEquals_ObjectOptional = _test_assertEquals(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) =>
        ((input: any): ObjectOptional => {
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
            const $guard: any = (typia.assertEquals as any).guard;
            const $join: any = (typia.assertEquals as any).join;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectOptional => {
                    const $ao0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (undefined === input.id ||
                            "string" === typeof input.id ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "(string | undefined)",
                                value: input.id,
                            })) &&
                        (undefined === input.name ||
                            "string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "(string | undefined)",
                                value: input.name,
                            })) &&
                        (undefined === input.email ||
                            "string" === typeof input.email ||
                            $guard(_exceptionable, {
                                path: _path + ".email",
                                expected: "(string | undefined)",
                                value: input.email,
                            })) &&
                        (undefined === input.sequence ||
                            ("number" === typeof input.sequence &&
                                Number.isFinite(input.sequence)) ||
                            $guard(_exceptionable, {
                                path: _path + ".sequence",
                                expected: "(number | undefined)",
                                value: input.sequence,
                            })) &&
                        (0 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input).every((key: any) => {
                                if (
                                    ["id", "name", "email", "sequence"].some(
                                        (prop: any) => key === prop,
                                    )
                                )
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
                        (("object" === typeof input &&
                            null !== input &&
                            false === Array.isArray(input)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ObjectOptional",
                                value: input,
                            })) &&
                        $ao0(input, _path + "", true)
                    );
                })(input, "$input", true);
            return input;
        })(input),
);
