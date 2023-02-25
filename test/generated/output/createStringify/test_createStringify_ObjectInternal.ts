import typia from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_ObjectInternal = _test_stringify("ObjectInternal", ObjectInternal.generate, (input: ObjectInternal): string => {
    const $string = (typia.createStringify as any).string;
    return `{"id":${$string(input.id)},"name":${$string(input.name)}}`;
});
