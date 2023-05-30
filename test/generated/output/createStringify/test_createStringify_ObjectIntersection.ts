import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";
export const test_createStringify_ObjectIntersection = _test_stringify("ObjectIntersection", ObjectIntersection.generate, (input: ObjectIntersection): string => {
    const $string = (typia.createStringify as any).string;
    return `{"email":${$string(input.email)},"name":${$string(input.name)},"vulnerable":${input.vulnerable}}`;
});
