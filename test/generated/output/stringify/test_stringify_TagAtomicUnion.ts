import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_stringify_TagAtomicUnion = _test_stringify(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) =>
        ((input: Array<TagAtomicUnion.Type>): string => {
            const $string = (typia.stringify as any).string;
            const $number = (typia.stringify as any).number;
            const $throws = (typia.stringify as any).throws;
            const $so0 = (input: any): any =>
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
            return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
        })(input),
);
