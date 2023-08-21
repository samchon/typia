import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_json_stringify_ConstantAtomicSimple = _test_json_stringify(
    "ConstantAtomicSimple",
)<ConstantAtomicSimple>(ConstantAtomicSimple)(
    (input: ConstantAtomicSimple): string => {
        const $number = (typia.json.createStringify as any).number;
        const $string = (typia.json.createStringify as any).string;
        const $throws = (typia.json.createStringify as any).throws;
        return `[${input[0]},${input[1]},${$number(input[2])},${(() => {
            if ("string" === typeof input[3]) return $string(input[3]);
            if ("string" === typeof input[3]) return '"' + input[3] + '"';
            $throws({
                expected: '"three"',
                value: input[3],
            });
        })()}]`;
    },
);
