import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_json_stringify_ObjectIntersection =
    _test_json_stringify<ObjectIntersection>(ObjectIntersection)((input) =>
        ((input: ObjectIntersection): string => {
            const $string = (typia.json.stringify as any).string;
            return `{"email":${$string((input as any).email)},"name":${$string(
                (input as any).name,
            )},"vulnerable":${(input as any).vulnerable}}`;
        })(input),
    );
