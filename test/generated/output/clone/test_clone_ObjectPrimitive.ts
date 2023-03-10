import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_clone_ObjectPrimitive = _test_clone(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) =>
        ((
            input: ObjectPrimitive.IArticle,
        ): typia.Primitive<ObjectPrimitive.IArticle> => {
            const $io1 = (input: any): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.name &&
                "string" === typeof input.extension &&
                "string" === typeof input.url &&
                "string" === typeof input.created_at;
            const $co0 = (input: any): any => ({
                id: input.id as any,
                extension: input.extension as any,
                title: input.title as any,
                body: input.body as any,
                files: Array.isArray(input.files)
                    ? input.files.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co1(elem)
                              : (elem as any),
                      )
                    : (input.files as any),
                secret: input.secret as any,
                created_at: input.created_at as any,
            });
            const $co1 = (input: any): any => ({
                id: input.id as any,
                name: input.name as any,
                extension: input.extension as any,
                url: input.url as any,
                created_at: input.created_at as any,
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        })(input),
);
