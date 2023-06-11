import typia from "../../../../src";
import { FunctionalTupleUnion } from "../../../structures/FunctionalTupleUnion";
import { _test_validate } from "../../../internal/_test_validate";
export const test_createValidate_FunctionalTupleUnion = _test_validate("FunctionalTupleUnion", FunctionalTupleUnion.generate, (input: any): typia.IValidation<FunctionalTupleUnion> => {
    const errors = [] as any[];
    const $report = (typia.createValidate as any).report(errors);
    const __is = (input: any): input is FunctionalTupleUnion => {
        return Array.isArray(input) && (input.length === 4 && (undefined !== input[0] && (null === input[0] || "function" === typeof input[0] || "string" === typeof input[0] || "number" === typeof input[0] && Number.isFinite(input[0]))) && (undefined !== input[1] && (null === input[1] || "function" === typeof input[1] || "string" === typeof input[1] || "number" === typeof input[1] && Number.isFinite(input[1]))) && (undefined !== input[2] && (null === input[2] || "function" === typeof input[2] || "string" === typeof input[2] || "number" === typeof input[2] && Number.isFinite(input[2]))) && (undefined !== input[3] && (null === input[3] || "function" === typeof input[3] || "string" === typeof input[3] || "number" === typeof input[3] && Number.isFinite(input[3]))));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is FunctionalTupleUnion => {
            return (Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "FunctionalTupleUnion",
                value: input
            })) && ((input.length === 4 || $report(true, {
                path: _path + "",
                expected: "[(null | number | string), (null | number | string), (null | number | string), (null | number | string)]",
                value: input
            })) && [
                (undefined !== input[0] || $report(true, {
                    path: _path + "[0]",
                    expected: "(null | number | string)",
                    value: input[0]
                })) && (null === input[0] || "function" === typeof input[0] || "string" === typeof input[0] || "number" === typeof input[0] && Number.isFinite(input[0]) || $report(true, {
                    path: _path + "[0]",
                    expected: "(null | number | string)",
                    value: input[0]
                })),
                (undefined !== input[1] || $report(true, {
                    path: _path + "[1]",
                    expected: "(null | number | string)",
                    value: input[1]
                })) && (null === input[1] || "function" === typeof input[1] || "string" === typeof input[1] || "number" === typeof input[1] && Number.isFinite(input[1]) || $report(true, {
                    path: _path + "[1]",
                    expected: "(null | number | string)",
                    value: input[1]
                })),
                (undefined !== input[2] || $report(true, {
                    path: _path + "[2]",
                    expected: "(null | number | string)",
                    value: input[2]
                })) && (null === input[2] || "function" === typeof input[2] || "string" === typeof input[2] || "number" === typeof input[2] && Number.isFinite(input[2]) || $report(true, {
                    path: _path + "[2]",
                    expected: "(null | number | string)",
                    value: input[2]
                })),
                (undefined !== input[3] || $report(true, {
                    path: _path + "[3]",
                    expected: "(null | number | string)",
                    value: input[3]
                })) && (null === input[3] || "function" === typeof input[3] || "string" === typeof input[3] || "number" === typeof input[3] && Number.isFinite(input[3]) || $report(true, {
                    path: _path + "[3]",
                    expected: "(null | number | string)",
                    value: input[3]
                }))
            ].every((flag: boolean) => flag)) || $report(true, {
                path: _path + "",
                expected: "FunctionalTupleUnion",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}, FunctionalTupleUnion.SPOILERS);
