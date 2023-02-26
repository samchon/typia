import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_createStringify_ObjectGenericAlias = _test_stringify(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input: ObjectGenericAlias.ISomething<string>): string => {
        const $string = (typia.createStringify as any).string;
        return `{"value":${$string(input.value)}}`;
    },
);
