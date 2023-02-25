import typia from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_validate } from "../internal/_test_validate";
export const test_createValidate_FunctionalArrayUnion = _test_validate("FunctionalArrayUnion", FunctionalArrayUnion.generate, (input: any): typia.IValidation<FunctionalArrayUnion> => {
    const errors = [] as any[];
    const $report = (typia.createValidate as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is FunctionalArrayUnion => {
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<(Array<null> | Array<number> | Array<string> | Array<unknown>)>",
            value: input
        })) && input.map((elem: any, _index1: number) => (Array.isArray(elem) || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Array<null> | Array<number> | Array<string> | Array<unknown>)",
            value: elem
        })) && (() => {
            if (0 === elem.length)
                return true;
            const tupleList = [[top => "string" === typeof top, top => top.map((elem: any, _index2: number) => "string" === typeof elem || $report(true, {
                        path: _path + "[" + _index1 + "][" + _index2 + "]",
                        expected: "string",
                        value: elem
                    })).every((flag: boolean) => flag)], [top => "number" === typeof top, top => top.map((elem: any, _index2: number) => "number" === typeof elem || $report(true, {
                        path: _path + "[" + _index1 + "][" + _index2 + "]",
                        expected: "number",
                        value: elem
                    })).every((flag: boolean) => flag)], [top => true, top => top.map((elem: any, _index2: number) => true || $report(true, {
                        path: _path + "[" + _index1 + "][" + _index2 + "]",
                        expected: "unknown",
                        value: elem
                    })).every((flag: boolean) => flag)], [top => undefined !== top && null === top, top => top.map((elem: any, _index2: number) => (undefined !== elem || $report(true, {
                        path: _path + "[" + _index1 + "][" + _index2 + "]",
                        expected: "null",
                        value: elem
                    })) && (null === elem || $report(true, {
                        path: _path + "[" + _index1 + "][" + _index2 + "]",
                        expected: "null",
                        value: elem
                    }))).every((flag: boolean) => flag)]];
            const front = elem[0];
            const filtered = tupleList.filter(tuple => true === tuple[0](front));
            if (1 === filtered.length)
                return filtered[0][1](elem);
            const array = elem;
            if (1 < filtered.length)
                for (const tuple of filtered)
                    if (array.every((value: any) => true === tuple[0](value)))
                        return tuple[1](array);
            return $report(_exceptionable, {
                path: _path + "[" + _index1 + "]",
                expected: "(Array<string> | Array<number> | Array<unknown> | Array<null>)",
                value: elem
            });
        })() || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Array<null> | Array<number> | Array<string> | Array<unknown>)",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<(Array<null> | Array<number> | Array<string> | Array<unknown>)>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<FunctionalArrayUnion>;
}, FunctionalArrayUnion.SPOILERS);
