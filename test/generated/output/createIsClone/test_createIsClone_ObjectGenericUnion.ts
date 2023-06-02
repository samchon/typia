import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";

export const test_createIsClone_ObjectGenericUnion = _test_isClone(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input: any): typia.Primitive<ObjectGenericUnion> | null => {
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
        const clone: any = (
            input: ObjectGenericUnion,
        ): typia.Primitive<ObjectGenericUnion> => {
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
            const $throws: any = (typia.createIsClone as any).throws;
            const $co0: any = (input: any): any => ({
                writer: input.writer as any,
                answer:
                    "object" === typeof input.answer && null !== input.answer
                        ? $co1(input.answer)
                        : (input.answer as any),
                id: input.id as any,
                hit: input.hit as any,
                contents: Array.isArray(input.contents)
                    ? (() =>
                          input.contents.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co2(elem)
                                  : (elem as any),
                          ))()
                    : (input.contents as any),
                created_at: input.created_at as any,
            });
            const $co1: any = (input: any): any => ({
                id: input.id as any,
                hit: input.hit as any,
                contents: Array.isArray(input.contents)
                    ? (() =>
                          input.contents.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co2(elem)
                                  : (elem as any),
                          ))()
                    : (input.contents as any),
                created_at: input.created_at as any,
            });
            const $co2: any = (input: any): any => ({
                id: input.id as any,
                created_at: input.created_at as any,
                title: input.title as any,
                body: input.body as any,
                files: Array.isArray(input.files)
                    ? (() =>
                          input.files.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co3(elem)
                                  : (elem as any),
                          ))()
                    : (input.files as any),
            });
            const $co3: any = (input: any): any => ({
                extension: input.extension as any,
                name: input.name as any,
                url: input.url as any,
            });
            const $co4: any = (input: any): any => ({
                writer: input.writer as any,
                answer:
                    "object" === typeof input.answer && null !== input.answer
                        ? $co1(input.answer)
                        : (input.answer as any),
                id: input.id as any,
                hit: input.hit as any,
                contents: Array.isArray(input.contents)
                    ? (() =>
                          input.contents.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co5(elem)
                                  : (elem as any),
                          ))()
                    : (input.contents as any),
                created_at: input.created_at as any,
            });
            const $co5: any = (input: any): any => ({
                score: input.score as any,
                id: input.id as any,
                created_at: input.created_at as any,
                title: input.title as any,
                body: input.body as any,
                files: Array.isArray(input.files)
                    ? (() =>
                          input.files.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co3(elem)
                                  : (elem as any),
                          ))()
                    : (input.files as any),
            });
            return "object" === typeof input && null !== input
                ? $cu0(input)
                : (input as any);
        };
        if (!is(input)) return null;
        const output: any = clone(input);
        return output;
    },
    ObjectGenericUnion.SPOILERS,
);
