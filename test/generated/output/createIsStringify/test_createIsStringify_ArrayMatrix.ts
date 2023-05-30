import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
export const test_createIsStringify_ArrayMatrix = _test_isStringify("ArrayMatrix", ArrayMatrix.generate, (input: ArrayMatrix): string | null => { const is = (input: any): input is ArrayMatrix => {
    return Array.isArray(input) && input.every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => "number" === typeof elem && Number.isFinite(elem))));
}; const stringify = (input: ArrayMatrix): string => {
    const $number = (typia.createIsStringify as any).number;
    return `[${input.map((elem: any) => `[${elem.map((elem: any) => `[${elem.map((elem: any) => $number(elem)).join(",")}]`).join(",")}]`).join(",")}]`;
}; return is(input) ? stringify(input) : null; }, ArrayMatrix.SPOILERS);
