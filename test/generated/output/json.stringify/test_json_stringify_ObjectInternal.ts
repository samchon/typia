import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_json_stringify_ObjectInternal = _test_json_stringify(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) =>
        ((input: ObjectInternal): string => {
            const $string = (typia.json.stringify as any).string;
            return `{"id":${$string((input as any).id)},"name":${$string(
                (input as any).name,
            )}}`;
        })(input),
);
