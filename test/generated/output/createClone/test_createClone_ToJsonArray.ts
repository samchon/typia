import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ToJsonArray } from "../../../structures/ToJsonArray";
export const test_createClone_ToJsonArray = _test_clone("ToJsonArray", ToJsonArray.generate, (input: ToJsonArray): typia.Primitive<ToJsonArray> => {
    const $co0 = (input: any): any => ({
        id: input.id as any
    });
    return Array.isArray(input) && (input.length === 4 && true && true && true && true) ? [
        "object" === typeof input[0] && null !== input[0] && "function" === typeof input[0].toJSON ? Array.isArray(input[0].toJSON()) ? input[0].toJSON().map((elem: any) => elem as any) : input[0].toJSON() as any : input[0] as any,
        "object" === typeof input[1] && null !== input[1] && "function" === typeof input[1].toJSON ? Array.isArray(input[1].toJSON()) ? input[1].toJSON().map((elem: any) => elem as any) : input[1].toJSON() as any : input[1] as any,
        "object" === typeof input[2] && null !== input[2] && "function" === typeof input[2].toJSON ? Array.isArray(input[2].toJSON()) ? input[2].toJSON().map((elem: any) => elem as any) : input[2].toJSON() as any : input[2] as any,
        "object" === typeof input[3] && null !== input[3] && "function" === typeof input[3].toJSON ? Array.isArray(input[3].toJSON()) ? input[3].toJSON().map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem as any) : input[3].toJSON() as any : input[3] as any
    ] as any : input as any;
});
