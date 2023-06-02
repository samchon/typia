import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";

export const test_stringify_ToJsonAtomicSimple = _test_stringify(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    (input) =>
        ((
            input: [
                ToJsonAtomicSimple.IToJson<boolean>,
                ToJsonAtomicSimple.IToJson<number>,
                ToJsonAtomicSimple.IToJson<string>,
            ],
        ): string => {
            const $number: any = (typia.stringify as any).number;
            const $string: any = (typia.stringify as any).string;
            return `[${input[0].toJSON()},${$number(
                input[1].toJSON(),
            )},${$string(input[2].toJSON())}]`;
        })(input),
);
