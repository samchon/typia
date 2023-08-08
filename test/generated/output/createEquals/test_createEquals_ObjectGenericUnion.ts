import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";

export const test_equals_ObjectGenericUnion = _test_equals(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (
        input: any,
        _exceptionable: boolean = true,
    ): input is ObjectGenericUnion => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "string" === typeof input.writer &&
            (null === input.answer ||
                ("object" === typeof input.answer &&
                    null !== input.answer &&
                    $io1(input.answer, true && _exceptionable))) &&
            "string" === typeof input.id &&
            "number" === typeof input.hit &&
            Number.isFinite(input.hit) &&
            Array.isArray(input.contents) &&
            input.contents.every(
                (elem: any, _index1: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io2(elem, true && _exceptionable),
            ) &&
            "string" === typeof input.created_at &&
            (6 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (
                        [
                            "writer",
                            "answer",
                            "id",
                            "hit",
                            "contents",
                            "created_at",
                        ].some((prop: any) => key === prop)
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
            "string" === typeof input.id &&
            "number" === typeof input.hit &&
            Number.isFinite(input.hit) &&
            Array.isArray(input.contents) &&
            input.contents.every(
                (elem: any, _index2: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io2(elem, true && _exceptionable),
            ) &&
            "string" === typeof input.created_at &&
            (4 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (
                        ["id", "hit", "contents", "created_at"].some(
                            (prop: any) => key === prop,
                        )
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io2 = (input: any, _exceptionable: boolean = true): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.created_at &&
            "string" === typeof input.title &&
            "string" === typeof input.body &&
            Array.isArray(input.files) &&
            input.files.every(
                (elem: any, _index3: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io3(elem, true && _exceptionable),
            ) &&
            (5 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (
                        ["id", "created_at", "title", "body", "files"].some(
                            (prop: any) => key === prop,
                        )
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io3 = (input: any, _exceptionable: boolean = true): boolean =>
            "string" === typeof input.name &&
            (null === input.extension || "string" === typeof input.extension) &&
            "string" === typeof input.url &&
            (3 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (
                        ["name", "extension", "url"].some(
                            (prop: any) => key === prop,
                        )
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io4 = (input: any, _exceptionable: boolean = true): boolean =>
            "string" === typeof input.writer &&
            (null === input.answer ||
                ("object" === typeof input.answer &&
                    null !== input.answer &&
                    $io1(input.answer, true && _exceptionable))) &&
            "string" === typeof input.id &&
            "number" === typeof input.hit &&
            Number.isFinite(input.hit) &&
            Array.isArray(input.contents) &&
            input.contents.every(
                (elem: any, _index4: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io5(elem, true && _exceptionable),
            ) &&
            "string" === typeof input.created_at &&
            (6 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (
                        [
                            "writer",
                            "answer",
                            "id",
                            "hit",
                            "contents",
                            "created_at",
                        ].some((prop: any) => key === prop)
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io5 = (input: any, _exceptionable: boolean = true): boolean =>
            "number" === typeof input.score &&
            Number.isFinite(input.score) &&
            "string" === typeof input.id &&
            "string" === typeof input.created_at &&
            "string" === typeof input.title &&
            "string" === typeof input.body &&
            Array.isArray(input.files) &&
            input.files.every(
                (elem: any, _index5: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io3(elem, true && _exceptionable),
            ) &&
            (6 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (
                        [
                            "score",
                            "id",
                            "created_at",
                            "title",
                            "body",
                            "files",
                        ].some((prop: any) => key === prop)
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $iu0 = (input: any, _exceptionable: boolean = true): any =>
            (() => {
                if ($io4(input, false && _exceptionable))
                    return $io4(input, true && _exceptionable);
                if ($io0(input, false && _exceptionable))
                    return $io0(input, true && _exceptionable);
                return false;
            })();
        return "object" === typeof input && null !== input && $iu0(input, true);
    },
);
