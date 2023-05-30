import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { AtomicSimple } from "../../../structures/AtomicSimple";
export const test_stringify_AtomicSimple = _test_stringify("AtomicSimple", AtomicSimple.generate, (input) => ((input: [boolean, number, string]): string => {
    const $number = (typia.stringify as any).number;
    const $string = (typia.stringify as any).string;
    return `[${input[0]},${$number(input[1])},${$string(input[2])}]`;
})(input));
