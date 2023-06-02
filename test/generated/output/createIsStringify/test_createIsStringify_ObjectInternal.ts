import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_createIsStringify_ObjectInternal = _test_isStringify(
    "ObjectInternal",
    ObjectInternal.generate,
    (input: ObjectInternal): string | null => {
        const is: any = (input: any): input is ObjectInternal => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof input.id &&
                "string" === typeof input.name
            );
        };
        const stringify: any = (input: ObjectInternal): string => {
            const $string: any = (typia.createIsStringify as any).string;
            return `{"id":${$string(input.id)},"name":${$string(input.name)}}`;
        };
        return is(input) ? stringify(input) : null;
    },
    ObjectInternal.SPOILERS,
);
