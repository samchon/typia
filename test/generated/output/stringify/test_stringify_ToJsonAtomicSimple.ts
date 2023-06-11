import typia from "../../../../src";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";
import { _test_stringify } from "../../../internal/_test_stringify";
export const test_stringify_ToJsonAtomicSimple = _test_stringify("ToJsonAtomicSimple", ToJsonAtomicSimple.generate, (input) => ((input: [ToJsonAtomicSimple.IToJson<boolean>, ToJsonAtomicSimple.IToJson<number>, ToJsonAtomicSimple.IToJson<string>]): string => {
    const $number = (typia.stringify as any).number;
    const $string = (typia.stringify as any).string;
    return `[${input[0].toJSON()},${$number(input[1].toJSON())},${$string(input[2].toJSON())}]`;
})(input));
