import typia from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_equals } from "../internal/_test_equals";
export const test_createEquals_FunctionalObjectUnion = _test_equals("FunctionalObjectUnion", FunctionalObjectUnion.generate, (input: any, _exceptionable: boolean): input is FunctionalObjectUnion => {
    const $io0 = (input: any, _exceptionable: boolean) => "number" === typeof input.x && "number" === typeof input.y && true && (3 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["x", "y", "distance"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io1 = (input: any, _exceptionable: boolean) => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1, true && _exceptionable) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2, true && _exceptionable)) && true && (3 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["p1", "p2", "length"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io2 = (input: any, _exceptionable: boolean) => Array.isArray(input.points) && input.points.every((elem: any, _index2: number) => "object" === typeof elem && null !== elem && $io0(elem, true && _exceptionable)) && true && (2 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["points", "length"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io3 = (input: any, _exceptionable: boolean) => Array.isArray(input.points) && input.points.every((elem: any, _index3: number) => "object" === typeof elem && null !== elem && $io0(elem, true && _exceptionable)) && true && true && (3 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["points", "length", "area"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $iu0 = (input: any, _exceptionable: boolean) => (() => {
        if (undefined !== input.x)
            return $io0(input, true && _exceptionable);
        if (undefined !== input.p1)
            return $io1(input, true && _exceptionable);
        if (undefined !== input.area)
            return $io3(input, true && _exceptionable);
        return $io2(input, true && _exceptionable);
    })();
    return Array.isArray(input) && input.every((elem: any, _index1: number) => "object" === typeof elem && null !== elem && $iu0(elem, true));
});
