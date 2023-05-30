import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { MapSimple } from "../../../structures/MapSimple";
export const test_clone_MapSimple = _test_clone("MapSimple", MapSimple.generate, (input) => ((input: MapSimple): typia.Primitive<MapSimple> => {
    const $io1 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.name && "number" === typeof input.age;
    const $co0 = (input: any): any => ({
        boolean: input.boolean instanceof Map ? {} : input.boolean as any,
        number: input.number instanceof Map ? {} : input.number as any,
        strings: input.strings instanceof Map ? {} : input.strings as any,
        arrays: input.arrays instanceof Map ? {} : input.arrays as any,
        objects: input.objects instanceof Map ? {} : input.objects as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
})(input));
