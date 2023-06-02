import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { MapAlias } from "../../../structures/MapAlias";

export const test_stringify_MapAlias = _test_stringify(
    "MapAlias",
    MapAlias.generate,
    (input) =>
        ((input: MapAlias): string => {
            const $io1: any = (input: any): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.name &&
                "number" === typeof input.age;
            const $string: any = (typia.stringify as any).string;
            const $number: any = (typia.stringify as any).number;
            const $so0: any = (input: any): any =>
                '{"boolean":{},"number":{},"strings":{},"arrays":{},"objects":{}}';
            return $so0(input);
        })(input),
);
