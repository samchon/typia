import typia from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_ArrayMatrix = _test_stringify("ArrayMatrix", ArrayMatrix.generate, (input: ArrayMatrix): string => {
    return `[${input.map((elem: any) => `[${elem.map((elem: any) => `[${elem.map((elem: any) => elem).join(",")}]`).join(",")}]`).join(",")}]`;
});
