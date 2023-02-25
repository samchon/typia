import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_validateEquals } from "../internal/_test_validateEquals";
export const test_createValidateEquals_ObjectPrimitive = _test_validateEquals("ObjectPrimitive", ObjectPrimitive.generate, (input: any): typia.IValidation<Primitive<IArticle>> => {
    const errors = [] as any[];
    const $report = (typia.createValidateEquals as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is Primitive<IArticle> => {
        return true;
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<Primitive<IArticle>>;
});
