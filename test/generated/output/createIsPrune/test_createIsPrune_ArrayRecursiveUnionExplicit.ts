import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";

export const test_createIsPrune_ArrayRecursiveUnionExplicit = _test_isPrune(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    (input: any): input is ArrayRecursiveUnionExplicit => {
        const is: any = (input: any): input is ArrayRecursiveUnionExplicit => {
            const $io0: any = (input: any): boolean =>
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "string" === typeof input.name &&
                "string" === typeof input.path &&
                Array.isArray(input.children) &&
                input.children.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $iu0(elem),
                ) &&
                "directory" === input.type;
            const $io1: any = (input: any): boolean =>
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "string" === typeof input.name &&
                "string" === typeof input.path &&
                "number" === typeof input.width &&
                Number.isFinite(input.width) &&
                "number" === typeof input.height &&
                Number.isFinite(input.height) &&
                "string" === typeof input.url &&
                "number" === typeof input.size &&
                Number.isFinite(input.size) &&
                "file" === input.type &&
                "jpg" === input.extension;
            const $io2: any = (input: any): boolean =>
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "string" === typeof input.name &&
                "string" === typeof input.path &&
                "number" === typeof input.size &&
                Number.isFinite(input.size) &&
                "string" === typeof input.content &&
                "file" === input.type &&
                "txt" === input.extension;
            const $io3: any = (input: any): boolean =>
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "string" === typeof input.name &&
                "string" === typeof input.path &&
                "number" === typeof input.size &&
                Number.isFinite(input.size) &&
                "number" === typeof input.count &&
                Number.isFinite(input.count) &&
                "file" === input.type &&
                "zip" === input.extension;
            const $io4: any = (input: any): boolean =>
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "string" === typeof input.name &&
                "string" === typeof input.path &&
                "object" === typeof input.target &&
                null !== input.target &&
                $iu0(input.target) &&
                "file" === input.type &&
                "lnk" === input.extension;
            const $iu0: any = (input: any): any =>
                (() => {
                    if ("directory" === input.type) return $io0(input);
                    if ("jpg" === input.extension) return $io1(input);
                    if ("txt" === input.extension) return $io2(input);
                    if ("zip" === input.extension) return $io3(input);
                    if ("lnk" === input.extension) return $io4(input);
                    return false;
                })();
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $iu0(elem),
                )
            );
        };
        const prune: any = (input: ArrayRecursiveUnionExplicit): void => {
            const $io0: any = (input: any): boolean =>
                "number" === typeof input.id &&
                "string" === typeof input.name &&
                "string" === typeof input.path &&
                Array.isArray(input.children) &&
                input.children.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $iu0(elem),
                ) &&
                "directory" === input.type;
            const $io1: any = (input: any): boolean =>
                "number" === typeof input.id &&
                "string" === typeof input.name &&
                "string" === typeof input.path &&
                "number" === typeof input.width &&
                "number" === typeof input.height &&
                "string" === typeof input.url &&
                "number" === typeof input.size &&
                "file" === input.type &&
                "jpg" === input.extension;
            const $io2: any = (input: any): boolean =>
                "number" === typeof input.id &&
                "string" === typeof input.name &&
                "string" === typeof input.path &&
                "number" === typeof input.size &&
                "string" === typeof input.content &&
                "file" === input.type &&
                "txt" === input.extension;
            const $io3: any = (input: any): boolean =>
                "number" === typeof input.id &&
                "string" === typeof input.name &&
                "string" === typeof input.path &&
                "number" === typeof input.size &&
                "number" === typeof input.count &&
                "file" === input.type &&
                "zip" === input.extension;
            const $io4: any = (input: any): boolean =>
                "number" === typeof input.id &&
                "string" === typeof input.name &&
                "string" === typeof input.path &&
                "object" === typeof input.target &&
                null !== input.target &&
                $iu0(input.target) &&
                "file" === input.type &&
                "lnk" === input.extension;
            const $iu0: any = (input: any): any =>
                (() => {
                    if ("directory" === input.type) return $io0(input);
                    if ("jpg" === input.extension) return $io1(input);
                    if ("txt" === input.extension) return $io2(input);
                    if ("zip" === input.extension) return $io3(input);
                    if ("lnk" === input.extension) return $io4(input);
                    return false;
                })();
            const $throws: any = (typia.createIsPrune as any).throws;
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
                        "children" === key ||
                        "type" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            const $po1: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
                    if (
                        "id" === key ||
                        "name" === key ||
                        "path" === key ||
                        "width" === key ||
                        "height" === key ||
                        "url" === key ||
                        "size" === key ||
                        "type" === key ||
                        "extension" === key
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
                        "size" === key ||
                        "content" === key ||
                        "type" === key ||
                        "extension" === key
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
                        "count" === key ||
                        "type" === key ||
                        "extension" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            const $po4: any = (input: any): any => {
                if ("object" === typeof input.target && null !== input.target)
                    $pu0(input.target);
                for (const key: any of Object.keys(input)) {
                    if (
                        "id" === key ||
                        "name" === key ||
                        "path" === key ||
                        "target" === key ||
                        "type" === key ||
                        "extension" === key
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
        };
        if (!is(input)) return false;
        prune(input);
        return true;
    },
    ArrayRecursiveUnionExplicit.SPOILERS,
);
