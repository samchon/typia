import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_json_stringify_AtomicAlias = _test_json_stringify(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) =>
        ((input: [boolean, number, string]): string => {
            const $number = (typia.json.stringify as any).number;
            const $string = (typia.json.stringify as any).string;
            return `[${input[0]},${$number(input[1])},${$string(input[2])}]`;
        })(input),
);
