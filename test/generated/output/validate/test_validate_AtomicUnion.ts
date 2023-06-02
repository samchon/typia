import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_validate_AtomicUnion = _test_validate(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) =>
        ((input: any): typia.IValidation<Array<AtomicUnion.Union>> => {
            const __is: any = (
                input: any,
            ): input is Array<AtomicUnion.Union> => {
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
            const errors: any = [] as any[];
            const $report: any = (typia.validate as any).report(errors);
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is Array<AtomicUnion.Union> => {
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
            const success: any = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        })(input),
    AtomicUnion.SPOILERS,
);
