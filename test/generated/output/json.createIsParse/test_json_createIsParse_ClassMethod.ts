import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_json_createIsParse_ClassMethod = _test_json_isParse(
    "ClassMethod",
)<ClassMethod>(ClassMethod)((input: any): typia.Primitive<ClassMethod> => {
    const is = (input: any): input is ClassMethod => {
        return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof (input as any).name &&
            "number" === typeof (input as any).age &&
            Number.isFinite((input as any).age)
        );
    };
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
});
