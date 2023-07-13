import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { MapAlias } from "../../../structures/MapAlias";

export const test_json_stringify_MapAlias = _test_json_stringify(
    "MapAlias",
    MapAlias.generate,
    (input: MapAlias): string => {
        const $io1 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            "number" === typeof input.age;
        const $string = (typia.json.createStringify as any).string;
        const $number = (typia.json.createStringify as any).number;
        const $so0 = (input: any): any =>
            '{"boolean":{},"number":{},"strings":{},"arrays":{},"objects":{}}';
        return $so0(input);
    },
);
