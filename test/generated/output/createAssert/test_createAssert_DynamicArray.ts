import typia from "../../../../src";
import { DynamicArray } from "../../../structures/DynamicArray";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_DynamicArray = _test_assert(
    "DynamicArray",
    DynamicArray.generate,
    (input: any): DynamicArray => {
        const $guard = (typia.createAssert as any).guard;
        const $join = (typia.createAssert as any).join;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is DynamicArray => {
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
                            (Array.isArray(value) ||
                                $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "Array<string>",
                                    value: value,
                                })) &&
                            value.every(
                                (elem: any, _index1: number) =>
                                    "string" === typeof elem ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            $join(key) +
                                            "[" +
                                            _index1 +
                                            "]",
                                        expected: "string",
                                        value: elem,
                                    }),
                            )
                        );
                    return true;
                });
            return (
                (("object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Resolve<DynamicArray>",
                        value: input,
                    })) &&
                $ao0(input, _path + "", true)
            );
        })(input, "$input", true);
        return input;
    },
    DynamicArray.SPOILERS,
);
