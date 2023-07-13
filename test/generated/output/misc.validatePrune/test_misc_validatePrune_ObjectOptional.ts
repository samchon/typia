import typia from "../../../../src";
import { _test_misc_validatePrune } from "../../../internal/_test_misc_validatePrune";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_misc_validatePrune_ObjectOptional = _test_misc_validatePrune(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) =>
        ((input: any): typia.IValidation<ObjectOptional> => {
            const validate = (
                input: any,
            ): typia.IValidation<ObjectOptional> => {
                const errors = [] as any[];
                const __is = (input: any): input is ObjectOptional => {
                    const $io0 = (input: any): boolean =>
                        (undefined === input.id ||
                            "string" === typeof input.id) &&
                        (undefined === input.name ||
                            "string" === typeof input.name) &&
                        (undefined === input.email ||
                            "string" === typeof input.email) &&
                        (undefined === input.sequence ||
                            ("number" === typeof input.sequence &&
                                Number.isFinite(input.sequence)));
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        false === Array.isArray(input) &&
                        $io0(input)
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
                    ): input is ObjectOptional => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                undefined === input.id ||
                                    "string" === typeof input.id ||
                                    $report(_exceptionable, {
                                        path: _path + ".id",
                                        expected: "(string | undefined)",
                                        value: input.id,
                                    }),
                                undefined === input.name ||
                                    "string" === typeof input.name ||
                                    $report(_exceptionable, {
                                        path: _path + ".name",
                                        expected: "(string | undefined)",
                                        value: input.name,
                                    }),
                                undefined === input.email ||
                                    "string" === typeof input.email ||
                                    $report(_exceptionable, {
                                        path: _path + ".email",
                                        expected: "(string | undefined)",
                                        value: input.email,
                                    }),
                                undefined === input.sequence ||
                                    ("number" === typeof input.sequence &&
                                        Number.isFinite(input.sequence)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".sequence",
                                        expected: "(number | undefined)",
                                        value: input.sequence,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input &&
                                null !== input &&
                                false === Array.isArray(input)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ObjectOptional",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ObjectOptional",
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
            const prune = (input: ObjectOptional): void => {
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if (
                            "id" === key ||
                            "name" === key ||
                            "email" === key ||
                            "sequence" === key
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
        })(input),
    ObjectOptional.SPOILERS,
);
