import typia from "../../../src";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_is } from "../internal/_test_is";
export const test_createIs_ToJsonAtomicUnion = _test_is("ToJsonAtomicUnion", ToJsonAtomicUnion.generate, (input: any): input is ToJsonAtomicUnion => {
    const $io0 = (input: any) => true;
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
});
