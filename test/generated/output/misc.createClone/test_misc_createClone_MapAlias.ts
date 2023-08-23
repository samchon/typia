import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { MapAlias } from "../../../structures/MapAlias";

export const test_misc_clone_MapAlias = _test_misc_clone("MapAlias")<MapAlias>(
    MapAlias,
)((input: MapAlias): typia.Resolved<MapAlias> => {
    const $io1 = (input: any): boolean =>
        "string" === typeof input.id &&
        "string" === typeof input.name &&
        "number" === typeof input.age;
    const $cp0 = (input: any) => input.map((elem: any) => elem as any);
    const $co0 = (input: any): any => ({
        boolean:
            input.boolean instanceof Map
                ? (() =>
                      new Map<any, any>(
                          [...input.boolean].map((elem: any) =>
                              Array.isArray(elem) &&
                              elem.length === 2 &&
                              "boolean" === typeof elem[0] &&
                              "number" === typeof elem[1]
                                  ? ([elem[0] as any, elem[1] as any] as any)
                                  : (elem as any),
                          ),
                      ))()
                : (input.boolean as any),
        number:
            input.number instanceof Map
                ? (() =>
                      new Map<any, any>(
                          [...input.number].map((elem: any) =>
                              Array.isArray(elem) &&
                              elem.length === 2 &&
                              "number" === typeof elem[0] &&
                              "number" === typeof elem[1]
                                  ? ([elem[0] as any, elem[1] as any] as any)
                                  : (elem as any),
                          ),
                      ))()
                : (input.number as any),
        strings:
            input.strings instanceof Map
                ? (() =>
                      new Map<any, any>(
                          [...input.strings].map((elem: any) =>
                              Array.isArray(elem) &&
                              elem.length === 2 &&
                              "string" === typeof elem[0] &&
                              "number" === typeof elem[1]
                                  ? ([elem[0] as any, elem[1] as any] as any)
                                  : (elem as any),
                          ),
                      ))()
                : (input.strings as any),
        arrays:
            input.arrays instanceof Map
                ? (() =>
                      new Map<any, any>(
                          [...input.arrays].map((elem: any) =>
                              Array.isArray(elem) &&
                              elem.length === 2 &&
                              Array.isArray(elem[0]) &&
                              elem[0].every(
                                  (elem: any) => "number" === typeof elem,
                              ) &&
                              "number" === typeof elem[1]
                                  ? ([
                                        Array.isArray(elem[0])
                                            ? $cp0(elem[0])
                                            : (elem[0] as any),
                                        elem[1] as any,
                                    ] as any)
                                  : (elem as any),
                          ),
                      ))()
                : (input.arrays as any),
        objects:
            input.objects instanceof Map
                ? (() =>
                      new Map<any, any>(
                          [...input.objects].map((elem: any) =>
                              Array.isArray(elem) &&
                              elem.length === 2 &&
                              "object" === typeof elem[0] &&
                              null !== elem[0] &&
                              $io1(elem[0]) &&
                              "number" === typeof elem[1]
                                  ? ([
                                        "object" === typeof elem[0] &&
                                        null !== elem[0]
                                            ? $co1(elem[0])
                                            : (elem[0] as any),
                                        elem[1] as any,
                                    ] as any)
                                  : (elem as any),
                          ),
                      ))()
                : (input.objects as any),
    });
    const $co1 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
        age: input.age as any,
    });
    return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
});
