import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_misc_prune_ArrayRecursiveUnionImplicit = _test_misc_prune(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input: ArrayRecursiveUnionImplicit): void => {
        const $io0 = (input: any): boolean =>
            "number" === typeof input.id &&
            "string" === typeof input.name &&
            "string" === typeof input.path &&
            Array.isArray(input.children) &&
            input.children.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $iu0(elem),
            );
        const $io1 = (input: any): boolean =>
            ("read" === input.access || "write" === input.access) &&
            "number" === typeof input.id &&
            "string" === typeof input.name &&
            "string" === typeof input.path &&
            Array.isArray(input.children) &&
            input.children.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $iu0(elem),
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
                if (undefined !== input.width) return $io2(input);
                if (undefined !== input.content) return $io3(input);
                if (undefined !== input.count) return $io4(input);
                if (undefined !== input.target) return $io5(input);
                return $io0(input);
            })();
        const $pp0 = (input: any) =>
            input.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem) $pu0(elem);
            });
        const $pp1 = (input: any) =>
            input.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem) $pu0(elem);
            });
        const $po0 = (input: any): any => {
            if (Array.isArray(input.children)) $pp1(input.children);
            for (const key of Object.keys(input)) {
                if (
                    "id" === key ||
                    "name" === key ||
                    "path" === key ||
                    "children" === key
                )
                    continue;
                delete input[key];
            }
        };
        const $po1 = (input: any): any => {
            if (Array.isArray(input.children)) $pp1(input.children);
            for (const key of Object.keys(input)) {
                if (
                    "access" === key ||
                    "id" === key ||
                    "name" === key ||
                    "path" === key ||
                    "children" === key
                )
                    continue;
                delete input[key];
            }
        };
        const $po2 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if (
                    "id" === key ||
                    "name" === key ||
                    "path" === key ||
                    "width" === key ||
                    "height" === key ||
                    "url" === key ||
                    "size" === key
                )
                    continue;
                delete input[key];
            }
        };
        const $po3 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if (
                    "id" === key ||
                    "name" === key ||
                    "path" === key ||
                    "size" === key ||
                    "content" === key
                )
                    continue;
                delete input[key];
            }
        };
        const $po4 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if (
                    "id" === key ||
                    "name" === key ||
                    "path" === key ||
                    "size" === key ||
                    "count" === key
                )
                    continue;
                delete input[key];
            }
        };
        const $po5 = (input: any): any => {
            if ("object" === typeof input.target && null !== input.target)
                $pu0(input.target);
            for (const key of Object.keys(input)) {
                if (
                    "id" === key ||
                    "name" === key ||
                    "path" === key ||
                    "target" === key
                )
                    continue;
                delete input[key];
            }
        };
        const $pu0 = (input: any): any =>
            (() => {
                if (undefined !== input.access) return $po1(input);
                if (undefined !== input.width) return $po2(input);
                if (undefined !== input.content) return $po3(input);
                if (undefined !== input.count) return $po4(input);
                if (undefined !== input.target) return $po5(input);
                return $po0(input);
            })();
        if (Array.isArray(input)) $pp0(input);
    },
);
