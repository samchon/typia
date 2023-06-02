import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { AtomicClass } from "../../../structures/AtomicClass";

export const test_createStringify_AtomicClass = _test_stringify(
    "AtomicClass",
    AtomicClass.generate,
    (input: AtomicClass): string => {
        const $number: any = (typia.createStringify as any).number;
        const $string: any = (typia.createStringify as any).string;
        const $throws: any = (typia.createStringify as any).throws;
        return `[${input[0]},${input[1]},${input[2]},${$number(
            input[3],
        )},${$number(input[4])},${$number(input[5])},${$string(
            input[6],
        )},${(() => {
            if ("string" === typeof input[7]) return $string(input[7]);
            if ("string" === typeof input[7] || input[7] instanceof String)
                return $string(input[7]);
            $throws({
                expected: '("characters" | String)',
                value: input[7],
            });
        })()},${$string(input[8])}]`;
    },
);
