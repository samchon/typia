import typia from "../../../../src";
import { ObjectTuple } from "../../../structures/ObjectTuple";
import { _test_stringify } from "../../../internal/_test_stringify";
export const test_stringify_ObjectTuple = _test_stringify("ObjectTuple", ObjectTuple.generate, (input) => ((input: [ObjectTuple.ISection, ObjectTuple.ICitizen]): string => {
    const $string = (typia.stringify as any).string;
    return `[${`{"id":${$string((input[0] as any).id)},"code":${$string((input[0] as any).code)},"name":${$string((input[0] as any).name)}}`},${`{"id":${$string((input[1] as any).id)},"mobile":${$string((input[1] as any).mobile)},"name":${$string((input[1] as any).name)}}`}]`;
})(input));
