import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ClassClosure } from "../../../structures/ClassClosure";

export const test_assert_ClassClosure = _test_assert(
    "ClassClosure",
    ClassClosure.generate,
    (input) =>
        ((input: any): ClassClosure.Something => {
            const __is: any = (input: any): input is ClassClosure.Something => {
                const $io0: any = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "something" === input.type &&
                    "function" === typeof input.closure;
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const $guard: any = (typia.assert as any).guard;
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
    ClassClosure.SPOILERS,
);
