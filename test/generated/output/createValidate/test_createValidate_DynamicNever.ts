import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_createValidate_DynamicNever = _test_validate(
    "DynamicNever",
)<DynamicNever>(DynamicNever)((input: any): typia.IValidation<DynamicNever> => {
    const errors = [] as any[];
    const __is = (input: any): input is DynamicNever => {
        const $io0 = (input: any): boolean =>
            Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                if (RegExp(/(.*)/).test(key))
                    return null !== value && undefined === value;
                return true;
            });
        return (
            "object" === typeof input &&
            null !== input &&
            false === Array.isArray(input) &&
            $io0(input)
        );
    };
    if (false === __is(input)) {
        const $report = (typia.createValidate as any).report(errors);
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is DynamicNever => {
            const $join = (typia.createValidate as any).join;
            const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    false === _exceptionable ||
                        Object.keys(input)
                            .map((key: any) => {
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
                        expected: "DynamicNever",
                        value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                $report(true, {
                    path: _path + "",
                    expected: "DynamicNever",
                    value: input,
                })
            );
        })(input, "$input", true);
    }
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined,
    } as any;
});
