import typia from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_ArrayAtomicAlias = _test_stringify("ArrayAtomicAlias", ArrayAtomicAlias.generate, (input: ArrayAtomicAlias): string => {
    const $string = (typia.createStringify as any).string;
    return `[${`[${input[0].map((elem: any) => elem).join(",")}]`},${`[${input[1].map((elem: any) => elem).join(",")}]`},${`[${input[2].map((elem: any) => $string(elem)).join(",")}]`}]`;
});
