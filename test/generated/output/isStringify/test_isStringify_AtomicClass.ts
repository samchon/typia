import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { AtomicClass } from "../../../structures/AtomicClass";
export const test_isStringify_AtomicClass = _test_isStringify("AtomicClass", AtomicClass.generate, (input) => ((input: [Boolean, false | Boolean, boolean | Boolean, Number, Number | 1, number | Number, String, String | 'characters', string | String]): string | null => { const is = (input: any): input is [Boolean, false | Boolean, boolean | Boolean, Number, Number | 1, number | Number, String, String | 'characters', string | String] => {
    return Array.isArray(input) && (input.length === 9 && ("boolean" === typeof input[0] || input[0] instanceof Boolean) && ("boolean" === typeof input[1] || input[1] instanceof Boolean) && (null !== input[2] && undefined !== input[2] && ("boolean" === typeof input[2] || input[2] instanceof Boolean)) && ("number" === typeof input[3] || input[3] instanceof Number) && ("number" === typeof input[4] || input[4] instanceof Number) && (null !== input[5] && undefined !== input[5] && ("number" === typeof input[5] || input[5] instanceof Number)) && ("string" === typeof input[6] || input[6] instanceof String) && ("string" === typeof input[7] || input[7] instanceof String) && (null !== input[8] && undefined !== input[8] && ("string" === typeof input[8] || input[8] instanceof String)));
}; const stringify = (input: [Boolean, false | Boolean, boolean | Boolean, Number, Number | 1, number | Number, String, String | 'characters', string | String]): string => {
    const $number = (typia.isStringify as any).number;
    const $string = (typia.isStringify as any).string;
    const $throws = (typia.isStringify as any).throws;
    return `[${input[0]},${input[1]},${input[2]},${$number(input[3])},${$number(input[4])},${$number(input[5])},${$string(input[6])},${(() => {
        if ("string" === typeof input[7])
            return $string(input[7]);
        if ("string" === typeof input[7] || input[7] instanceof String)
            return $string(input[7]);
        $throws({
            expected: "(\"characters\" | String)",
            value: input[7]
        });
    })()},${$string(input[8])}]`;
}; return is(input) ? stringify(input) : null; })(input), AtomicClass.SPOILERS);
