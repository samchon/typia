import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_json_isParse_ArrayRecursiveUnionExplicitPointer =
    _test_json_isParse<ArrayRecursiveUnionExplicitPointer>(
        ArrayRecursiveUnionExplicitPointer,
    )((input: any): typia.Primitive<ArrayRecursiveUnionExplicitPointer> => {
        const is = (
            input: any,
        ): input is ArrayRecursiveUnionExplicitPointer => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $iu0(input.value);
            const $io2 = (input: any): boolean =>
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "string" === typeof input.name &&
                "string" === typeof input.path &&
                Array.isArray(input.children) &&
                input.children.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                ) &&
                "directory" === input.type;
            const $io3 = (input: any): boolean =>
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
            const $io4 = (input: any): boolean =>
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "string" === typeof input.name &&
                "string" === typeof input.path &&
                "number" === typeof input.size &&
                Number.isFinite(input.size) &&
                "string" === typeof input.content &&
                "file" === input.type &&
                "txt" === input.extension;
            const $io5 = (input: any): boolean =>
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
            const $io6 = (input: any): boolean =>
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "string" === typeof input.name &&
                "string" === typeof input.path &&
                "object" === typeof input.target &&
                null !== input.target &&
                $io1(input.target) &&
                "file" === input.type &&
                "lnk" === input.extension;
            const $iu0 = (input: any): any =>
                (() => {
                    if ("directory" === input.type) return $io2(input);
                    if ("jpg" === input.extension) return $io3(input);
                    if ("txt" === input.extension) return $io4(input);
                    if ("zip" === input.extension) return $io5(input);
                    if ("lnk" === input.extension) return $io6(input);
                    return false;
                })();
            return "object" === typeof input && null !== input && $io0(input);
        };
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    });
