import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_misc_clone_ArrayRecursiveUnionImplicit =
    _test_misc_clone<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)(
        (input) =>
            ((
                input: ArrayRecursiveUnionImplicit,
            ): typia.Primitive<ArrayRecursiveUnionImplicit> => {
                const $io0 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    Array.isArray(input.children) &&
                    input.children.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $iu0(elem),
                    );
                const $io1 = (input: any): boolean =>
                    ("read" === input.access || "write" === input.access) &&
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    Array.isArray(input.children) &&
                    input.children.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $iu0(elem),
                    );
                const $io2 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.width &&
                    "number" === typeof input.height &&
                    "string" === typeof input.url &&
                    "number" === typeof input.size;
                const $io3 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.size &&
                    "string" === typeof input.content;
                const $io4 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.size &&
                    "number" === typeof input.count;
                const $io5 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "object" === typeof input.target &&
                    null !== input.target &&
                    $iu0(input.target);
                const $iu0 = (input: any): any =>
                    (() => {
                        if (undefined !== input.access) return $io1(input);
                        else if (undefined !== input.width) return $io2(input);
                        else if (undefined !== input.content)
                            return $io3(input);
                        else if (undefined !== input.count) return $io4(input);
                        else if (undefined !== input.target) return $io5(input);
                        else return $io0(input);
                    })();
                const $cp0 = (input: any) =>
                    input.map((elem: any) =>
                        "object" === typeof elem && null !== elem
                            ? $cu0(elem)
                            : (elem as any),
                    );
                const $cp1 = (input: any) =>
                    input.map((elem: any) =>
                        "object" === typeof elem && null !== elem
                            ? $cu0(elem)
                            : (elem as any),
                    );
                const $co0 = (input: any): any => ({
                    id: input.id as any,
                    name: input.name as any,
                    path: input.path as any,
                    children: Array.isArray(input.children)
                        ? $cp1(input.children)
                        : (input.children as any),
                });
                const $co1 = (input: any): any => ({
                    access: input.access as any,
                    id: input.id as any,
                    name: input.name as any,
                    path: input.path as any,
                    children: Array.isArray(input.children)
                        ? $cp1(input.children)
                        : (input.children as any),
                });
                const $co2 = (input: any): any => ({
                    id: input.id as any,
                    name: input.name as any,
                    path: input.path as any,
                    width: input.width as any,
                    height: input.height as any,
                    url: input.url as any,
                    size: input.size as any,
                });
                const $co3 = (input: any): any => ({
                    id: input.id as any,
                    name: input.name as any,
                    path: input.path as any,
                    size: input.size as any,
                    content: input.content as any,
                });
                const $co4 = (input: any): any => ({
                    id: input.id as any,
                    name: input.name as any,
                    path: input.path as any,
                    size: input.size as any,
                    count: input.count as any,
                });
                const $co5 = (input: any): any => ({
                    id: input.id as any,
                    name: input.name as any,
                    path: input.path as any,
                    target:
                        "object" === typeof input.target &&
                        null !== input.target
                            ? $cu0(input.target)
                            : (input.target as any),
                });
                const $cu0 = (input: any): any =>
                    (() => {
                        if (undefined !== input.access) return $co1(input);
                        else if (undefined !== input.width) return $co2(input);
                        else if (undefined !== input.content)
                            return $co3(input);
                        else if (undefined !== input.count) return $co4(input);
                        else if (undefined !== input.target) return $co5(input);
                        else return $co0(input);
                    })();
                return Array.isArray(input) ? $cp0(input) : (input as any);
            })(input),
    );
