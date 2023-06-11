import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_createStringify_AtomicIntersection = _test_stringify(
    "AtomicIntersection",
    AtomicIntersection.generate,
    (input: AtomicIntersection): string => {
        const $number = (typia.createStringify as any).number;
        const $string = (typia.createStringify as any).string;
        return `[${input[0]},${$number(input[1])},${$string(input[2])}]`;
    },
);
