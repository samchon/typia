import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_json_stringify_TypeTagFormat = _test_json_stringify(
    "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)((input) =>
    ((input: TypeTagFormat): string => {
        const $string = (typia.json.stringify as any).string;
        return `{"uuid":${$string((input as any).uuid)},"email":${$string(
            (input as any).email,
        )},"url":${$string((input as any).url)},"ipv4":${$string(
            (input as any).ipv4,
        )},"ipv6":${$string((input as any).ipv6)},"date":${$string(
            (input as any).date,
        )},"date_time":${$string((input as any).date_time)}}`;
    })(input),
);
