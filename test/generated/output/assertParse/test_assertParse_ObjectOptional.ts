import typia from "../../../../src";
import { _test_assertParse } from "../../../internal/_test_assertParse";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_assertParse_ObjectOptional = _test_assertParse(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) =>
        ((input: string): typia.Primitive<ObjectOptional> => {
            const assert = (input: any): ObjectOptional => {
                const $guard = (typia.assertParse as any).guard;
                const __is = (input: any): input is ObjectOptional => {
                    const $io0 = (input: any): boolean =>
                        (undefined === input.id ||
                            "string" === typeof input.id) &&
                        (undefined === input.name ||
                            "string" === typeof input.name) &&
                        (undefined === input.email ||
                            "string" === typeof input.email) &&
                        (undefined === input.sequence ||
                            ("number" === typeof input.sequence &&
                                Number.isFinite(input.sequence)));
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        false === Array.isArray(input) &&
                        $io0(input)
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectOptional => {
                        const $ao0 = (
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
                                }));
                        return (
                            (("object" === typeof input &&
                                null !== input &&
                                false === Array.isArray(input)) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "Resolve<ObjectOptional>",
                                    value: input,
                                })) &&
                            $ao0(input, _path + "", true)
                        );
                    })(input, "$input", true);
                return input;
            };
            input = JSON.parse(input);
            return assert(input) as any;
        })(input),
    ObjectOptional.SPOILERS,
);
