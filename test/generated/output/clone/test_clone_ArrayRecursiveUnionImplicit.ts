import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_clone_ArrayRecursiveUnionImplicit = _test_clone(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) =>
        ((
            input: Array<ArrayRecursiveUnionImplicit.IBucket>,
        ): typia.Primitive<Array<ArrayRecursiveUnionImplicit.IBucket>> => {
            const $io0: any = (input: any): boolean =>
                "number" === typeof input.id &&
                "string" === typeof input.name &&
                "string" === typeof input.path &&
                Array.isArray(input.children) &&
                input.children.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $iu0(elem),
                );
            const $io1: any = (input: any): boolean =>
                ("read" === input.access || "write" === input.access) &&
                "number" === typeof input.id &&
                "string" === typeof input.name &&
                "string" === typeof input.path &&
                Array.isArray(input.children) &&
                input.children.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $iu0(elem),
                );
            const $io2: any = (input: any): boolean =>
                "number" === typeof input.id &&
                "string" === typeof input.name &&
                "string" === typeof input.path &&
                "number" === typeof input.width &&
                "number" === typeof input.height &&
                "string" === typeof input.url &&
                "number" === typeof input.size;
            const $io3: any = (input: any): boolean =>
                "number" === typeof input.id &&
                "string" === typeof input.name &&
                "string" === typeof input.path &&
                "number" === typeof input.size &&
                "string" === typeof input.content;
            const $io4: any = (input: any): boolean =>
                "number" === typeof input.id &&
                "string" === typeof input.name &&
                "string" === typeof input.path &&
                "number" === typeof input.size &&
                "number" === typeof input.count;
            const $io5: any = (input: any): boolean =>
                "number" === typeof input.id &&
                "string" === typeof input.name &&
                "string" === typeof input.path &&
                "object" === typeof input.target &&
                null !== input.target &&
                $iu0(input.target);
            const $iu0: any = (input: any): any =>
                (() => {
                    if (undefined !== input.access) return $io1(input);
                    if (undefined !== input.width) return $io2(input);
                    if (undefined !== input.content) return $io3(input);
                    if (undefined !== input.count) return $io4(input);
                    if (undefined !== input.target) return $io5(input);
                    return $io0(input);
                })();
            const $co0: any = (input: any): any => ({
                id: input.id as any,
                name: input.name as any,
                path: input.path as any,
                children: Array.isArray(input.children)
                    ? (() =>
                          input.children.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu0(elem)
                                  : (elem as any),
                          ))()
                    : (input.children as any),
            });
            const $co1: any = (input: any): any => ({
                access: input.access as any,
                id: input.id as any,
                name: input.name as any,
                path: input.path as any,
                children: Array.isArray(input.children)
                    ? (() =>
                          input.children.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu0(elem)
                                  : (elem as any),
                          ))()
                    : (input.children as any),
            });
            const $co2: any = (input: any): any => ({
                id: input.id as any,
                name: input.name as any,
                path: input.path as any,
                width: input.width as any,
                height: input.height as any,
                url: input.url as any,
                size: input.size as any,
            });
            const $co3: any = (input: any): any => ({
                id: input.id as any,
                name: input.name as any,
                path: input.path as any,
                size: input.size as any,
                content: input.content as any,
            });
            const $co4: any = (input: any): any => ({
                id: input.id as any,
                name: input.name as any,
                path: input.path as any,
                size: input.size as any,
                count: input.count as any,
            });
            const $co5: any = (input: any): any => ({
                id: input.id as any,
                name: input.name as any,
                path: input.path as any,
                target:
                    "object" === typeof input.target && null !== input.target
                        ? $cu0(input.target)
                        : (input.target as any),
            });
            return Array.isArray(input)
                ? (() =>
                      input.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $cu0(elem)
                              : (elem as any),
                      ))()
                : (input as any);
        })(input),
);
