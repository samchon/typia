import typia from "../../../../src";
import { TagTuple } from "../../../structures/TagTuple";
import { _test_stringify } from "../../../internal/_test_stringify";
export const test_createStringify_TagTuple = _test_stringify("TagTuple", TagTuple.generate, (input: TagTuple): string => {
    const $string = (typia.createStringify as any).string;
    const $number = (typia.createStringify as any).number;
    const $so0 = (input: any): any => `{"tuple":${`[${$string(input.tuple[0])},${$number(input.tuple[1])},${`[${input.tuple[2].map((elem: any) => $string(elem)).join(",")}]`},${`[${input.tuple[3].map((elem: any) => $number(elem)).join(",")}]`}]`}}`;
    return $so0(input);
});
