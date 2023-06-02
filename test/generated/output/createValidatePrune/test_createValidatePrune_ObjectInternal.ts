import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_createValidatePrune_ObjectInternal = _test_validatePrune(
    "ObjectInternal",
    ObjectInternal.generate,
    (input: any): typia.IValidation<ObjectInternal> => {
        const validate: any = (
            input: any,
        ): typia.IValidation<ObjectInternal> => {
            const __is: any = (input: any): input is ObjectInternal => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof input.id &&
                    "string" === typeof input.name
                );
            };
            const errors: any = [] as any[];
            const $report: any = (typia.createValidatePrune as any).report(
                errors,
            );
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectInternal => {
                    const $vo0: any = (
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
                            "string" === typeof input.name ||
                                $report(_exceptionable, {
                                    path: _path + ".name",
                                    expected: "string",
                                    value: input.name,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ObjectInternal",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "ObjectInternal",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            const success: any = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        };
        const prune: any = (input: ObjectInternal): void => {
            const $po0: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
                    if ("id" === key || "name" === key) continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        const output: any = validate(input);
        if (output.success) prune(input);
        return output;
    },
    ObjectInternal.SPOILERS,
);
