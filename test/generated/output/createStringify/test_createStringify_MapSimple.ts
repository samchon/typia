import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { MapSimple } from "../../../structures/MapSimple";

export const test_createStringify_MapSimple = _test_stringify(
    "MapSimple",
    MapSimple.generate,
    (input: MapSimple): string => {
        const $io1 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            "number" === typeof input.age;
        const $string = (typia.createStringify as any).string;
        const $number = (typia.createStringify as any).number;
        const $so0 = (input: any): any =>
            '{"boolean":{},"number":{},"strings":{},"arrays":{},"objects":{}}';
        return $so0(input);
    },
);
