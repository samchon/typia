import typia from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_TagArray = _test_stringify("TagArray", TagArray.generate, (input) => ((input: Type[]): string => {
    const $string = (typia.stringify as any).string;
    const $number = (typia.stringify as any).number;
    const $throws = (typia.stringify as any).throws;
    const $is_uuid = (typia.stringify as any).is_uuid;
    const $so0 = (input: any) => `{"items":${`[${input.items.map((elem: any) => $string(elem)).join(",")}]`},"minItems":${`[${input.minItems.map((elem: any) => $number(elem)).join(",")}]`},"maxItems":${`[${input.maxItems.map((elem: any) => (() => {
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
})(input));
