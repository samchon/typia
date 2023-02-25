import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_validateParse } from "../internal/_test_validateParse";
export const test_validateParse_ObjectPrimitive = _test_validateParse("ObjectPrimitive", ObjectPrimitive.generate, (input) => ((input: string): typia.IValidation<typia.Primitive<Primitive<IArticle>>> => { const validate = (input: any): typia.IValidation<Primitive<IArticle>> => {
    const errors = [] as any[];
    const $report = (typia.validateParse as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is Primitive<IArticle> => {
        return true;
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<Primitive<IArticle>>;
}; input = JSON.parse(input); const output = validate(input); return output; })(input), ObjectPrimitive.SPOILERS);
