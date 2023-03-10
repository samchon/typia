import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ObjectTuple } from "../../../structures/ObjectTuple";

export const test_createStringify_ObjectTuple = _test_stringify(
    "ObjectTuple",
    ObjectTuple.generate,
    (input: ObjectTuple): string => {
        const $string = (typia.createStringify as any).string;
        return `[${`{"id":${$string(input[0].id)},"code":${$string(
            input[0].code,
        )},"name":${$string(input[0].name)}}`},${`{"id":${$string(
            input[1].id,
        )},"mobile":${$string(input[1].mobile)},"name":${$string(
            input[1].name,
        )}}`}]`;
    },
);
