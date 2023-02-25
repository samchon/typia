import typia from "../../../src";
import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_ToJsonTuple = _test_stringify("ToJsonTuple", ToJsonTuple.generate, (input) => ((input: ToJsonTuple): string => {
    const $string = (typia.stringify as any).string;
    const $number = (typia.stringify as any).number;
    const $so0 = (input: any) => `{"code":${$string(input.code)},"name":${$string(input.name)}}`;
    return `[${$string(input[0].toJSON())},${$number(input[1].toJSON())},${input[2].toJSON()},${$so0(input[3].toJSON())}]`;
})(input));
