import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_createValidateClone_AtomicUnion = _test_validateClone(
    "AtomicUnion",
    AtomicUnion.generate,
    (
        input: any,
    ): typia.IValidation<typia.Primitive<Array<AtomicUnion.Union>>> => {
        const validate = (input: any): typia.IValidation<AtomicUnion> => {
            const errors = [] as any[];
            const $report = (typia.createValidateClone as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is AtomicUnion => {
                return (
                    ((Array.isArray(input) ||
                        $report(true, {
                            path: _path + "",
                            expected:
                                "Array<(boolean | null | number | string)>",
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
                        expected: "Array<(boolean | null | number | string)>",
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
        };
        const clone = (input: AtomicUnion): typia.Primitive<AtomicUnion> => {
            return Array.isArray(input)
                ? input.map((elem: any) => elem as any)
                : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = clone(input);
        return output;
    },
    AtomicUnion.SPOILERS,
);
