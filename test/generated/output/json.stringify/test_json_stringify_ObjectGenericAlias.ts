import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_json_stringify_ObjectGenericAlias = _test_json_stringify(
    "ObjectGenericAlias",
)<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
    ((input: ObjectGenericAlias): string => {
        const $string = (typia.json.stringify as any).string;
        return `{"value":${$string((input as any).value)}}`;
    })(input),
);
