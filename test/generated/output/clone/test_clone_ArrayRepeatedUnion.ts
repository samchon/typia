import typia from "../../../../src";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";
import { _test_clone } from "../../../internal/_test_clone";
export const test_clone_ArrayRepeatedUnion = _test_clone("ArrayRepeatedUnion", ArrayRepeatedUnion.generate, (input) => ((input: number | boolean | Array<string> | Array<ArrayRepeatedUnion> | Array<ArrayRepeatedUnion.IBox3D>): typia.Primitive<number | boolean | Array<string> | Array<ArrayRepeatedUnion> | Array<ArrayRepeatedUnion.IBox3D>> => {
    const $io0 = (input: any): boolean => "object" === typeof input.scale && null !== input.scale && $io1(input.scale) && ("object" === typeof input.position && null !== input.position && $io1(input.position)) && ("object" === typeof input.rotate && null !== input.rotate && $io1(input.rotate)) && ("object" === typeof input.pivot && null !== input.pivot && $io1(input.pivot));
    const $io1 = (input: any): boolean => "number" === typeof input.x && "number" === typeof input.y && "number" === typeof input.z;
    const $throws = (typia.clone as any).throws;
    const $cp0 = (input: any) => {
        const array = input;
        const top = input[0];
        if (0 === input.length)
            return [];
        const arrayPredicators = [
            [
                (top: any): any => "string" === typeof top,
                (entire: any[]): any => entire.map((elem: any) => elem as any)
            ],
            [
                (top: any): any => null !== top && undefined !== top && ("number" === typeof top || "boolean" === typeof top || Array.isArray(top) && ($cp0(top) || false)),
                (entire: any[]): any => $ca0(entire)
            ],
            [
                (top: any): any => "object" === typeof top && null !== top && $io0(top),
                (entire: any[]): any => entire.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem as any)
            ]
        ];
        const passed = arrayPredicators.filter((pred: any) => pred[0](top));
        if (1 === passed.length)
            return passed[0][1](array);
        else if (1 < passed.length)
            for (const pred of passed)
                if (array.every((value: any) => true === pred[0](value)))
                    return pred[1](array);
        $throws({
            expected: "(Array<string> | Array<ArrayRepeatedUnion> | Array<ArrayRepeatedUnion.IBox3D>)",
            value: input
        });
    };
    const $co0 = (input: any): any => ({
        scale: "object" === typeof input.scale && null !== input.scale ? $co1(input.scale) : input.scale as any,
        position: "object" === typeof input.position && null !== input.position ? $co1(input.position) : input.position as any,
        rotate: "object" === typeof input.rotate && null !== input.rotate ? $co1(input.rotate) : input.rotate as any,
        pivot: "object" === typeof input.pivot && null !== input.pivot ? $co1(input.pivot) : input.pivot as any
    });
    const $co1 = (input: any): any => ({
        x: input.x as any,
        y: input.y as any,
        z: input.z as any
    });
    const $ca0 = (input: any): any => input.map((elem: any) => Array.isArray(elem) ? $cp0(elem) : elem as any);
    return Array.isArray(input) ? $cp0(input) : input as any;
})(input));
