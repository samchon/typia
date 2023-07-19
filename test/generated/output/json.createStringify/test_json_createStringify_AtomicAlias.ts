import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_json_stringify_AtomicAlias =
    _test_json_stringify<AtomicAlias>(AtomicAlias)(
        (input: AtomicAlias): string => {
            const $number = (typia.json.createStringify as any).number;
            const $string = (typia.json.createStringify as any).string;
            return `[${input[0]},${$number(input[1])},${$string(input[2])}]`;
        },
    );
