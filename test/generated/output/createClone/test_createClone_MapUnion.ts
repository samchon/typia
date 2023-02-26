import typia from "../../../../src";
import { MapUnion } from "../../../structures/MapUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_MapUnion = _test_clone(
    "MapUnion",
    MapUnion.generate,
    (input: MapUnion): typia.Primitive<MapUnion> => {
        return Array.isArray(input)
            ? input.map((elem: any) =>
                  elem instanceof Map ? {} : (elem as any),
              )
            : (input as any);
    },
);
