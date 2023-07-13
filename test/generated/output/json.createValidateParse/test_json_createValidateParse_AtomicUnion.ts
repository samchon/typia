import typia from "../../../../src";
import { _test_json_validateParse } from "../../../internal/_test_json_validateParse";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_json_validateParse_AtomicUnion = _test_json_validateParse(
    "AtomicUnion",
    AtomicUnion.generate,
    (input: string): typia.IValidation<typia.Primitive<AtomicUnion>> => {
        const validate = (input: any): typia.IValidation<AtomicUnion> => {
            const errors = [] as any[];
            const __is = (input: any): input is AtomicUnion => {
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            null === elem ||
                            "string" === typeof elem ||
                            ("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                            "boolean" === typeof elem,
                    )
                );
            };
            if (false === __is(input)) {
                const $report = (typia.json.createValidateParse as any).report(
                    errors,
                );
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is AtomicUnion => {
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "AtomicUnion",
                                value: input,
                            })) &&
                            input
                                .map(
                                    (elem: any, _index1: number) =>
                                        null === elem ||
                                        "string" === typeof elem ||
                                        ("number" === typeof elem &&
                                            Number.isFinite(elem)) ||
                                        "boolean" === typeof elem ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(boolean | null | number | string)",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "AtomicUnion",
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
        input = JSON.parse(input);
        const output = validate(input);
        return output as any;
    },
    AtomicUnion.SPOILERS,
);
