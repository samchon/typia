import typia from "../../../../src";
import { ObjectInternal } from "../../../structures/ObjectInternal";
import { _test_stringify } from "../../../internal/_test_stringify";
export const test_stringify_ObjectInternal = _test_stringify("ObjectInternal", ObjectInternal.generate, (input) => ((input: ObjectInternal): string => {
    const $string = (typia.stringify as any).string;
    return `{"id":${$string((input as any).id)},"name":${$string((input as any).name)}}`;
})(input));
