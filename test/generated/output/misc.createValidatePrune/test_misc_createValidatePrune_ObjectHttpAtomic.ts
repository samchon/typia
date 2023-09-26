import typia from "../../../../src";
import { _test_misc_validatePrune } from "../../../internal/_test_misc_validatePrune";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_misc_createValidatePrune_ObjectHttpAtomic =
    _test_misc_validatePrune("ObjectHttpAtomic")<ObjectHttpAtomic>(
        ObjectHttpAtomic,
    )((input: any): typia.IValidation<ObjectHttpAtomic> => {
        const validate = (input: any): typia.IValidation<ObjectHttpAtomic> => {
            const errors = [] as any[];
            const __is = (input: any): input is ObjectHttpAtomic => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "boolean" === typeof (input as any).boolean &&
                    "bigint" === typeof (input as any).bigint &&
                    "number" === typeof (input as any).number &&
                    Number.isFinite((input as any).number) &&
                    "string" === typeof (input as any).string
                );
            };
            if (false === __is(input)) {
                const $report = (typia.misc.createValidatePrune as any).report(
                    errors,
                );
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectHttpAtomic => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            "boolean" === typeof input.boolean ||
                                $report(_exceptionable, {
                                    path: _path + ".boolean",
                                    expected: "boolean",
                                    value: input.boolean,
                                }),
                            "bigint" === typeof input.bigint ||
                                $report(_exceptionable, {
                                    path: _path + ".bigint",
                                    expected: "bigint",
                                    value: input.bigint,
                                }),
                            ("number" === typeof input.number &&
                                Number.isFinite(input.number)) ||
                                $report(_exceptionable, {
                                    path: _path + ".number",
                                    expected: "number",
                                    value: input.number,
                                }),
                            "string" === typeof input.string ||
                                $report(_exceptionable, {
                                    path: _path + ".string",
                                    expected: "string",
                                    value: input.string,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ObjectHttpAtomic",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "ObjectHttpAtomic",
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
        const prune = (input: ObjectHttpAtomic): void => {
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if (
                        "boolean" === key ||
                        "bigint" === key ||
                        "number" === key ||
                        "string" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        const output = validate(input);
        if (output.success) prune(input);
        return output;
    });
