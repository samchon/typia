import typia from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_is } from "../internal/_test_is";
export const test_is_TagArray = _test_is("TagArray", TagArray.generate, (input) => ((input: any): input is TagArray => {
    const $is_uuid = (typia.is as any).is_uuid;
    const $io0 = (input: any) => Array.isArray(input.items) && 3 === input.items.length && input.items.every((elem: any) => "string" === typeof elem && true === $is_uuid(elem)) && (Array.isArray(input.minItems) && 3 <= input.minItems.length && input.minItems.every((elem: any) => "number" === typeof elem && 3 <= elem)) && (Array.isArray(input.maxItems) && 7 >= input.maxItems.length && input.maxItems.every((elem: any) => "string" === typeof elem && 7 >= elem.length || "number" === typeof elem && 7 >= elem)) && (Array.isArray(input.both) && (3 <= input.both.length && 7 >= input.both.length) && input.both.every((elem: any) => "string" === typeof elem && true === $is_uuid(elem)));
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
})(input), TagArray.SPOILERS);
