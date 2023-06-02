import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_validatePrune_AtomicUnion = _test_validatePrune(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) =>
        ((input: any): typia.IValidation<Array<AtomicUnion.Union>> => {
            const validate: any = (
                input: any,
            ): typia.IValidation<Array<AtomicUnion.Union>> => {
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
                const $report: any = (typia.validatePrune as any).report(
                    errors,
                );
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
                                                path:
                                                    _path + "[" + _index1 + "]",
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
            };
            const prune: any = (input: Array<AtomicUnion.Union>): void => {};
            const output: any = validate(input);
            if (output.success) prune(input);
            return output;
        })(input),
    AtomicUnion.SPOILERS,
);
