import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_json_stringify_TagAtomicUnion =
    _test_json_stringify<TagAtomicUnion>(TagAtomicUnion)((input) =>
        ((input: Array<TagAtomicUnion.Type>): string => {
            const $string = (typia.json.stringify as any).string;
            const $number = (typia.json.stringify as any).number;
            const $throws = (typia.json.stringify as any).throws;
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
