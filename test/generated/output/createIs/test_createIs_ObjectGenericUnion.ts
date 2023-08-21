import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";

export const test_is_ObjectGenericUnion = _test_is(
    "ObjectGenericUnion",
)<ObjectGenericUnion>(ObjectGenericUnion)(
    (input: any): input is ObjectGenericUnion => {
        const $io0 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $iu0(input.value);
        const $io1 = (input: any): boolean =>
            "string" === typeof input.writer &&
            (null === input.answer ||
                ("object" === typeof input.answer &&
                    null !== input.answer &&
                    $io2(input.answer))) &&
            "string" === typeof input.id &&
            "number" === typeof input.hit &&
            Number.isFinite(input.hit) &&
            Array.isArray(input.contents) &&
            input.contents.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io3(elem),
            ) &&
            "string" === typeof input.created_at;
        const $io2 = (input: any): boolean =>
            "string" === typeof input.id &&
            "number" === typeof input.hit &&
            Number.isFinite(input.hit) &&
            Array.isArray(input.contents) &&
            input.contents.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io3(elem),
            ) &&
            "string" === typeof input.created_at;
        const $io3 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.created_at &&
            "string" === typeof input.title &&
            "string" === typeof input.body &&
            Array.isArray(input.files) &&
            input.files.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io4(elem),
            );
        const $io4 = (input: any): boolean =>
            "string" === typeof input.name &&
            (null === input.extension || "string" === typeof input.extension) &&
            "string" === typeof input.url;
        const $io5 = (input: any): boolean =>
            "string" === typeof input.writer &&
            (null === input.answer ||
                ("object" === typeof input.answer &&
                    null !== input.answer &&
                    $io2(input.answer))) &&
            "string" === typeof input.id &&
            "number" === typeof input.hit &&
            Number.isFinite(input.hit) &&
            Array.isArray(input.contents) &&
            input.contents.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io6(elem),
            ) &&
            "string" === typeof input.created_at;
        const $io6 = (input: any): boolean =>
            "number" === typeof input.score &&
            Number.isFinite(input.score) &&
            "string" === typeof input.id &&
            "string" === typeof input.created_at &&
            "string" === typeof input.title &&
            "string" === typeof input.body &&
            Array.isArray(input.files) &&
            input.files.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io4(elem),
            );
        const $iu0 = (input: any): any =>
            (() => {
                if ($io5(input)) return $io5(input);
                else if ($io1(input)) return $io1(input);
                else return false;
            })();
        return "object" === typeof input && null !== input && $io0(input);
    },
);
