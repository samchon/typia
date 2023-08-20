import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_stringify_AtomicIntersection = _test_stringify(
    "AtomicIntersection",
    AtomicIntersection.generate,
    (input) =>
        ((input: AtomicIntersection): string => {
            const $number = (typia.stringify as any).number;
            const $string = (typia.stringify as any).string;
            return `[${input[0]},${$number(input[1])},${$string(input[2])}]`;
        })(input),
);
