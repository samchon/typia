import typia from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_validateClone_MapAlias = _test_validateClone("MapAlias", MapAlias.generate, (input) => ((input: any): typia.IValidation<typia.Primitive<MapSimple>> => { const validate = (input: any): typia.IValidation<MapSimple> => {
    const errors = [] as any[];
    const $report = (typia.validateClone as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is MapSimple => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => [(input.boolean instanceof Map || $report(_exceptionable, {
                path: _path + ".boolean",
                expected: "Map<boolean, number>",
                value: input.boolean
            })) && [...input.boolean].map((elem: any, _index1: number) => (Array.isArray(elem) || $report(_exceptionable, {
                path: _path + ".boolean[" + _index1 + "]",
                expected: "[boolean, number]",
                value: elem
            })) && ((elem.length === 2 || $report(_exceptionable, {
                path: _path + ".boolean[" + _index1 + "]",
                expected: "[boolean, number]",
                value: elem
            })) && [
                "boolean" === typeof elem[0] || $report(_exceptionable, {
                    path: _path + ".boolean[" + _index1 + "][0]",
                    expected: "boolean",
                    value: elem[0]
                }),
                "number" === typeof elem[1] && !Number.isNaN(elem[1]) || $report(_exceptionable, {
                    path: _path + ".boolean[" + _index1 + "][1]",
                    expected: "number",
                    value: elem[1]
                })
            ].every((flag: boolean) => flag)) || $report(_exceptionable, {
                path: _path + ".boolean[" + _index1 + "]",
                expected: "[boolean, number]",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".boolean",
                expected: "Map<boolean, number>",
                value: input.boolean
            }), (input.number instanceof Map || $report(_exceptionable, {
                path: _path + ".number",
                expected: "Map<number, number>",
                value: input.number
            })) && [...input.number].map((elem: any, _index2: number) => (Array.isArray(elem) || $report(_exceptionable, {
                path: _path + ".number[" + _index2 + "]",
                expected: "[number, number]",
                value: elem
            })) && ((elem.length === 2 || $report(_exceptionable, {
                path: _path + ".number[" + _index2 + "]",
                expected: "[number, number]",
                value: elem
            })) && [
                "number" === typeof elem[0] && !Number.isNaN(elem[0]) || $report(_exceptionable, {
                    path: _path + ".number[" + _index2 + "][0]",
                    expected: "number",
                    value: elem[0]
                }),
                "number" === typeof elem[1] && !Number.isNaN(elem[1]) || $report(_exceptionable, {
                    path: _path + ".number[" + _index2 + "][1]",
                    expected: "number",
                    value: elem[1]
                })
            ].every((flag: boolean) => flag)) || $report(_exceptionable, {
                path: _path + ".number[" + _index2 + "]",
                expected: "[number, number]",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".number",
                expected: "Map<number, number>",
                value: input.number
            }), (input.strings instanceof Map || $report(_exceptionable, {
                path: _path + ".strings",
                expected: "Map<string, number>",
                value: input.strings
            })) && [...input.strings].map((elem: any, _index3: number) => (Array.isArray(elem) || $report(_exceptionable, {
                path: _path + ".strings[" + _index3 + "]",
                expected: "[string, number]",
                value: elem
            })) && ((elem.length === 2 || $report(_exceptionable, {
                path: _path + ".strings[" + _index3 + "]",
                expected: "[string, number]",
                value: elem
            })) && [
                "string" === typeof elem[0] || $report(_exceptionable, {
                    path: _path + ".strings[" + _index3 + "][0]",
                    expected: "string",
                    value: elem[0]
                }),
                "number" === typeof elem[1] && !Number.isNaN(elem[1]) || $report(_exceptionable, {
                    path: _path + ".strings[" + _index3 + "][1]",
                    expected: "number",
                    value: elem[1]
                })
            ].every((flag: boolean) => flag)) || $report(_exceptionable, {
                path: _path + ".strings[" + _index3 + "]",
                expected: "[string, number]",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".strings",
                expected: "Map<string, number>",
                value: input.strings
            }), (input.arrays instanceof Map || $report(_exceptionable, {
                path: _path + ".arrays",
                expected: "Map<Array<number>, number>",
                value: input.arrays
            })) && [...input.arrays].map((elem: any, _index4: number) => (Array.isArray(elem) || $report(_exceptionable, {
                path: _path + ".arrays[" + _index4 + "]",
                expected: "[Array<number>, number]",
                value: elem
            })) && ((elem.length === 2 || $report(_exceptionable, {
                path: _path + ".arrays[" + _index4 + "]",
                expected: "[Array<number>, number]",
                value: elem
            })) && [
                (Array.isArray(elem[0]) || $report(_exceptionable, {
                    path: _path + ".arrays[" + _index4 + "][0]",
                    expected: "Array<number>",
                    value: elem[0]
                })) && elem[0].map((elem: any, _index5: number) => "number" === typeof elem && !Number.isNaN(elem) || $report(_exceptionable, {
                    path: _path + ".arrays[" + _index4 + "][0][" + _index5 + "]",
                    expected: "number",
                    value: elem
                })).every((flag: boolean) => flag) || $report(_exceptionable, {
                    path: _path + ".arrays[" + _index4 + "][0]",
                    expected: "Array<number>",
                    value: elem[0]
                }),
                "number" === typeof elem[1] && !Number.isNaN(elem[1]) || $report(_exceptionable, {
                    path: _path + ".arrays[" + _index4 + "][1]",
                    expected: "number",
                    value: elem[1]
                })
            ].every((flag: boolean) => flag)) || $report(_exceptionable, {
                path: _path + ".arrays[" + _index4 + "]",
                expected: "[Array<number>, number]",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".arrays",
                expected: "Map<Array<number>, number>",
                value: input.arrays
            }), (input.objects instanceof Map || $report(_exceptionable, {
                path: _path + ".objects",
                expected: "Map<Resolve<MapSimple.Person>, number>",
                value: input.objects
            })) && [...input.objects].map((elem: any, _index6: number) => (Array.isArray(elem) || $report(_exceptionable, {
                path: _path + ".objects[" + _index6 + "]",
                expected: "[Resolve<MapSimple.Person>, number]",
                value: elem
            })) && ((elem.length === 2 || $report(_exceptionable, {
                path: _path + ".objects[" + _index6 + "]",
                expected: "[Resolve<MapSimple.Person>, number]",
                value: elem
            })) && [
                ("object" === typeof elem[0] && null !== elem[0] || $report(_exceptionable, {
                    path: _path + ".objects[" + _index6 + "][0]",
                    expected: "Resolve<MapSimple.Person>",
                    value: elem[0]
                })) && $vo1(elem[0], _path + ".objects[" + _index6 + "][0]", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".objects[" + _index6 + "][0]",
                    expected: "Resolve<MapSimple.Person>",
                    value: elem[0]
                }),
                "number" === typeof elem[1] && !Number.isNaN(elem[1]) || $report(_exceptionable, {
                    path: _path + ".objects[" + _index6 + "][1]",
                    expected: "number",
                    value: elem[1]
                })
            ].every((flag: boolean) => flag)) || $report(_exceptionable, {
                path: _path + ".objects[" + _index6 + "]",
                expected: "[Resolve<MapSimple.Person>, number]",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".objects",
                expected: "Map<Resolve<MapSimple.Person>, number>",
                value: input.objects
            })].every((flag: boolean) => flag);
        const $vo1 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input.id
            }), "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), "number" === typeof input.age && !Number.isNaN(input.age) || $report(_exceptionable, {
                path: _path + ".age",
                expected: "number",
                value: input.age
            })].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<MapSimple>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<MapSimple>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<MapSimple>;
}; const clone = (input: MapSimple): typia.Primitive<MapSimple> => {
    const $io1 = (input: any) => "string" === typeof input.id && "string" === typeof input.name && "number" === typeof input.age;
    const $co0 = (input: any) => ({
        boolean: input.boolean instanceof Map ? {} : input.boolean,
        number: input.number instanceof Map ? {} : input.number,
        strings: input.strings instanceof Map ? {} : input.strings,
        arrays: input.arrays instanceof Map ? {} : input.arrays,
        objects: input.objects instanceof Map ? {} : input.objects
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; })(input), MapAlias.SPOILERS);
