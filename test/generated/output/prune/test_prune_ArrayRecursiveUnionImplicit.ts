import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_prune_ArrayRecursiveUnionImplicit = _test_prune(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) =>
        ((input: Array<ArrayRecursiveUnionImplicit.IBucket>): void => {
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
            const $po0: any = (input: any): any => {
                if (Array.isArray(input.children))
                    (() =>
                        input.children.forEach((elem: any) => {
                            if ("object" === typeof elem && null !== elem)
                                $pu0(elem);
                        }))();
                for (const key: any of Object.keys(input)) {
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
            const $po1: any = (input: any): any => {
                if (Array.isArray(input.children))
                    (() =>
                        input.children.forEach((elem: any) => {
                            if ("object" === typeof elem && null !== elem)
                                $pu0(elem);
                        }))();
                for (const key: any of Object.keys(input)) {
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
            const $po2: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
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
            const $po3: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
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
            const $po4: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
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
            const $po5: any = (input: any): any => {
                if ("object" === typeof input.target && null !== input.target)
                    $pu0(input.target);
                for (const key: any of Object.keys(input)) {
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
            if (Array.isArray(input))
                (() =>
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $pu0(elem);
                    }))();
        })(input),
);
