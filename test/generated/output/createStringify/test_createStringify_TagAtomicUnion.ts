import typia from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_TagAtomicUnion = _test_stringify("TagAtomicUnion", TagAtomicUnion.generate, (input: TagAtomicUnion): string => {
    const $string = (typia.createStringify as any).string;
    const $throws = (typia.createStringify as any).throws;
    const $so0 = (input: any) => `{"value":${(() => {
        if ("string" === typeof input.value)
            return $string(input.value);
        if ("number" === typeof input.value)
            return input.value;
        $throws({
            expected: "(number | string)",
            value: input.value
        });
    })()}}`;
    return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
});
