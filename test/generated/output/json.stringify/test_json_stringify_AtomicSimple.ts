import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_json_stringify_AtomicSimple =
    _test_json_stringify<AtomicSimple>(AtomicSimple)((input) =>
        ((input: [boolean, number, string]): string => {
            const $number = (typia.json.stringify as any).number;
            const $string = (typia.json.stringify as any).string;
            return `[${input[0]},${$number(input[1])},${$string(input[2])}]`;
        })(input),
    );
