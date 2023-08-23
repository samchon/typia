import typia from "../../../../src";
import { _test_misc_validatePrune } from "../../../internal/_test_misc_validatePrune";
import { ObjectClosure } from "../../../structures/ObjectClosure";

export const test_misc_validatePrune_ObjectClosure = _test_misc_validatePrune(
    "ObjectClosure",
)<ObjectClosure>(ObjectClosure)((input) =>
    ((input: any): typia.IValidation<ObjectClosure> => {
        const validate = (input: any): typia.IValidation<ObjectClosure> => {
            const errors = [] as any[];
            const __is = (input: any): input is ObjectClosure => {
                const $io0 = (input: any): boolean =>
                    "string" === typeof input.id && true;
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input)) {
                const $report = (typia.misc.validatePrune as any).report(
                    errors,
                );
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
                            true ||
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
        };
        const prune = (input: ObjectClosure): void => {
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("id" === key || "open" === key) continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        const output = validate(input);
        if (output.success) prune(input);
        return output;
    })(input),
);
