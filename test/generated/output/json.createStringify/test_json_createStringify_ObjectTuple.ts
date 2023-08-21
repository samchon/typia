import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectTuple } from "../../../structures/ObjectTuple";

export const test_json_stringify_ObjectTuple = _test_json_stringify(
    "ObjectTuple",
)<ObjectTuple>(ObjectTuple)((input: ObjectTuple): string => {
    const $string = (typia.json.createStringify as any).string;
    return `[${`{"id":${$string((input[0] as any).id)},"code":${$string(
        (input[0] as any).code,
    )},"name":${$string((input[0] as any).name)}}`},${`{"id":${$string(
        (input[1] as any).id,
    )},"mobile":${$string((input[1] as any).mobile)},"name":${$string(
        (input[1] as any).name,
    )}}`}]`;
});
