import typia from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_MapAlias = _test_stringify("MapAlias", MapAlias.generate, (input: MapAlias): string => {
    const $string = (typia.createStringify as any).string;
    const $io1 = (input: any) => "string" === typeof input.id && "string" === typeof input.name && "number" === typeof input.age;
    const $so0 = (input: any) => "{\"boolean\":{},\"number\":{},\"strings\":{},\"arrays\":{},\"objects\":{}}";
    return $so0(input);
});
