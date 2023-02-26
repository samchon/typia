import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { MapUnion } from "../../../structures/MapUnion";

export const test_createClone_MapUnion = _test_clone(
    "MapUnion",
    MapUnion.generate,
    (input: Array<MapUnion.Union>): typia.Primitive<Array<MapUnion.Union>> => {
        return Array.isArray(input)
            ? input.map((elem: any) =>
                  elem instanceof Map ? {} : (elem as any),
              )
            : (input as any);
    },
);
