import typia from "../../../src";
import { AtomicClass } from "../../structures/AtomicClass";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_AtomicClass = _test_stringify("AtomicClass", AtomicClass.generate, (input: AtomicClass): string => {
    const $string = (typia.createStringify as any).string;
    const $throws = (typia.createStringify as any).throws;
    return `[${input[0]},${input[1]},${input[2]},${input[3]},${input[4]},${input[5]},${$string(input[6])},${(() => {
        if ("string" === typeof input[7])
            return $string(input[7]);
        if ("string" === typeof input[7] || input[7] instanceof String)
            return $string(input[7]);
        $throws({
            expected: "(\"characters\" | String)",
            value: input[7]
        });
    })()},${$string(input[8])}]`;
});
