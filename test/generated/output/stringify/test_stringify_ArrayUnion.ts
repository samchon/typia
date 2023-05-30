import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ArrayUnion } from "../../../structures/ArrayUnion";
export const test_stringify_ArrayUnion = _test_stringify("ArrayUnion", ArrayUnion.generate, (input) => ((input: Array<ArrayUnion.IUnion>): string => {
    const $string = (typia.stringify as any).string;
    const $number = (typia.stringify as any).number;
    const $throws = (typia.stringify as any).throws;
    const $id0 = (input: any): any => Array.isArray(input) && (() => {
        if (0 === input.length)
            return true;
        const tupleList = [[(top: any) => "string" === typeof top, (top: any) => top.every((elem: any) => "string" === typeof elem)], [(top: any) => "boolean" === typeof top, (top: any) => top.every((elem: any) => "boolean" === typeof elem)], [(top: any) => "number" === typeof top, (top: any) => top.every((elem: any) => "number" === typeof elem)]];
        const front = input[0];
        const filtered = tupleList.filter(tuple => true === tuple[0](front));
        if (1 === filtered.length)
            return filtered[0][1](input);
        const array = input;
        if (1 < filtered.length)
            for (const tuple of filtered)
                if (array.every((value: any) => true === tuple[0](value)))
                    return tuple[1](array);
        return false;
    })();
    const $sd0 = (input: any): any => (() => {
        if (0 === input.length)
            return "[]";
        const tupleList = [[(top: any) => "string" === typeof top, (top: any) => `[${top.map((elem: any) => $string(elem)).join(",")}]`], [(top: any) => "boolean" === typeof top, (top: any) => `[${top.map((elem: any) => elem).join(",")}]`], [(top: any) => "number" === typeof top, (top: any) => `[${top.map((elem: any) => $number(elem)).join(",")}]`]];
        const front = input[0];
        const filtered = tupleList.filter(tuple => true === tuple[0](front));
        if (1 === filtered.length)
            return filtered[0][1](input);
        const array = input;
        if (1 < filtered.length)
            for (const tuple of filtered)
                if (array.every((value: any) => true === tuple[0](value)))
                    return tuple[1](array);
        $throws({
            expected: "(Array<string> | Array<boolean> | Array<number>)",
            value: input
        });
    })();
    return `[${input.map((elem: any) => (() => {
        if (Array.isArray(elem))
            return (() => {
                if (0 === elem.length)
                    return "[]";
                const tupleList = [[(top: any) => "string" === typeof top, (top: any) => `[${top.map((elem: any) => $string(elem)).join(",")}]`], [(top: any) => "boolean" === typeof top, (top: any) => `[${top.map((elem: any) => elem).join(",")}]`], [(top: any) => "number" === typeof top, (top: any) => `[${top.map((elem: any) => $number(elem)).join(",")}]`]];
                const front = elem[0];
                const filtered = tupleList.filter(tuple => true === tuple[0](front));
                if (1 === filtered.length)
                    return filtered[0][1](elem);
                const array = elem;
                if (1 < filtered.length)
                    for (const tuple of filtered)
                        if (array.every((value: any) => true === tuple[0](value)))
                            return tuple[1](array);
                $throws({
                    expected: "(Array<string> | Array<boolean> | Array<number>)",
                    value: elem
                });
            })();
        if (true)
            return $sd0(elem);
        $throws({
            expected: "(Array<boolean> | Array<number> | Array<string> | ArrayUnion.IUnion)",
            value: elem
        });
    })()).join(",")}]`;
})(input));
