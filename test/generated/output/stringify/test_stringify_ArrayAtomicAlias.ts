import typia from "../../../../src";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";
import { _test_stringify } from "../../../internal/_test_stringify";
export const test_stringify_ArrayAtomicAlias = _test_stringify("ArrayAtomicAlias", ArrayAtomicAlias.generate, (input) => ((input: [ArrayAtomicAlias.Alias<boolean>, ArrayAtomicAlias.Alias<number>, ArrayAtomicAlias.Alias<string>]): string => {
    const $number = (typia.stringify as any).number;
    const $string = (typia.stringify as any).string;
    return `[${`[${input[0].map((elem: any) => elem).join(",")}]`},${`[${input[1].map((elem: any) => $number(elem)).join(",")}]`},${`[${input[2].map((elem: any) => $string(elem)).join(",")}]`}]`;
})(input));
