import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_random_ObjectLiteralProperty = _test_random(
    "ObjectLiteralProperty",
    (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Primitive<ObjectLiteralProperty> => {
        const $generator = (typia.createRandom as any).generator;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            "something-interesting-do-you-want?":
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            "or-something-crazy-do-you-want?":
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
        });
        return $ro0();
    },
    (input: any): typia.Primitive<ObjectLiteralProperty> => {
        const __is = (
            input: any,
        ): input is typia.Primitive<ObjectLiteralProperty> => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" ===
                    typeof (input as any)[
                        "something-interesting-do-you-want?"
                    ] &&
                "string" ===
                    typeof (input as any)["or-something-crazy-do-you-want?"]
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<ObjectLiteralProperty> => {
                const $guard = (typia.createAssert as any).guard;
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
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectLiteralProperty.ISomething",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ObjectLiteralProperty.ISomething",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
);
