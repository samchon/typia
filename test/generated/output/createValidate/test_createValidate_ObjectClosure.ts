import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { ObjectClosure } from "../../../structures/ObjectClosure";

export const test_createValidate_ObjectClosure = _test_validate(
    "ObjectClosure",
)<ObjectClosure>(ObjectClosure)(
    (input: any): typia.IValidation<ObjectClosure> => {
        const errors = [] as any[];
        const __is = (input: any): input is ObjectClosure => {
            const $io0 = (input: any): boolean =>
                "string" === typeof input.id &&
                "function" === typeof input.open;
            return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input)) {
            const $report = (typia.createValidate as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectClosure => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "string" === typeof input.id ||
                            $report(_exceptionable, {
                                path: _path + ".id",
                                expected: "string",
                                value: input.id,
                            }),
                        "function" === typeof input.open ||
                            $report(_exceptionable, {
                                path: _path + ".open",
                                expected: "unknown",
                                value: input.open,
                            }),
                    ].every((flag: boolean) => flag);
                return (
                    ((("object" === typeof input && null !== input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "ObjectClosure.IRecord",
                            value: input,
                        })) &&
                        $vo0(input, _path + "", true)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "ObjectClosure.IRecord",
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
    },
);
