import typia from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_is } from "../internal/_test_is";
export const test_createIs_FunctionalObjectUnion = _test_is("FunctionalObjectUnion", FunctionalObjectUnion.generate, (input: any): input is FunctionalObjectUnion => {
    const $io0 = (input: any) => "number" === typeof input.x && "number" === typeof input.y && true;
    const $io1 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2)) && true;
    const $io2 = (input: any) => Array.isArray(input.points) && input.points.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)) && true;
    const $io3 = (input: any) => Array.isArray(input.points) && input.points.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)) && true && true;
    const $iu0 = (input: any) => (() => {
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
