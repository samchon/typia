import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_validatePrune } from "../internal/_test_validatePrune";
export const test_createValidatePrune_ObjectPrimitive = _test_validatePrune("ObjectPrimitive", ObjectPrimitive.generate, (input: any): typia.IValidation<Primitive<IArticle>> => { const validate = (input: any): typia.IValidation<Primitive<IArticle>> => {
    const errors = [] as any[];
    const $report = (typia.createValidatePrune as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is Primitive<IArticle> => {
        return true;
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<Primitive<IArticle>>;
}; const prune = (input: Primitive<IArticle>): void => {
}; const output = validate(input); if (output.success)
    prune(input); return output; }, ObjectPrimitive.SPOILERS);
