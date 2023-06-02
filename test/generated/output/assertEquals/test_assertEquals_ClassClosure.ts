import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ClassClosure } from "../../../structures/ClassClosure";

export const test_assertEquals_ClassClosure = _test_assertEquals(
    "ClassClosure",
    ClassClosure.generate,
    (input) =>
        ((input: any): ClassClosure.Something => {
            const __is: any = (
                input: any,
                _exceptionable: boolean = true,
            ): input is ClassClosure.Something => {
                const $io0: any = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "string" === typeof input.id &&
                    "something" === input.type &&
                    "function" === typeof input.closure &&
                    (3 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (
                                ["id", "type", "closure"].some(
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
                ): input is ClassClosure.Something => {
                    const $ao0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.id ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "string",
                                value: input.id,
                            })) &&
                        ("something" === input.type ||
                            $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: '"something"',
                                value: input.type,
                            })) &&
                        ("function" === typeof input.closure ||
                            $guard(_exceptionable, {
                                path: _path + ".closure",
                                expected: "unknown",
                                value: input.closure,
                            })) &&
                        (3 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input).every((key: any) => {
                                if (
                                    ["id", "type", "closure"].some(
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
                        (("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ClassClosure.Something",
                                value: input,
                            })) &&
                        $ao0(input, _path + "", true)
                    );
                })(input, "$input", true);
            return input;
        })(input),
);
