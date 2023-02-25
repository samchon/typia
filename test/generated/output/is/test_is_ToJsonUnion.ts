import typia from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_is } from "../internal/_test_is";
export const test_is_ToJsonUnion = _test_is("ToJsonUnion", ToJsonUnion.generate, (input) => ((input: any): input is ToJsonUnion => {
    const $io0 = (input: any) => "number" === typeof input.id && "string" === typeof input.mobile && "string" === typeof input.name;
    const $io1 = (input: any) => true;
    const $io2 = (input: any) => true;
    const $io3 = (input: any) => true;
    const $iu0 = (input: any) => (() => {
        if (undefined !== input.id)
            return $io0(input);
        return (() => {
            if ($io1(input))
                return $io1(input);
            if ($io2(input))
                return $io2(input);
            if ($io3(input))
                return $io3(input);
            return false;
        })();
    })();
    return Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && ("string" === typeof elem || "number" === typeof elem || "object" === typeof elem && null !== elem && $iu0(elem)));
})(input));
