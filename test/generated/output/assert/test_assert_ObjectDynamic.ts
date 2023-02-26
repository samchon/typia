import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_assert_ObjectDynamic = _test_assert(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) =>
        ((input: any): ObjectDynamic => {
            const $guard = (typia.assert as any).guard;
            const $join = (typia.assert as any).join;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectDynamic => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
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
                    (("object" === typeof input &&
                        null !== input &&
                        false === Array.isArray(input)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Resolve<ObjectDynamic>",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
            return input;
        })(input),
    ObjectDynamic.SPOILERS,
);
