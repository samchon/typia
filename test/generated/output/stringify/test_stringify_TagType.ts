import typia from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_TagType = _test_stringify("TagType", TagType.generate, (input) => ((input: Type[]): string => {
    const $number = (typia.stringify as any).number;
    return `[${input.map((elem: any) => `{"int":${$number(elem.int)},"uint":${$number(elem.uint)}}`).join(",")}]`;
})(input));
