import typia from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_ArrayRecursive = _test_stringify("ArrayRecursive", ArrayRecursive.generate, (input: ICategory): string => {
    const $string = (typia.createStringify as any).string;
    const $io0 = (input: any) => Array.isArray(input.children) && input.children.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)) && "number" === typeof input.id && "string" === typeof input.code && "number" === typeof input.sequence && ("object" === typeof input.created_at && null !== input.created_at && $io1(input.created_at));
    const $io1 = (input: any) => "number" === typeof input.time && "number" === typeof input.zone;
    const $so0 = (input: any) => `{"children":${`[${input.children.map((elem: any) => $so0(elem)).join(",")}]`},"id":${input.id},"code":${$string(input.code)},"sequence":${input.sequence},"created_at":${`{"time":${input.created_at.time},"zone":${input.created_at.zone}}`}}`;
    return $so0(input);
});
