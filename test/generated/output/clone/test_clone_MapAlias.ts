import typia from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_MapAlias = _test_clone("MapAlias", MapAlias.generate, (input) => ((input: MapAlias): typia.Primitive<MapAlias> => {
    const $io1 = (input: any) => "string" === typeof input.id && "string" === typeof input.name && "number" === typeof input.age;
    const $co0 = (input: any) => ({
        boolean: input.boolean instanceof Map ? {} : input.boolean,
        number: input.number instanceof Map ? {} : input.number,
        strings: input.strings instanceof Map ? {} : input.strings,
        arrays: input.arrays instanceof Map ? {} : input.arrays,
        objects: input.objects instanceof Map ? {} : input.objects
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
})(input));
