import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_createValidateEquals_ToJsonDouble = _test_validateEquals(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input: any): typia.IValidation<ToJsonDouble.Parent> => {
        const errors = [] as any[];
        const $report = (typia.createValidateEquals as any).report(errors);
        const $join = (typia.createValidateEquals as any).join;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ToJsonDouble.Parent => {
            const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    0 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input)
                            .map((key) => {
                                const value = input[key];
                                if (undefined === value) return true;
                                return $report(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "undefined",
                                    value: value,
                                });
                            })
                            .every((flag: boolean) => flag),
                ].every((flag: boolean) => flag);
            return (
                ((("object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Resolve<ToJsonDouble.Parent>",
                        value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                $report(true, {
                    path: _path + "",
                    expected: "Resolve<ToJsonDouble.Parent>",
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
);
