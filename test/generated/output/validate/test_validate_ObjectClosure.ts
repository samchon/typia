import typia from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_validate } from "../internal/_test_validate";
export const test_validate_ObjectClosure = _test_validate("ObjectClosure", ObjectClosure.generate, (input) => ((input: any): typia.IValidation<IRecord> => {
    const errors = [] as any[];
    const $report = (typia.validate as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is IRecord => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input.id
            }), true || $report(_exceptionable, {
                path: _path + ".open",
                expected: "unknown",
                value: input.open
            })].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<ObjectClosure.IRecord>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<ObjectClosure.IRecord>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<IRecord>;
})(input), ObjectClosure.SPOILERS);
