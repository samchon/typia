import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { MapSimple } from "../../../structures/MapSimple";

export const test_json_stringify_MapSimple = _test_json_stringify(
    "MapSimple",
)<MapSimple>(MapSimple)((input: MapSimple): string => {
    const $io1 = (input: any): boolean =>
        "string" === typeof input.id &&
        "string" === typeof input.name &&
        "number" === typeof input.age;
    const $string = (typia.json.createStringify as any).string;
    const $number = (typia.json.createStringify as any).number;
    const $so0 = (input: any): any =>
        '{"boolean":{},"number":{},"strings":{},"arrays":{},"objects":{}}';
    return $so0(input);
});
