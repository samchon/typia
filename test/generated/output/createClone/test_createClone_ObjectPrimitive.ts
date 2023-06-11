import typia from "../../../../src";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";
import { _test_clone } from "../../../internal/_test_clone";
export const test_createClone_ObjectPrimitive = _test_clone("ObjectPrimitive", ObjectPrimitive.generate, (input: ObjectPrimitive): typia.Primitive<ObjectPrimitive> => {
    const $io1 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.name && "string" === typeof input.extension && "string" === typeof input.url && "string" === typeof input.created_at;
    const $cp0 = (input: any) => input.map((elem: any) => "object" === typeof elem && null !== elem ? $co1(elem) : elem as any);
    const $co0 = (input: any): any => ({
        id: input.id as any,
        extension: input.extension as any,
        title: input.title as any,
        body: input.body as any,
        files: Array.isArray(input.files) ? $cp0(input.files) : input.files as any,
        secret: input.secret as any,
        created_at: input.created_at as any
    });
    const $co1 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
        extension: input.extension as any,
        url: input.url as any,
        created_at: input.created_at as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
});
