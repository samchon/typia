import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { TagArray } from "../../../structures/TagArray";
export const test_createStringify_TagArray = _test_stringify("TagArray", TagArray.generate, (input: TagArray): string => {
    const $string = (typia.createStringify as any).string;
    const $number = (typia.createStringify as any).number;
    const $throws = (typia.createStringify as any).throws;
    const $is_uuid = (typia.createStringify as any).is_uuid;
    const $so0 = (input: any): any => `{"items":${`[${input.items.map((elem: any) => $string(elem)).join(",")}]`},"minItems":${`[${input.minItems.map((elem: any) => $number(elem)).join(",")}]`},"maxItems":${`[${input.maxItems.map((elem: any) => (() => {
        if ("string" === typeof elem)
            return $string(elem);
        if ("number" === typeof elem)
            return $number(elem);
        $throws({
            expected: "(number | string)",
            value: elem
        });
    })()).join(",")}]`},"both":${`[${input.both.map((elem: any) => $string(elem)).join(",")}]`}}`;
    return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
});
