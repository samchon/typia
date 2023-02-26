import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_createValidate_DynamicUndefined = _test_validate(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input: any): typia.IValidation<DynamicUndefined> => {
        const errors = [] as any[];
        const $report = (typia.createValidate as any).report(errors);
        const $join = (typia.createValidate as any).join;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is DynamicUndefined => {
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
                                        (null !== value ||
                                            $report(_exceptionable, {
                                                path: _path + $join(key),
                                                expected: "undefined",
                                                value: value,
                                            })) &&
                                        (undefined === value ||
                                            $report(_exceptionable, {
                                                path: _path + $join(key),
                                                expected: "undefined",
                                                value: value,
                                            }))
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
                        expected: "Resolve<DynamicUndefined>",
                        value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                $report(true, {
                    path: _path + "",
                    expected: "Resolve<DynamicUndefined>",
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
    DynamicUndefined.SPOILERS,
);
