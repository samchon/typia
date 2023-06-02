import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_createStringify_TagAtomicUnion = _test_stringify(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input: TagAtomicUnion): string => {
        const $string: any = (typia.createStringify as any).string;
        const $number: any = (typia.createStringify as any).number;
        const $throws: any = (typia.createStringify as any).throws;
        const $so0: any = (input: any): any =>
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
        return (() => `[${input.map((elem: any) => $so0(elem)).join(",")}]`)();
    },
);
