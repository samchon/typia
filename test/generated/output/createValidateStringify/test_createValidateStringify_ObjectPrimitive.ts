import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_validateStringify } from "../internal/_test_validateStringify";
export const test_createValidateStringify_ObjectPrimitive = _test_validateStringify("ObjectPrimitive", ObjectPrimitive.generate, (input: Primitive<IArticle>): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<Primitive<IArticle>> => {
    const errors = [] as any[];
    const $report = (typia.createValidateStringify as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is Primitive<IArticle> => {
        return true;
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<Primitive<IArticle>>;
}; const stringify = (input: Primitive<IArticle>): string => {
    return undefined !== input ? JSON.stringify(input) : undefined;
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; }, ObjectPrimitive.SPOILERS);
