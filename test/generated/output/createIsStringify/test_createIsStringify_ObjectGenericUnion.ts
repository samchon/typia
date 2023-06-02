import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";

export const test_createIsStringify_ObjectGenericUnion = _test_isStringify(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input: ObjectGenericUnion): string | null => {
        const is: any = (input: any): input is ObjectGenericUnion => {
            const $io0: any = (input: any): boolean =>
                "string" === typeof input.writer &&
                (null === input.answer ||
                    ("object" === typeof input.answer &&
                        null !== input.answer &&
                        $io1(input.answer))) &&
                "string" === typeof input.id &&
                "number" === typeof input.hit &&
                Number.isFinite(input.hit) &&
                Array.isArray(input.contents) &&
                input.contents.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                ) &&
                "string" === typeof input.created_at;
            const $io1: any = (input: any): boolean =>
                "string" === typeof input.id &&
                "number" === typeof input.hit &&
                Number.isFinite(input.hit) &&
                Array.isArray(input.contents) &&
                input.contents.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                ) &&
                "string" === typeof input.created_at;
            const $io2: any = (input: any): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.created_at &&
                "string" === typeof input.title &&
                "string" === typeof input.body &&
                Array.isArray(input.files) &&
                input.files.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io3(elem),
                );
            const $io3: any = (input: any): boolean =>
                (null === input.extension ||
                    "string" === typeof input.extension) &&
                "string" === typeof input.name &&
                "string" === typeof input.url;
            const $io4: any = (input: any): boolean =>
                "string" === typeof input.writer &&
                (null === input.answer ||
                    ("object" === typeof input.answer &&
                        null !== input.answer &&
                        $io1(input.answer))) &&
                "string" === typeof input.id &&
                "number" === typeof input.hit &&
                Number.isFinite(input.hit) &&
                Array.isArray(input.contents) &&
                input.contents.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io5(elem),
                ) &&
                "string" === typeof input.created_at;
            const $io5: any = (input: any): boolean =>
                "number" === typeof input.score &&
                Number.isFinite(input.score) &&
                "string" === typeof input.id &&
                "string" === typeof input.created_at &&
                "string" === typeof input.title &&
                "string" === typeof input.body &&
                Array.isArray(input.files) &&
                input.files.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io3(elem),
                );
            const $iu0: any = (input: any): any =>
                (() => {
                    if ($io4(input)) return $io4(input);
                    if ($io0(input)) return $io0(input);
                    return false;
                })();
            return "object" === typeof input && null !== input && $iu0(input);
        };
        const stringify: any = (input: ObjectGenericUnion): string => {
            const $io0: any = (input: any): boolean =>
                "string" === typeof input.writer &&
                (null === input.answer ||
                    ("object" === typeof input.answer &&
                        null !== input.answer &&
                        $io1(input.answer))) &&
                "string" === typeof input.id &&
                "number" === typeof input.hit &&
                Array.isArray(input.contents) &&
                input.contents.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                ) &&
                "string" === typeof input.created_at;
            const $io1: any = (input: any): boolean =>
                "string" === typeof input.id &&
                "number" === typeof input.hit &&
                Array.isArray(input.contents) &&
                input.contents.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                ) &&
                "string" === typeof input.created_at;
            const $io2: any = (input: any): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.created_at &&
                "string" === typeof input.title &&
                "string" === typeof input.body &&
                Array.isArray(input.files) &&
                input.files.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io3(elem),
                );
            const $io3: any = (input: any): boolean =>
                (null === input.extension ||
                    "string" === typeof input.extension) &&
                "string" === typeof input.name &&
                "string" === typeof input.url;
            const $io4: any = (input: any): boolean =>
                "string" === typeof input.writer &&
                (null === input.answer ||
                    ("object" === typeof input.answer &&
                        null !== input.answer &&
                        $io1(input.answer))) &&
                "string" === typeof input.id &&
                "number" === typeof input.hit &&
                Array.isArray(input.contents) &&
                input.contents.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io5(elem),
                ) &&
                "string" === typeof input.created_at;
            const $io5: any = (input: any): boolean =>
                "number" === typeof input.score &&
                "string" === typeof input.id &&
                "string" === typeof input.created_at &&
                "string" === typeof input.title &&
                "string" === typeof input.body &&
                Array.isArray(input.files) &&
                input.files.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io3(elem),
                );
            const $string: any = (typia.createIsStringify as any).string;
            const $number: any = (typia.createIsStringify as any).number;
            const $throws: any = (typia.createIsStringify as any).throws;
            const $so0: any = (input: any): any =>
                `{"writer":${$string(input.writer)},"answer":${
                    null !== input.answer ? $so1(input.answer) : "null"
                },"id":${$string(input.id)},"hit":${$number(
                    input.hit,
                )},"contents":${(() =>
                    `[${input.contents
                        .map((elem: any) => $so2(elem))
                        .join(",")}]`)()},"created_at":${$string(
                    input.created_at,
                )}}`;
            const $so1: any = (input: any): any =>
                `{"id":${$string(input.id)},"hit":${$number(
                    input.hit,
                )},"contents":${(() =>
                    `[${input.contents
                        .map((elem: any) => $so2(elem))
                        .join(",")}]`)()},"created_at":${$string(
                    input.created_at,
                )}}`;
            const $so2: any = (input: any): any =>
                `{"id":${$string(input.id)},"created_at":${$string(
                    input.created_at,
                )},"title":${$string(input.title)},"body":${$string(
                    input.body,
                )},"files":${(() =>
                    `[${input.files
                        .map((elem: any) => $so3(elem))
                        .join(",")}]`)()}}`;
            const $so3: any = (input: any): any =>
                `{"extension":${
                    null !== input.extension ? $string(input.extension) : "null"
                },"name":${$string(input.name)},"url":${$string(input.url)}}`;
            const $so4: any = (input: any): any =>
                `{"writer":${$string(input.writer)},"answer":${
                    null !== input.answer ? $so1(input.answer) : "null"
                },"id":${$string(input.id)},"hit":${$number(
                    input.hit,
                )},"contents":${(() =>
                    `[${input.contents
                        .map((elem: any) => $so5(elem))
                        .join(",")}]`)()},"created_at":${$string(
                    input.created_at,
                )}}`;
            const $so5: any = (input: any): any =>
                `{"score":${$number(input.score)},"id":${$string(
                    input.id,
                )},"created_at":${$string(input.created_at)},"title":${$string(
                    input.title,
                )},"body":${$string(input.body)},"files":${(() =>
                    `[${input.files
                        .map((elem: any) => $so3(elem))
                        .join(",")}]`)()}}`;
            const $su0: any = (input: any): any =>
                (() => {
                    if ($io4(input)) return $so4(input);
                    if ($io0(input)) return $so0(input);
                    $throws({
                        expected:
                            "(ObjectGenericUnion.ISaleReview | ObjectGenericUnion.ISaleQuestion)",
                        value: input,
                    });
                })();
            return $su0(input);
        };
        return is(input) ? stringify(input) : null;
    },
    ObjectGenericUnion.SPOILERS,
);
