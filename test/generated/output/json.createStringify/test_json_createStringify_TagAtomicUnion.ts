import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_json_stringify_TagAtomicUnion =
    _test_json_stringify<TagAtomicUnion>(TagAtomicUnion)(
        (input: TagAtomicUnion): string => {
            const $io1 = (input: any): boolean =>
                ("string" === typeof input.value &&
                    3 <= input.value.length &&
                    7 >= input.value.length) ||
                ("number" === typeof input.value && 3 <= input.value);
            const $string = (typia.json.createStringify as any).string;
            const $number = (typia.json.createStringify as any).number;
            const $throws = (typia.json.createStringify as any).throws;
            const $so0 = (input: any): any =>
                `{"value":${`[${input.value
                    .map((elem: any) => $so1(elem))
                    .join(",")}]`}}`;
            const $so1 = (input: any): any =>
                `{"value":${(() => {
                    if ("string" === typeof input.value)
                        return $string(input.value);
                    if ("number" === typeof input.value)
                        return $number(input.value);
                    $throws({
                        expected: "(number | string)",
                        value: input.value,
                    });
                })()}}`;
            return $so0(input);
        },
    );
