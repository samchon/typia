import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_createEquals_ArrayRecursiveUnionImplicit = _test_equals(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (
        input: any,
        _exceptionable: boolean = true,
    ): input is Array<ArrayRecursiveUnionImplicit.IBucket> => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "string" === typeof input.name &&
            "string" === typeof input.path &&
            Array.isArray(input.children) &&
            input.children.every(
                (elem: any, _index2: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $iu0(elem, true && _exceptionable),
            ) &&
            (4 === Object.keys(input).length ||
                Object.keys(input).every((key) => {
                    if (
                        ["id", "name", "path", "children"].some(
                            (prop) => key === prop,
                        )
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
            ("read" === input.access || "write" === input.access) &&
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "string" === typeof input.name &&
            "string" === typeof input.path &&
            Array.isArray(input.children) &&
            input.children.every(
                (elem: any, _index3: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $iu0(elem, true && _exceptionable),
            ) &&
            (5 === Object.keys(input).length ||
                Object.keys(input).every((key) => {
                    if (
                        ["access", "id", "name", "path", "children"].some(
                            (prop) => key === prop,
                        )
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io2 = (input: any, _exceptionable: boolean = true): boolean =>
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
            (7 === Object.keys(input).length ||
                Object.keys(input).every((key) => {
                    if (
                        [
                            "id",
                            "name",
                            "path",
                            "width",
                            "height",
                            "url",
                            "size",
                        ].some((prop) => key === prop)
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io3 = (input: any, _exceptionable: boolean = true): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "string" === typeof input.name &&
            "string" === typeof input.path &&
            "number" === typeof input.size &&
            Number.isFinite(input.size) &&
            "string" === typeof input.content &&
            (5 === Object.keys(input).length ||
                Object.keys(input).every((key) => {
                    if (
                        ["id", "name", "path", "size", "content"].some(
                            (prop) => key === prop,
                        )
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io4 = (input: any, _exceptionable: boolean = true): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "string" === typeof input.name &&
            "string" === typeof input.path &&
            "number" === typeof input.size &&
            Number.isFinite(input.size) &&
            "number" === typeof input.count &&
            Number.isFinite(input.count) &&
            (5 === Object.keys(input).length ||
                Object.keys(input).every((key) => {
                    if (
                        ["id", "name", "path", "size", "count"].some(
                            (prop) => key === prop,
                        )
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io5 = (input: any, _exceptionable: boolean = true): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "string" === typeof input.name &&
            "string" === typeof input.path &&
            "object" === typeof input.target &&
            null !== input.target &&
            $iu0(input.target, true && _exceptionable) &&
            (4 === Object.keys(input).length ||
                Object.keys(input).every((key) => {
                    if (
                        ["id", "name", "path", "target"].some(
                            (prop) => key === prop,
                        )
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $iu0 = (input: any, _exceptionable: boolean = true): any =>
            (() => {
                if (undefined !== input.access)
                    return $io1(input, true && _exceptionable);
                if (undefined !== input.width)
                    return $io2(input, true && _exceptionable);
                if (undefined !== input.content)
                    return $io3(input, true && _exceptionable);
                if (undefined !== input.count)
                    return $io4(input, true && _exceptionable);
                if (undefined !== input.target)
                    return $io5(input, true && _exceptionable);
                return $io0(input, true && _exceptionable);
            })();
        return (
            Array.isArray(input) &&
            input.every(
                (elem: any, _index1: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $iu0(elem, true),
            )
        );
    },
);
