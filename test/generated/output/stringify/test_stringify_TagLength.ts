import typia from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_TagLength = _test_stringify("TagLength", TagLength.generate, (input) => ((input: Type[]): string => {
    const $string = (typia.stringify as any).string;
    const $so0 = (input: any) => `{"fixed":${$string(input.fixed)},"minimum":${$string(input.minimum)},"maximum":${$string(input.maximum)},"minimum_and_maximum":${$string(input.minimum_and_maximum)}}`;
    return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
})(input));
