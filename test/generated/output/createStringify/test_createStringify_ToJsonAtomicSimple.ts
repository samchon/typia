import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";

export const test_createStringify_ToJsonAtomicSimple = _test_stringify(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    (input: ToJsonAtomicSimple): string => {
        const $number = (typia.createStringify as any).number;
        const $string = (typia.createStringify as any).string;
        return `[${input[0].toJSON()},${$number(input[1].toJSON())},${$string(
            input[2].toJSON(),
        )}]`;
    },
);
