import typia from "../../../../src";
import { _test_json_assertParse } from "../../../internal/_test_json_assertParse";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_json_assertParse_ClassGetter = _test_json_assertParse(
    "ClassGetter",
)<ClassGetter>(ClassGetter)((input) =>
    ((input: string): typia.Primitive<ClassGetter> => {
        const assert = (input: any): ClassGetter => {
            const __is = (input: any): input is ClassGetter => {
                const $io0 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.name &&
                    (null === input.dead || "boolean" === typeof input.dead);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ClassGetter => {
                    const $guard = (typia.json.assertParse as any).guard;
                    const $ao0 = (
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
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            })) &&
                        (null === input.dead ||
                            "boolean" === typeof input.dead ||
                            $guard(_exceptionable, {
                                path: _path + ".dead",
                                expected: "(boolean | null)",
                                value: input.dead,
                            }));
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ClassGetter.Person",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ClassGetter.Person",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        input = JSON.parse(input);
        return assert(input) as any;
    })(input),
);
