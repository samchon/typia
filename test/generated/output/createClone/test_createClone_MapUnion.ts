import typia from "../../../../src";
import { MapUnion } from "../../../structures/MapUnion";
import { _test_clone } from "../../../internal/_test_clone";
export const test_createClone_MapUnion = _test_clone("MapUnion", MapUnion.generate, (input: MapUnion): typia.Primitive<MapUnion> => {
    const $cp0 = (input: any) => input.map((elem: any) => elem instanceof Map ? {} : elem as any);
    return Array.isArray(input) ? $cp0(input) : input as any;
});
