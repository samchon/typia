import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { MapUnion } from "../../../structures/MapUnion";

export const test_misc_clone_MapUnion = _test_misc_clone("MapUnion")<MapUnion>(
    MapUnion,
)((input) =>
    ((input: MapUnion): typia.Resolved<MapUnion> => {
        const $io0 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            "number" === typeof input.age;
        const $throws = (typia.misc.clone as any).throws;
        const $cp0 = (input: any) => input.map((elem: any) => elem as any);
        const $cp1 = (input: any) =>
            input.map((elem: any) =>
                elem instanceof Map
                    ? (() => {
                          const array = [...elem];
                          const top = elem.entries().next().value;
                          if (0 === elem.size) return new Map<any, any>();
                          const arrayPredicators = [
                              [
                                  (top: any[]): any =>
                                      "boolean" === typeof top[0] &&
                                      "number" === typeof top[1],
                                  (entire: any[]): any =>
                                      new Map<any, any>(
                                          entire.map((elem: any) =>
                                              Array.isArray(elem) &&
                                              elem.length === 2 &&
                                              "boolean" === typeof elem[0] &&
                                              "number" === typeof elem[1]
                                                  ? ([
                                                        elem[0] as any,
                                                        elem[1] as any,
                                                    ] as any)
                                                  : (elem as any),
                                          ),
                                      ),
                              ] as const,
                              [
                                  (top: any[]): any =>
                                      "number" === typeof top[0] &&
                                      "number" === typeof top[1],
                                  (entire: any[]): any =>
                                      new Map<any, any>(
                                          entire.map((elem: any) =>
                                              Array.isArray(elem) &&
                                              elem.length === 2 &&
                                              "number" === typeof elem[0] &&
                                              "number" === typeof elem[1]
                                                  ? ([
                                                        elem[0] as any,
                                                        elem[1] as any,
                                                    ] as any)
                                                  : (elem as any),
                                          ),
                                      ),
                              ] as const,
                              [
                                  (top: any[]): any =>
                                      "string" === typeof top[0] &&
                                      "number" === typeof top[1],
                                  (entire: any[]): any =>
                                      new Map<any, any>(
                                          entire.map((elem: any) =>
                                              Array.isArray(elem) &&
                                              elem.length === 2 &&
                                              "string" === typeof elem[0] &&
                                              "number" === typeof elem[1]
                                                  ? ([
                                                        elem[0] as any,
                                                        elem[1] as any,
                                                    ] as any)
                                                  : (elem as any),
                                          ),
                                      ),
                              ] as const,
                              [
                                  (top: any[]): any =>
                                      Array.isArray(top[0]) &&
                                      top[0].every(
                                          (elem: any) =>
                                              "number" === typeof elem,
                                      ) &&
                                      "number" === typeof top[1],
                                  (entire: any[]): any =>
                                      new Map<any, any>(
                                          entire.map((elem: any) =>
                                              Array.isArray(elem) &&
                                              elem.length === 2 &&
                                              Array.isArray(elem[0]) &&
                                              elem[0].every(
                                                  (elem: any) =>
                                                      "number" === typeof elem,
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
                                      ),
                              ] as const,
                              [
                                  (top: any[]): any =>
                                      "object" === typeof top[0] &&
                                      null !== top[0] &&
                                      $io0(top[0]) &&
                                      "number" === typeof top[1],
                                  (entire: any[]): any =>
                                      new Map<any, any>(
                                          entire.map((elem: any) =>
                                              Array.isArray(elem) &&
                                              elem.length === 2 &&
                                              "object" === typeof elem[0] &&
                                              null !== elem[0] &&
                                              $io0(elem[0]) &&
                                              "number" === typeof elem[1]
                                                  ? ([
                                                        "object" ===
                                                            typeof elem[0] &&
                                                        null !== elem[0]
                                                            ? $co0(elem[0])
                                                            : (elem[0] as any),
                                                        elem[1] as any,
                                                    ] as any)
                                                  : (elem as any),
                                          ),
                                      ),
                              ] as const,
                          ];
                          const passed = arrayPredicators.filter((pred: any) =>
                              pred[0](top),
                          );
                          if (1 === passed.length) return passed[0]![1](array);
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
                                  "(Map<boolean, number> | Map<number, number> | Map<string, number> | Map<Array<number>, number> | Map<MapUnion.Person, number>)",
                              value: elem,
                          });
                      })()
                    : (elem as any),
            );
        const $co0 = (input: any): any => ({
            id: input.id as any,
            name: input.name as any,
            age: input.age as any,
        });
        return Array.isArray(input) ? $cp1(input) : (input as any);
    })(input),
);
