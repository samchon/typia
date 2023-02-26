import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_createValidate_DynamicArray = _test_validate(
    "DynamicArray",
    DynamicArray.generate,
    (input: any): typia.IValidation<DynamicArray> => {
        const errors = [] as any[];
        const $report = (typia.createValidate as any).report(errors);
        const $join = (typia.createValidate as any).join;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is DynamicArray => {
            const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    false === _exceptionable ||
                        Object.keys(input)
                            .map((key) => {
                                const value = input[key];
                                if (undefined === value) return true;
                                if (RegExp(/(.*)/).test(key))
                                    return (
                                        ((Array.isArray(value) ||
                                            $report(_exceptionable, {
                                                path: _path + $join(key),
                                                expected: "Array<string>",
                                                value: value,
                                            })) &&
                                            value
                                                .map(
                                                    (
                                                        elem: any,
                                                        _index1: number,
                                                    ) =>
                                                        "string" ===
                                                            typeof elem ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    $join(key) +
                                                                    "[" +
                                                                    _index1 +
                                                                    "]",
                                                                expected:
                                                                    "string",
                                                                value: elem,
                                                            },
                                                        ),
                                                )
                                                .every(
                                                    (flag: boolean) => flag,
                                                )) ||
                                        $report(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "Array<string>",
                                            value: value,
                                        })
                                    );
                                return true;
                            })
                            .every((flag: boolean) => flag),
                ].every((flag: boolean) => flag);
            return (
                ((("object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Resolve<DynamicArray>",
                        value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                $report(true, {
                    path: _path + "",
                    expected: "Resolve<DynamicArray>",
                    value: input,
                })
            );
        })(input, "$input", true);
        const success = 0 === errors.length;
        return {
            success,
            errors,
            data: success ? input : undefined,
        } as any;
    },
    DynamicArray.SPOILERS,
);
