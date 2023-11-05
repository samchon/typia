import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_createAssert_ObjectDynamic = _test_assert(
    "ObjectDynamic",
)<ObjectDynamic>(ObjectDynamic)((input: any): ObjectDynamic => {
    const __is = (input: any): input is ObjectDynamic => {
        const $io0 = (input: any): boolean =>
            Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                if (true)
                    return (
                        "string" === typeof value ||
                        ("number" === typeof value && Number.isFinite(value)) ||
                        "boolean" === typeof value
                    );
                return true;
            });
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
        ): input is ObjectDynamic => {
            const $guard = (typia.createAssert as any).guard;
            const $join = (typia.createAssert as any).join;
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                false === _exceptionable ||
                Object.keys(input).every((key: any) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (true)
                        return (
                            "string" === typeof value ||
                            ("number" === typeof value &&
                                Number.isFinite(value)) ||
                            "boolean" === typeof value ||
                            $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "(boolean | number | string)",
                                value: value,
                            })
                        );
                    return true;
                });
            return (
                ((("object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ObjectDynamic",
                        value: input,
                    })) &&
                    $ao0(input, _path + "", true)) ||
                $guard(true, {
                    path: _path + "",
                    expected: "ObjectDynamic",
                    value: input,
                })
            );
        })(input, "$input", true);
    return input;
});
