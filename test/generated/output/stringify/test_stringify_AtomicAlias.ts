import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_stringify_AtomicAlias = _test_stringify(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) =>
        ((input: [boolean, number, string]): string => {
            const $number: any = (typia.stringify as any).number;
            const $string: any = (typia.stringify as any).string;
            return `[${input[0]},${$number(input[1])},${$string(input[2])}]`;
        })(input),
);
