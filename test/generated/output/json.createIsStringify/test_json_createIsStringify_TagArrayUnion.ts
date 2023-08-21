import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { TagArrayUnion } from "../../../structures/TagArrayUnion";

export const test_json_isStringify_TagArrayUnion = _test_json_isStringify(
    "TagArrayUnion",
)<TagArrayUnion>(TagArrayUnion)((input: TagArrayUnion): string | null => {
    const is = (input: any): input is TagArrayUnion => {
        const $is_uuid = (typia.json.createIsStringify as any).is_uuid;
        const $io0 = (input: any): boolean =>
            Array.isArray(input.items) &&
            3 === input.items.length &&
            input.items.every(
                (elem: any) => "string" === typeof elem && $is_uuid(elem),
            ) &&
            Array.isArray(input.minItems) &&
            3 <= input.minItems.length &&
            input.minItems.every(
                (elem: any) =>
                    "number" === typeof elem &&
                    Number.isFinite(elem) &&
                    3 <= elem,
            ) &&
            Array.isArray(input.maxItems) &&
            7 >= input.maxItems.length &&
            input.maxItems.every(
                (elem: any) =>
                    ("string" === typeof elem && 7 >= elem.length) ||
                    ("number" === typeof elem &&
                        Number.isFinite(elem) &&
                        7 >= elem),
            ) &&
            Array.isArray(input.both) &&
            3 <= input.both.length &&
            7 >= input.both.length &&
            input.both.every(
                (elem: any) => "string" === typeof elem && $is_uuid(elem),
            );
        return (
            Array.isArray(input) &&
            input.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io0(elem),
            )
        );
    };
    const stringify = (input: TagArrayUnion): string => {
        const $string = (typia.json.createIsStringify as any).string;
        const $number = (typia.json.createIsStringify as any).number;
        const $throws = (typia.json.createIsStringify as any).throws;
        const $is_uuid = (typia.json.createIsStringify as any).is_uuid;
        const $so0 = (input: any): any =>
            `{"items":${`[${input.items
                .map((elem: any) => $string(elem))
                .join(",")}]`},"minItems":${`[${input.minItems
                .map((elem: any) => $number(elem))
                .join(",")}]`},"maxItems":${`[${input.maxItems
                .map((elem: any) =>
                    (() => {
                        if ("string" === typeof elem) return $string(elem);
                        if ("number" === typeof elem) return $number(elem);
                        $throws({
                            expected: "(number | string)",
                            value: elem,
                        });
                    })(),
                )
                .join(",")}]`},"both":${`[${input.both
                .map((elem: any) => $string(elem))
                .join(",")}]`}}`;
        return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
    };
    return is(input) ? stringify(input) : null;
});
