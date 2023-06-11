import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_isStringify_ObjectPrimitive = _test_isStringify(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) =>
        ((input: ObjectPrimitive.IArticle): string | null => {
            const is = (input: any): input is ObjectPrimitive.IArticle => {
                const $io0 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    ("md" === input.extension ||
                        "html" === input.extension ||
                        "txt" === input.extension) &&
                    "string" === typeof input.title &&
                    "string" === typeof input.body &&
                    Array.isArray(input.files) &&
                    input.files.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    ) &&
                    "boolean" === typeof input.secret &&
                    "string" === typeof input.created_at;
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.extension &&
                    "string" === typeof input.url &&
                    "string" === typeof input.created_at;
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const stringify = (input: ObjectPrimitive.IArticle): string => {
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.extension &&
                    "string" === typeof input.url &&
                    "string" === typeof input.created_at;
                const $string = (typia.isStringify as any).string;
                const $throws = (typia.isStringify as any).throws;
                const $so0 = (input: any): any =>
                    `{"id":${$string(input.id)},"extension":${(() => {
                        if ("string" === typeof input.extension)
                            return $string(input.extension);
                        if ("string" === typeof input.extension)
                            return '"' + input.extension + '"';
                        $throws({
                            expected: '("html" | "md" | "txt")',
                            value: input.extension,
                        });
                    })()},"title":${$string(input.title)},"body":${$string(
                        input.body,
                    )},"files":${`[${input.files
                        .map((elem: any) => $so1(elem))
                        .join(",")}]`},"secret":${
                        input.secret
                    },"created_at":${$string(input.created_at)}}`;
                const $so1 = (input: any): any =>
                    `{"id":${$string(input.id)},"name":${$string(
                        input.name,
                    )},"extension":${$string(input.extension)},"url":${$string(
                        input.url,
                    )},"created_at":${$string(input.created_at)}}`;
                return $so0(input);
            };
            return is(input) ? stringify(input) : null;
        })(input),
    ObjectPrimitive.SPOILERS,
);
