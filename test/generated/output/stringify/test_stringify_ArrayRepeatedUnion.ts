import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";

export const test_stringify_ArrayRepeatedUnion = _test_stringify(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    (input) =>
        ((
            input:
                | number
                | boolean
                | Array<string>
                | Array<ArrayRepeatedUnion>
                | Array<ObjectSimple.IBox3D>,
        ): string => {
            const $io0: any = (input: any): boolean =>
                "object" === typeof input.scale &&
                null !== input.scale &&
                $io1(input.scale) &&
                "object" === typeof input.position &&
                null !== input.position &&
                $io1(input.position) &&
                "object" === typeof input.rotate &&
                null !== input.rotate &&
                $io1(input.rotate) &&
                "object" === typeof input.pivot &&
                null !== input.pivot &&
                $io1(input.pivot);
            const $io1: any = (input: any): boolean =>
                "number" === typeof input.x &&
                "number" === typeof input.y &&
                "number" === typeof input.z;
            const $number: any = (typia.stringify as any).number;
            const $string: any = (typia.stringify as any).string;
            const $throws: any = (typia.stringify as any).throws;
            const $sp0: any = () => {
                const array: any = input;
                const top: any = array[0];
                if (0 === input.length) return true;
                const arrayPredicators: any = [
                    [
                        (top: any): any => "string" === typeof top,
                        (entire: any[]): any =>
                            `[${entire
                                .map((elem: any) => $string(elem))
                                .join(",")}]`,
                    ],
                    [
                        (top: any): any =>
                            null !== top &&
                            undefined !== top &&
                            ("number" === typeof top ||
                                "boolean" === typeof top ||
                                (Array.isArray(top) && $sp0(top))),
                        (entire: any[]): any => $sa0(entire),
                    ],
                    [
                        (top: any): any =>
                            "object" === typeof top &&
                            null !== top &&
                            $io0(top),
                        (entire: any[]): any =>
                            `[${entire
                                .map((elem: any) => $so0(elem))
                                .join(",")}]`,
                    ],
                ];
                const passed: any = arrayPredicators.filter((pred: any) =>
                    pred[0](top),
                );
                if (1 === passed.length) return passed[0][1](array);
                else if (1 < passed.length)
                    for (const pred of passed)
                        if (
                            array.every((value: any) => true === pred[0](value))
                        )
                            return pred[1](array);
                $throws({
                    expected:
                        "(Array<string> | Array<ArrayRepeatedUnion> | Array<ObjectSimple.IBox3D>)",
                    value: input,
                });
            };
            const $so0: any = (input: any): any =>
                `{"scale":${`{"x":${$number(input.scale.x)},"y":${$number(
                    input.scale.y,
                )},"z":${$number(
                    input.scale.z,
                )}}`},"position":${`{"x":${$number(
                    input.position.x,
                )},"y":${$number(input.position.y)},"z":${$number(
                    input.position.z,
                )}}`},"rotate":${`{"x":${$number(input.rotate.x)},"y":${$number(
                    input.rotate.y,
                )},"z":${$number(input.rotate.z)}}`},"pivot":${`{"x":${$number(
                    input.pivot.x,
                )},"y":${$number(input.pivot.y)},"z":${$number(
                    input.pivot.z,
                )}}`}}`;
            const $sa0: any = (input: any): any =>
                `[${input
                    .map((elem: any) =>
                        (() => {
                            if ("number" === typeof elem) return $number(elem);
                            if ("boolean" === typeof elem) return elem;
                            if (Array.isArray(elem)) return $sp0(elem);
                            $throws({
                                expected:
                                    "(Array<ArrayRepeatedUnion> | Array<ObjectSimple.IBox3D> | Array<string> | boolean | number)",
                                value: elem,
                            });
                        })(),
                    )
                    .join(",")}]`;
            return (() => {
                if ("number" === typeof input) return $number(input).toString();
                if ("boolean" === typeof input) return input.toString();
                if (Array.isArray(input)) return $sp0(input);
                $throws({
                    expected:
                        "(Array<ArrayRepeatedUnion> | Array<ObjectSimple.IBox3D> | Array<string> | boolean | number)",
                    value: input,
                });
            })();
        })(input),
);
