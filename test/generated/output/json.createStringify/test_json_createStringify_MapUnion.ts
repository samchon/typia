import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { MapUnion } from "../../../structures/MapUnion";

export const test_json_stringify_MapUnion = _test_json_stringify(
    "MapUnion",
    MapUnion.generate,
    (input: MapUnion): string => {
        const $string = (typia.json.createStringify as any).string;
        const $number = (typia.json.createStringify as any).number;
        return `[${input.map((elem: any) => "{}").join(",")}]`;
    },
);
