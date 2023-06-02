import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_stringify_ArrayUnion = _test_stringify(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) =>
        ((input: Array<ArrayUnion.IUnion>): string => {
            const $string: any = (typia.stringify as any).string;
            const $number: any = (typia.stringify as any).number;
            const $throws: any = (typia.stringify as any).throws;
            return (() =>
                `[${input
                    .map((elem: any) =>
                        (() => {
                            const array: any = elem;
                            const top: any = array[0];
                            if (0 === elem.length) return true;
                            const arrayPredicators: any = [
                                [
                                    (top: any): any => "string" === typeof top,
                                    (entire: any[]): any =>
                                        `[${entire
                                            .map((elem: any) => $string(elem))
                                            .join(",")}]`,
                                ],
                                [
                                    (top: any): any => "boolean" === typeof top,
                                    (entire: any[]): any =>
                                        `[${entire
                                            .map((elem: any) => elem)
                                            .join(",")}]`,
                                ],
                                [
                                    (top: any): any => "number" === typeof top,
                                    (entire: any[]): any =>
                                        `[${entire
                                            .map((elem: any) => $number(elem))
                                            .join(",")}]`,
                                ],
                            ];
                            const passed: any = arrayPredicators.filter(
                                (pred: any) => pred[0](top),
                            );
                            if (1 === passed.length) return passed[0][1](array);
                            else if (1 < passed.length)
                                for (const pred of passed)
                                    if (
                                        array.every(
                                            (value: any) =>
                                                true === pred[0](value),
                                        )
                                    )
                                        return pred[1](array);
                            $throws({
                                expected:
                                    "(Array<string> | Array<boolean> | Array<number>)",
                                value: elem,
                            });
                        })(),
                    )
                    .join(",")}]`)();
        })(input),
);
