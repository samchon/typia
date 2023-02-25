import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_createValidateClone_ObjectPrimitive = _test_validateClone("ObjectPrimitive", ObjectPrimitive.generate, (input: any): typia.IValidation<typia.Primitive<Primitive<IArticle>>> => { const validate = (input: any): typia.IValidation<Primitive<IArticle>> => {
    const errors = [] as any[];
    const $report = (typia.createValidateClone as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is Primitive<IArticle> => {
        return true;
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<Primitive<IArticle>>;
}; const clone = (input: Primitive<IArticle>): typia.Primitive<Primitive<IArticle>> => {
    const $any = (typia.createValidateClone as any).any;
    return $any(input);
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; }, ObjectPrimitive.SPOILERS);
