import typia from "../../../../src";
import { _test_http_isQuery } from "../../../internal/_test_http_isQuery";
import { ObjectHttpTypeTag } from "../../../structures/ObjectHttpTypeTag";

export const test_http_isQuery_ObjectHttpTypeTag = _test_http_isQuery(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)((input) =>
    ((
        input: string | URLSearchParams,
    ): typia.Resolved<ObjectHttpTypeTag> | null => {
        const is = (input: any): input is ObjectHttpTypeTag => {
            const $io0 = (input: any): boolean =>
                "number" === typeof input.int32 &&
                Math.floor(input.int32) === input.int32 &&
                -2147483648 <= input.int32 &&
                input.int32 <= 2147483647 &&
                "bigint" === typeof input.uint64 &&
                BigInt(0) <= input.uint64 &&
                "string" === typeof input.uuid &&
                /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                    input.uuid,
                ) &&
                Array.isArray(input.range) &&
                10 <= input.range.length &&
                input.range.length <= 100 &&
                input.range.every(
                    (elem: any) =>
                        "number" === typeof elem && 3 <= elem && elem <= 7,
                ) &&
                Array.isArray(input.length) &&
                10 <= input.length.length &&
                input.length.length <= 100 &&
                input.length.every(
                    (elem: any) =>
                        "string" === typeof elem &&
                        3 <= elem.length &&
                        elem.length <= 7,
                );
            return "object" === typeof input && null !== input && $io0(input);
        };
        const query = (
            input: string | URLSearchParams,
        ): typia.Resolved<ObjectHttpTypeTag> => {
            const $params = (typia.http.isQuery as any).params;
            const $number = (typia.http.isQuery as any).number;
            const $bigint = (typia.http.isQuery as any).bigint;
            const $string = (typia.http.isQuery as any).string;
            input = $params(input) as URLSearchParams;
            const output = {
                int32: $number(input.get("int32")),
                uint64: $bigint(input.get("uint64")),
                uuid: $string(input.get("uuid")),
                range: input.getAll("range").map((elem: any) => $number(elem)),
                length: input
                    .getAll("length")
                    .map((elem: any) => $string(elem)),
            };
            return output as any;
        };
        const output = query(input);
        if (!is(output)) return null;
        return output;
    })(input),
);
