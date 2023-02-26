import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_createStringify_AtomicSimple = _test_stringify(
    "AtomicSimple",
    AtomicSimple.generate,
    (input: [boolean, number, string]): string => {
        const $number = (typia.createStringify as any).number;
        const $string = (typia.createStringify as any).string;
        return `[${input[0]},${$number(input[1])},${$string(input[2])}]`;
    },
);
