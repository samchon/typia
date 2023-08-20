import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { MapUnion } from "../../../structures/MapUnion";

export const test_clone_MapUnion = _test_clone(
    "MapUnion",
    MapUnion.generate,
    (input) =>
        ((input: MapUnion): typia.Primitive<MapUnion> => {
            const $cp0 = (input: any) =>
                input.map((elem: any) =>
                    elem instanceof Map ? {} : (elem as any),
                );
            return Array.isArray(input) ? $cp0(input) : (input as any);
        })(input),
);
