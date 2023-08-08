import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_json_isStringify_ConstantAtomicSimple =
    _test_json_isStringify(
        "ConstantAtomicSimple",
        ConstantAtomicSimple.generate,
        (input: ConstantAtomicSimple): string | null => {
            const is = (input: any): input is ConstantAtomicSimple => {
                return (
                    Array.isArray(input) &&
                    input.length === 4 &&
                    false === input[0] &&
                    true === input[1] &&
                    2 === input[2] &&
                    "three" === input[3]
                );
            };
            const stringify = (input: ConstantAtomicSimple): string => {
                const $number = (typia.json.createIsStringify as any).number;
                const $string = (typia.json.createIsStringify as any).string;
                const $throws = (typia.json.createIsStringify as any).throws;
                return `[${input[0]},${input[1]},${$number(input[2])},${(() => {
                    if ("string" === typeof input[3]) return $string(input[3]);
                    if ("string" === typeof input[3])
                        return '"' + input[3] + '"';
                    $throws({
                        expected: '"three"',
                        value: input[3],
                    });
                })()}]`;
            };
            return is(input) ? stringify(input) : null;
        },
        ConstantAtomicSimple.SPOILERS,
    );
