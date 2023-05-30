import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { FunctionalObjectUnion } from "../../../structures/FunctionalObjectUnion";
export const test_createIs_FunctionalObjectUnion = _test_is("FunctionalObjectUnion", FunctionalObjectUnion.generate, (input: any): input is FunctionalObjectUnion => {
    const $io0 = (input: any): boolean => "number" === typeof input.x && Number.isFinite(input.x) && ("number" === typeof input.y && Number.isFinite(input.y)) && "function" === typeof input.distance;
    const $io1 = (input: any): boolean => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2)) && "function" === typeof input.length;
    const $io2 = (input: any): boolean => Array.isArray(input.points) && input.points.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)) && "function" === typeof input.length;
    const $io3 = (input: any): boolean => Array.isArray(input.points) && input.points.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)) && "function" === typeof input.length && "function" === typeof input.area;
    const $iu0 = (input: any): any => (() => {
        if (undefined !== input.x)
            return $io0(input);
        if (undefined !== input.p1)
            return $io1(input);
        if (undefined !== input.area)
            return $io3(input);
        return $io2(input);
    })();
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem));
}, FunctionalObjectUnion.SPOILERS);
