import typia from "../../../../src";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ObjectGenericUnion = _test_isClone(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) =>
        ((
            input: any,
        ): typia.Primitive<ObjectGenericUnion.ISaleEntireArticle> | null => {
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
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    ) &&
                    "string" === typeof input.created_at;
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "number" === typeof input.hit &&
                    Number.isFinite(input.hit) &&
                    Array.isArray(input.contents) &&
                    input.contents.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
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
                            "object" === typeof elem &&
                            null !== elem &&
                            $io3(elem),
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
                            "object" === typeof elem &&
                            null !== elem &&
                            $io5(elem),
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
                            "object" === typeof elem &&
                            null !== elem &&
                            $io3(elem),
                    );
                const $iu0 = (input: any): any =>
                    (() => {
                        if ($io0(input)) return $io0(input);
                        if ($io4(input)) return $io4(input);
                        return false;
                    })();
                return (
                    "object" === typeof input && null !== input && $iu0(input)
                );
            };
            const clone = (
                input: ObjectGenericUnion.ISaleEntireArticle,
            ): typia.Primitive<ObjectGenericUnion.ISaleEntireArticle> => {
                const $throws = (typia.isClone as any).throws;
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
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    ) &&
                    "string" === typeof input.created_at;
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "number" === typeof input.hit &&
                    Array.isArray(input.contents) &&
                    input.contents.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
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
                            "object" === typeof elem &&
                            null !== elem &&
                            $io3(elem),
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
                            "object" === typeof elem &&
                            null !== elem &&
                            $io5(elem),
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
                            "object" === typeof elem &&
                            null !== elem &&
                            $io3(elem),
                    );
                const $iu0 = (input: any): any => $io0(input) || $io4(input);
                const $co0 = (input: any): any => ({
                    writer: input.writer as any,
                    answer:
                        "object" === typeof input.answer &&
                        null !== input.answer
                            ? $co1(input.answer)
                            : (input.answer as any),
                    id: input.id as any,
                    hit: input.hit as any,
                    contents: Array.isArray(input.contents)
                        ? input.contents.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co2(elem)
                                  : (elem as any),
                          )
                        : (input.contents as any),
                    created_at: input.created_at as any,
                });
                const $co1 = (input: any): any => ({
                    id: input.id as any,
                    hit: input.hit as any,
                    contents: Array.isArray(input.contents)
                        ? input.contents.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co2(elem)
                                  : (elem as any),
                          )
                        : (input.contents as any),
                    created_at: input.created_at as any,
                });
                const $co2 = (input: any): any => ({
                    id: input.id as any,
                    created_at: input.created_at as any,
                    title: input.title as any,
                    body: input.body as any,
                    files: Array.isArray(input.files)
                        ? input.files.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co3(elem)
                                  : (elem as any),
                          )
                        : (input.files as any),
                });
                const $co3 = (input: any): any => ({
                    name: input.name as any,
                    extension: input.extension as any,
                    url: input.url as any,
                });
                const $co4 = (input: any): any => ({
                    writer: input.writer as any,
                    answer:
                        "object" === typeof input.answer &&
                        null !== input.answer
                            ? $co1(input.answer)
                            : (input.answer as any),
                    id: input.id as any,
                    hit: input.hit as any,
                    contents: Array.isArray(input.contents)
                        ? input.contents.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co5(elem)
                                  : (elem as any),
                          )
                        : (input.contents as any),
                    created_at: input.created_at as any,
                });
                const $co5 = (input: any): any => ({
                    score: input.score as any,
                    id: input.id as any,
                    created_at: input.created_at as any,
                    title: input.title as any,
                    body: input.body as any,
                    files: Array.isArray(input.files)
                        ? input.files.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co3(elem)
                                  : (elem as any),
                          )
                        : (input.files as any),
                });
                const $cu0 = (input: any): any =>
                    (() => {
                        if ($io0(input)) return $co0(input);
                        if ($io4(input)) return $co4(input);
                        $throws({
                            expected:
                                "(ObjectGenericUnion.ISaleQuestion | ObjectGenericUnion.ISaleReview)",
                            value: input,
                        });
                    })();
                return "object" === typeof input && null !== input
                    ? $cu0(input)
                    : (input as any);
            };
            if (!is(input)) return null;
            const output = clone(input);
            return output;
        })(input),
    ObjectGenericUnion.SPOILERS,
);
