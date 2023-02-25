import typia from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_ObjectUnionDouble = _test_clone("ObjectUnionDouble", ObjectUnionDouble.generate, (input) => ((input: ObjectUnionDouble): typia.Primitive<ObjectUnionDouble> => {
    const $throws = (typia.clone as any).throws;
    const $io0 = (input: any) => "object" === typeof input.value && null !== input.value && $io1(input.value) && ("object" === typeof input.child && null !== input.child && $iu0(input.child));
    const $io1 = (input: any) => "number" === typeof input.x;
    const $io2 = (input: any) => "object" === typeof input.value && null !== input.value && $io3(input.value);
    const $io3 = (input: any) => "boolean" === typeof input.y;
    const $io4 = (input: any) => "object" === typeof input.value && null !== input.value && $io5(input.value);
    const $io5 = (input: any) => "number" === typeof input.y;
    const $io6 = (input: any) => "object" === typeof input.value && null !== input.value && $io7(input.value) && ("object" === typeof input.child && null !== input.child && $iu1(input.child));
    const $io7 = (input: any) => "string" === typeof input.x;
    const $io8 = (input: any) => "object" === typeof input.value && null !== input.value && $io9(input.value);
    const $io9 = (input: any) => "string" === typeof input.y;
    const $io10 = (input: any) => "object" === typeof input.value && null !== input.value && $io11(input.value);
    const $io11 = (input: any) => Array.isArray(input.y) && input.y.every((elem: any) => "number" === typeof elem);
    const $iu0 = (input: any) => $io2(input) || $io4(input);
    const $iu1 = (input: any) => $io8(input) || $io10(input);
    const $iu2 = (input: any) => $io0(input) || $io6(input);
    const $co0 = (input: any) => ({
        value: "object" === typeof input.value && null !== input.value ? $co1(input.value) : input.value,
        child: "object" === typeof input.child && null !== input.child ? $cu0(input.child) : input.child
    });
    const $co1 = (input: any) => ({
        x: input.x
    });
    const $co2 = (input: any) => ({
        value: "object" === typeof input.value && null !== input.value ? $co3(input.value) : input.value
    });
    const $co3 = (input: any) => ({
        y: input.y
    });
    const $co4 = (input: any) => ({
        value: "object" === typeof input.value && null !== input.value ? $co5(input.value) : input.value
    });
    const $co5 = (input: any) => ({
        y: input.y
    });
    const $co6 = (input: any) => ({
        value: "object" === typeof input.value && null !== input.value ? $co7(input.value) : input.value,
        child: "object" === typeof input.child && null !== input.child ? $cu1(input.child) : input.child
    });
    const $co7 = (input: any) => ({
        x: input.x
    });
    const $co8 = (input: any) => ({
        value: "object" === typeof input.value && null !== input.value ? $co9(input.value) : input.value
    });
    const $co9 = (input: any) => ({
        y: input.y
    });
    const $co10 = (input: any) => ({
        value: "object" === typeof input.value && null !== input.value ? $co11(input.value) : input.value
    });
    const $co11 = (input: any) => ({
        y: Array.isArray(input.y) ? input.y.map((elem: any) => elem) : input.y
    });
    const $cu0 = (input: any) => (() => {
        if ($io2(input))
            return $co2(input);
        if ($io4(input))
            return $co4(input);
        $throws({
            expected: "(ObjectUnionDouble.IAA | ObjectUnionDouble.IAB)",
            value: input
        });
    })();
    const $cu1 = (input: any) => (() => {
        if ($io8(input))
            return $co8(input);
        if ($io10(input))
            return $co10(input);
        $throws({
            expected: "(ObjectUnionDouble.IBA | ObjectUnionDouble.IBB)",
            value: input
        });
    })();
    const $cu2 = (input: any) => (() => {
        if ($io0(input))
            return $co0(input);
        if ($io6(input))
            return $co6(input);
        $throws({
            expected: "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
            value: input
        });
    })();
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $cu2(elem) : elem) : input;
})(input));
