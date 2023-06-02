import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_validateClone_ObjectInternal = _test_validateClone(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) =>
        ((input: any): typia.IValidation<typia.Primitive<ObjectInternal>> => {
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
                const $report: any = (typia.validateClone as any).report(
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
            const clone: any = (
                input: ObjectInternal,
            ): typia.Primitive<ObjectInternal> => {
                const $co0: any = (input: any): any => ({
                    id: input.id as any,
                    name: input.name as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            const output: any = validate(input) as any;
            if (output.success) output.data = clone(input);
            return output;
        })(input),
    ObjectInternal.SPOILERS,
);
