import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_stringify_ObjectPrimitive = _test_stringify(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) =>
        ((input: ObjectPrimitive.IArticle): string => {
            const $io1 = (input: any): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.name &&
                "string" === typeof input.extension &&
                "string" === typeof input.url &&
                "string" === typeof input.created_at;
            const $string = (typia.stringify as any).string;
            const $throws = (typia.stringify as any).throws;
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
        })(input),
);
