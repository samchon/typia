import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { TupleUnion } from "../../../structures/TupleUnion";
export const test_createValidate_TupleUnion = _test_validate("TupleUnion", TupleUnion.generate, (input: any): typia.IValidation<TupleUnion> => {
    const __is = (input: any): input is TupleUnion => {
        const $id0 = (input: any): any => Array.isArray(input) && (() => {
            const tupleList = [[(top: any) => input.length === 3 && ("number" === typeof input[0] && Number.isFinite(input[0])) && "string" === typeof input[1] && "boolean" === typeof input[2], (top: any) => top.length === 3 && ("number" === typeof top[0] && Number.isFinite(top[0])) && "string" === typeof top[1] && "boolean" === typeof top[2]], [(top: any) => input.length === 2 && "boolean" === typeof input[0] && ("number" === typeof input[1] && Number.isFinite(input[1])), (top: any) => top.length === 2 && "boolean" === typeof top[0] && ("number" === typeof top[1] && Number.isFinite(top[1]))], [(top: any) => input.length === 0, (top: any) => top.length === 0]];
            const front = input;
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
        return Array.isArray(input) && input.every((elem: any) => Array.isArray(elem) && (() => {
            const tupleList = [[(top: any) => elem.length === 3 && ("number" === typeof elem[0] && Number.isFinite(elem[0])) && "string" === typeof elem[1] && "boolean" === typeof elem[2], (top: any) => top.length === 3 && ("number" === typeof top[0] && Number.isFinite(top[0])) && "string" === typeof top[1] && "boolean" === typeof top[2]], [(top: any) => elem.length === 2 && "boolean" === typeof elem[0] && ("number" === typeof elem[1] && Number.isFinite(elem[1])), (top: any) => top.length === 2 && "boolean" === typeof top[0] && ("number" === typeof top[1] && Number.isFinite(top[1]))], [(top: any) => elem.length === 0, (top: any) => top.length === 0]];
            const front = elem;
            const filtered = tupleList.filter(tuple => true === tuple[0](front));
            if (1 === filtered.length)
                return filtered[0][1](elem);
            const array = elem;
            if (1 < filtered.length)
                for (const tuple of filtered)
                    if (array.every((value: any) => true === tuple[0](value)))
                        return tuple[1](array);
            return false;
        })() || $id0(elem));
    };
    const errors = [] as any[];
    const $report = (typia.createValidate as any).report(errors);
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is TupleUnion => {
            const $vd0 = (input: any, _path: string, _exceptionable: boolean = true): any => (Array.isArray(input) || $report(_exceptionable, {
                path: _path,
                expected: "([] | [boolean, number] | [number, string, boolean])",
                value: input
            })) && (() => {
                const tupleList = [[(top: any) => input.length === 3 && [
                            "number" === typeof input[0] && Number.isFinite(input[0]),
                            "string" === typeof input[1],
                            "boolean" === typeof input[2]
                        ].every((flag: boolean) => flag), (top: any) => (top.length === 3 || $report(_exceptionable, {
                            path: _path,
                            expected: "[number, string, boolean]",
                            value: top
                        })) && [
                            "number" === typeof top[0] && Number.isFinite(top[0]) || $report(_exceptionable, {
                                path: _path + [0],
                                expected: "number",
                                value: top[0]
                            }),
                            "string" === typeof top[1] || $report(_exceptionable, {
                                path: _path + [1],
                                expected: "string",
                                value: top[1]
                            }),
                            "boolean" === typeof top[2] || $report(_exceptionable, {
                                path: _path + [2],
                                expected: "boolean",
                                value: top[2]
                            })
                        ].every((flag: boolean) => flag)], [(top: any) => input.length === 2 && [
                            "boolean" === typeof input[0],
                            "number" === typeof input[1] && Number.isFinite(input[1])
                        ].every((flag: boolean) => flag), (top: any) => (top.length === 2 || $report(_exceptionable, {
                            path: _path,
                            expected: "[boolean, number]",
                            value: top
                        })) && [
                            "boolean" === typeof top[0] || $report(_exceptionable, {
                                path: _path + [0],
                                expected: "boolean",
                                value: top[0]
                            }),
                            "number" === typeof top[1] && Number.isFinite(top[1]) || $report(_exceptionable, {
                                path: _path + [1],
                                expected: "number",
                                value: top[1]
                            })
                        ].every((flag: boolean) => flag)], [(top: any) => input.length === 0 && [].every((flag: boolean) => flag), (top: any) => (top.length === 0 || $report(_exceptionable, {
                            path: _path,
                            expected: "[]",
                            value: top
                        })) && [].every((flag: boolean) => flag)]];
                const front = input;
                const filtered = tupleList.filter(tuple => true === tuple[0](front));
                if (1 === filtered.length)
                    return filtered[0][1](input);
                const array = input;
                if (1 < filtered.length)
                    for (const tuple of filtered)
                        if (array.every((value: any) => true === tuple[0](value)))
                            return tuple[1](array);
                return $report(_exceptionable, {
                    path: _path,
                    expected: "([number, string, boolean] | [boolean, number] | [])",
                    value: input
                });
            })() || $report(_exceptionable, {
                path: _path,
                expected: "([] | [boolean, number] | [number, string, boolean])",
                value: input
            });
            return (Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "Array<TupleUnion.Union>",
                value: input
            })) && input.map((elem: any, _index1: number) => (Array.isArray(elem) || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(TupleUnion.Union | [] | [boolean, number] | [number, string, boolean])",
                value: elem
            })) && (() => {
                const tupleList = [[(top: any) => elem.length === 3 && [
                            "number" === typeof elem[0] && Number.isFinite(elem[0]),
                            "string" === typeof elem[1],
                            "boolean" === typeof elem[2]
                        ].every((flag: boolean) => flag), (top: any) => (top.length === 3 || $report(true, {
                            path: _path + "[" + _index1 + "]",
                            expected: "[number, string, boolean]",
                            value: top
                        })) && [
                            "number" === typeof top[0] && Number.isFinite(top[0]) || $report(true, {
                                path: _path + "[" + _index1 + "][0]",
                                expected: "number",
                                value: top[0]
                            }),
                            "string" === typeof top[1] || $report(true, {
                                path: _path + "[" + _index1 + "][1]",
                                expected: "string",
                                value: top[1]
                            }),
                            "boolean" === typeof top[2] || $report(true, {
                                path: _path + "[" + _index1 + "][2]",
                                expected: "boolean",
                                value: top[2]
                            })
                        ].every((flag: boolean) => flag)], [(top: any) => elem.length === 2 && [
                            "boolean" === typeof elem[0],
                            "number" === typeof elem[1] && Number.isFinite(elem[1])
                        ].every((flag: boolean) => flag), (top: any) => (top.length === 2 || $report(true, {
                            path: _path + "[" + _index1 + "]",
                            expected: "[boolean, number]",
                            value: top
                        })) && [
                            "boolean" === typeof top[0] || $report(true, {
                                path: _path + "[" + _index1 + "][0]",
                                expected: "boolean",
                                value: top[0]
                            }),
                            "number" === typeof top[1] && Number.isFinite(top[1]) || $report(true, {
                                path: _path + "[" + _index1 + "][1]",
                                expected: "number",
                                value: top[1]
                            })
                        ].every((flag: boolean) => flag)], [(top: any) => elem.length === 0 && [].every((flag: boolean) => flag), (top: any) => (top.length === 0 || $report(true, {
                            path: _path + "[" + _index1 + "]",
                            expected: "[]",
                            value: top
                        })) && [].every((flag: boolean) => flag)]];
                const front = elem;
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
                    expected: "([number, string, boolean] | [boolean, number] | [])",
                    value: elem
                });
            })() || $vd0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(TupleUnion.Union | [] | [boolean, number] | [number, string, boolean])",
                value: elem
            })).every((flag: boolean) => flag) || $report(true, {
                path: _path + "",
                expected: "Array<TupleUnion.Union>",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}, TupleUnion.SPOILERS);
