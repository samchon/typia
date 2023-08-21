import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { TagType } from "../../../structures/TagType";

export const test_json_isStringify_TagType = _test_json_isStringify(
    "TagType",
)<TagType>(TagType)((input) =>
    ((input: TagType): string | null => {
        const is = (input: any): input is TagType => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1 = (input: any): boolean =>
                "number" === typeof input.int &&
                Number.isFinite(input.int) &&
                Math.floor(input.int) === input.int &&
                -2147483648 <= input.int &&
                input.int <= 2147483647 &&
                "number" === typeof input.uint &&
                Number.isFinite(input.uint) &&
                Math.floor(input.uint) === input.uint &&
                0 <= input.uint &&
                input.uint <= 4294967295 &&
                "number" === typeof input.int32 &&
                Number.isFinite(input.int32) &&
                Math.floor(input.int32) === input.int32 &&
                -2147483648 <= input.int32 &&
                input.int32 <= 2147483647 &&
                "number" === typeof input.uint32 &&
                Number.isFinite(input.uint32) &&
                Math.floor(input.uint32) === input.uint32 &&
                0 <= input.uint32 &&
                input.uint32 <= 4294967295 &&
                "number" === typeof input.int64 &&
                Number.isFinite(input.int64) &&
                Math.floor(input.int64) === input.int64 &&
                -9223372036854776000 <= input.int64 &&
                input.int64 <= 9223372036854776000 &&
                "number" === typeof input.uint64 &&
                Number.isFinite(input.uint64) &&
                Math.floor(input.uint64) === input.uint64 &&
                0 <= input.uint64 &&
                input.uint64 <= 18446744073709552000 &&
                "number" === typeof input.float &&
                Number.isFinite(input.float) &&
                -1.175494351e38 <= input.float &&
                input.float <= 3.4028235e38;
            return "object" === typeof input && null !== input && $io0(input);
        };
        const stringify = (input: TagType): string => {
            const $io1 = (input: any): boolean =>
                "number" === typeof input.int &&
                Math.floor(input.int) === input.int &&
                -2147483648 <= input.int &&
                input.int <= 2147483647 &&
                "number" === typeof input.uint &&
                Math.floor(input.uint) === input.uint &&
                0 <= input.uint &&
                input.uint <= 4294967295 &&
                "number" === typeof input.int32 &&
                Math.floor(input.int32) === input.int32 &&
                -2147483648 <= input.int32 &&
                input.int32 <= 2147483647 &&
                "number" === typeof input.uint32 &&
                Math.floor(input.uint32) === input.uint32 &&
                0 <= input.uint32 &&
                input.uint32 <= 4294967295 &&
                "number" === typeof input.int64 &&
                Math.floor(input.int64) === input.int64 &&
                -9223372036854776000 <= input.int64 &&
                input.int64 <= 9223372036854776000 &&
                "number" === typeof input.uint64 &&
                Math.floor(input.uint64) === input.uint64 &&
                0 <= input.uint64 &&
                input.uint64 <= 18446744073709552000 &&
                "number" === typeof input.float &&
                -1.175494351e38 <= input.float &&
                input.float <= 3.4028235e38;
            const $number = (typia.json.isStringify as any).number;
            const $so0 = (input: any): any =>
                `{"value":${`[${input.value
                    .map(
                        (elem: any) =>
                            `{"int":${$number(
                                (elem as any).int,
                            )},"uint":${$number(
                                (elem as any).uint,
                            )},"int32":${$number(
                                (elem as any).int32,
                            )},"uint32":${$number(
                                (elem as any).uint32,
                            )},"int64":${$number(
                                (elem as any).int64,
                            )},"uint64":${$number(
                                (elem as any).uint64,
                            )},"float":${$number((elem as any).float)}}`,
                    )
                    .join(",")}]`}}`;
            return $so0(input);
        };
        return is(input) ? stringify(input) : null;
    })(input),
);
