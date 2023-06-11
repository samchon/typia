import typia from "../../../../src";
import { MapUnion } from "../../../structures/MapUnion";
import { _test_stringify } from "../../../internal/_test_stringify";
export const test_createStringify_MapUnion = _test_stringify("MapUnion", MapUnion.generate, (input: MapUnion): string => {
    const $string = (typia.createStringify as any).string;
    const $number = (typia.createStringify as any).number;
    return `[${input.map((elem: any) => "{}").join(",")}]`;
});
