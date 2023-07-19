import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";

export const test_json_stringify_ToJsonAtomicSimple =
    _test_json_stringify<ToJsonAtomicSimple>(ToJsonAtomicSimple)(
        (input: ToJsonAtomicSimple): string => {
            const $number = (typia.json.createStringify as any).number;
            const $string = (typia.json.createStringify as any).string;
            return `[${input[0].toJSON()},${$number(
                input[1].toJSON(),
            )},${$string(input[2].toJSON())}]`;
        },
    );
