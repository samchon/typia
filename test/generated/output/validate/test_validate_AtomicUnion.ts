import typia from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_validate } from "../internal/_test_validate";
export const test_validate_AtomicUnion = _test_validate("AtomicUnion", AtomicUnion.generate, (input) => ((input: any): typia.IValidation<AtomicUnion> => {
    const errors = [] as any[];
    const $report = (typia.validate as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is AtomicUnion => {
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<(boolean | number | string)>",
            value: input
        })) && input.map((elem: any, _index1: number) => "string" === typeof elem || "number" === typeof elem || "boolean" === typeof elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(boolean | number | string)",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<(boolean | number | string)>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<AtomicUnion>;
})(input), AtomicUnion.SPOILERS);
