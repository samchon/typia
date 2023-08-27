import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";

export const test_json_stringify_TypeTagArrayUnion = _test_json_stringify(
    "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)((input: TypeTagArrayUnion): string => {
    const $string = (typia.json.createStringify as any).string;
    const $number = (typia.json.createStringify as any).number;
    const $throws = (typia.json.createStringify as any).throws;
    const $so0 = (input: any): any =>
        `{"items":${`[${input.items
            .map((elem: any) => $string(elem))
            .join(",")}]`},"minItems":${`[${input.minItems
            .map((elem: any) => $number(elem))
            .join(",")}]`},"maxItems":${`[${input.maxItems
            .map((elem: any) =>
                (() => {
                    if ("string" === typeof elem && elem.length <= 7)
                        return $string(elem);
                    if ("number" === typeof elem && elem <= 7)
                        return $number(elem);
                    $throws({
                        expected:
                            "((number & Maximum<7>) | (string & MaxLength<7>))",
                        value: elem,
                    });
                })(),
            )
            .join(",")}]`},"both":${`[${input.both
            .map((elem: any) => $string(elem))
            .join(",")}]`}}`;
    return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
});
