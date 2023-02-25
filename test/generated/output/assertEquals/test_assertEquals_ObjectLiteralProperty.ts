import typia from "../../../../src";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ObjectLiteralProperty = _test_assertEquals(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) =>
        ((input: any): ObjectLiteralProperty.ISomething => {
            const $guard = (typia.assertEquals as any).guard;
            const $join = (typia.assertEquals as any).join;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectLiteralProperty.ISomething => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" ===
                        typeof input["something-interesting-do-you-want?"] ||
                        $guard(_exceptionable, {
                            path:
                                _path +
                                '["something-interesting-do-you-want?"]',
                            expected: "string",
                            value: input["something-interesting-do-you-want?"],
                        })) &&
                    ("string" ===
                        typeof input["or-something-crazy-do-you-want?"] ||
                        $guard(_exceptionable, {
                            path: _path + '["or-something-crazy-do-you-want?"]',
                            expected: "string",
                            value: input["or-something-crazy-do-you-want?"],
                        })) &&
                    (2 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key) => {
                            if (
                                [
                                    "something-interesting-do-you-want?",
                                    "or-something-crazy-do-you-want?",
                                ].some((prop) => key === prop)
                            )
                                return true;
                            const value = input[key];
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
                            expected:
                                "Resolve<ObjectLiteralProperty.ISomething>",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
            return input;
        })(input),
);
