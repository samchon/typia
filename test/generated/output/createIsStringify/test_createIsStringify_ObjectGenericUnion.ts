import typia from "../../../../src";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ObjectGenericUnion = _test_isStringify(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input: ObjectGenericUnion.ISaleEntireArticle): string | null => {
        const is = (
            input: any,
        ): input is ObjectGenericUnion.ISaleEntireArticle => {
            const $io0 = (input: any): boolean =>
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
            const $io1 = (input: any): boolean =>
                "string" === typeof input.id &&
                "number" === typeof input.hit &&
                Number.isFinite(input.hit) &&
                Array.isArray(input.contents) &&
                input.contents.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                ) &&
                "string" === typeof input.created_at;
            const $io2 = (input: any): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.created_at &&
                "string" === typeof input.title &&
                "string" === typeof input.body &&
                Array.isArray(input.files) &&
                input.files.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io3(elem),
                );
            const $io3 = (input: any): boolean =>
                "string" === typeof input.name &&
                (null === input.extension ||
                    "string" === typeof input.extension) &&
                "string" === typeof input.url;
            const $io4 = (input: any): boolean =>
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
            const $io5 = (input: any): boolean =>
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
            const $iu0 = (input: any): any =>
                (() => {
                    if ($io0(input)) return $io0(input);
                    if ($io4(input)) return $io4(input);
                    return false;
                })();
            return "object" === typeof input && null !== input && $iu0(input);
        };
        const stringify = (
            input: ObjectGenericUnion.ISaleEntireArticle,
        ): string => {
            const $string = (typia.createIsStringify as any).string;
            const $number = (typia.createIsStringify as any).number;
            const $throws = (typia.createIsStringify as any).throws;
            const $io0 = (input: any): boolean =>
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
            const $io1 = (input: any): boolean =>
                "string" === typeof input.id &&
                "number" === typeof input.hit &&
                Array.isArray(input.contents) &&
                input.contents.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                ) &&
                "string" === typeof input.created_at;
            const $io2 = (input: any): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.created_at &&
                "string" === typeof input.title &&
                "string" === typeof input.body &&
                Array.isArray(input.files) &&
                input.files.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io3(elem),
                );
            const $io3 = (input: any): boolean =>
                "string" === typeof input.name &&
                (null === input.extension ||
                    "string" === typeof input.extension) &&
                "string" === typeof input.url;
            const $io4 = (input: any): boolean =>
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
            const $io5 = (input: any): boolean =>
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
            const $iu0 = (input: any): any => $io0(input) || $io4(input);
            const $so0 = (input: any): any =>
                `{"writer":${$string(input.writer)},"answer":${
                    null !== input.answer ? $so1(input.answer) : "null"
                },"id":${$string(input.id)},"hit":${$number(
                    input.hit,
                )},"contents":${`[${input.contents
                    .map((elem: any) => $so2(elem))
                    .join(",")}]`},"created_at":${$string(input.created_at)}}`;
            const $so1 = (input: any): any =>
                `{"id":${$string(input.id)},"hit":${$number(
                    input.hit,
                )},"contents":${`[${input.contents
                    .map((elem: any) => $so2(elem))
                    .join(",")}]`},"created_at":${$string(input.created_at)}}`;
            const $so2 = (input: any): any =>
                `{"id":${$string(input.id)},"created_at":${$string(
                    input.created_at,
                )},"title":${$string(input.title)},"body":${$string(
                    input.body,
                )},"files":${`[${input.files
                    .map((elem: any) => $so3(elem))
                    .join(",")}]`}}`;
            const $so3 = (input: any): any =>
                `{"name":${$string(input.name)},"extension":${
                    null !== input.extension ? $string(input.extension) : "null"
                },"url":${$string(input.url)}}`;
            const $so4 = (input: any): any =>
                `{"writer":${$string(input.writer)},"answer":${
                    null !== input.answer ? $so1(input.answer) : "null"
                },"id":${$string(input.id)},"hit":${$number(
                    input.hit,
                )},"contents":${`[${input.contents
                    .map((elem: any) => $so5(elem))
                    .join(",")}]`},"created_at":${$string(input.created_at)}}`;
            const $so5 = (input: any): any =>
                `{"score":${$number(input.score)},"id":${$string(
                    input.id,
                )},"created_at":${$string(input.created_at)},"title":${$string(
                    input.title,
                )},"body":${$string(input.body)},"files":${`[${input.files
                    .map((elem: any) => $so3(elem))
                    .join(",")}]`}}`;
            const $su0 = (input: any): any =>
                (() => {
                    if ($io0(input)) return $so0(input);
                    if ($io4(input)) return $so4(input);
                    $throws({
                        expected:
                            "(ObjectGenericUnion.ISaleQuestion | ObjectGenericUnion.ISaleReview)",
                        value: input,
                    });
                })();
            return $su0(input);
        };
        return is(input) ? stringify(input) : null;
    },
    ObjectGenericUnion.SPOILERS,
);
