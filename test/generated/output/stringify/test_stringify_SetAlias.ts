import typia from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_SetAlias = _test_stringify("SetAlias", SetAlias.generate, (input) => ((input: SetAlias): string => {
    const $string = (typia.stringify as any).string;
    const $number = (typia.stringify as any).number;
    const $io1 = (input: any) => "string" === typeof input.id && "string" === typeof input.name && "number" === typeof input.age;
    const $so0 = (input: any) => "{\"booleans\":{},\"numbers\":{},\"strings\":{},\"arrays\":{},\"objects\":{}}";
    return $so0(input);
})(input));
