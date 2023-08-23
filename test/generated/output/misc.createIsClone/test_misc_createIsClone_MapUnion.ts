import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { MapUnion } from "../../../structures/MapUnion";

export const test_misc_isClone_MapUnion = _test_misc_isClone(
    "MapUnion",
)<MapUnion>(MapUnion)((input: any): typia.Resolved<MapUnion> | null => {
    const is = (input: any): input is MapUnion => {
        const $io0 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            "number" === typeof input.age &&
            Number.isFinite(input.age);
        return (
            Array.isArray(input) &&
            input.every(
                (elem: any) =>
                    elem instanceof Map &&
                    (() => {
                        const array = [...elem];
                        const top = elem.entries().next().value;
                        if (0 === elem.size) return true;
                        const arrayPredicators = [
                            [
                                (top: any): any =>
                                    "boolean" === typeof top[0] &&
                                    "number" === typeof top[1] &&
                                    Number.isFinite(top[1]),
                                (entire: any[]): any =>
                                    entire.every(
                                        (elem: any) =>
                                            Array.isArray(elem) &&
                                            elem.length === 2 &&
                                            "boolean" === typeof elem[0] &&
                                            "number" === typeof elem[1] &&
                                            Number.isFinite(elem[1]),
                                    ),
                            ],
                            [
                                (top: any): any =>
                                    "number" === typeof top[0] &&
                                    Number.isFinite(top[0]) &&
                                    "number" === typeof top[1] &&
                                    Number.isFinite(top[1]),
                                (entire: any[]): any =>
                                    entire.every(
                                        (elem: any) =>
                                            Array.isArray(elem) &&
                                            elem.length === 2 &&
                                            "number" === typeof elem[0] &&
                                            Number.isFinite(elem[0]) &&
                                            "number" === typeof elem[1] &&
                                            Number.isFinite(elem[1]),
                                    ),
                            ],
                            [
                                (top: any): any =>
                                    "string" === typeof top[0] &&
                                    "number" === typeof top[1] &&
                                    Number.isFinite(top[1]),
                                (entire: any[]): any =>
                                    entire.every(
                                        (elem: any) =>
                                            Array.isArray(elem) &&
                                            elem.length === 2 &&
                                            "string" === typeof elem[0] &&
                                            "number" === typeof elem[1] &&
                                            Number.isFinite(elem[1]),
                                    ),
                            ],
                            [
                                (top: any): any =>
                                    Array.isArray(top[0]) &&
                                    top[0].every(
                                        (elem: any) =>
                                            "number" === typeof elem &&
                                            Number.isFinite(elem),
                                    ) &&
                                    "number" === typeof top[1] &&
                                    Number.isFinite(top[1]),
                                (entire: any[]): any =>
                                    entire.every(
                                        (elem: any) =>
                                            Array.isArray(elem) &&
                                            elem.length === 2 &&
                                            Array.isArray(elem[0]) &&
                                            elem[0].every(
                                                (elem: any) =>
                                                    "number" === typeof elem &&
                                                    Number.isFinite(elem),
                                            ) &&
                                            "number" === typeof elem[1] &&
                                            Number.isFinite(elem[1]),
                                    ),
                            ],
                            [
                                (top: any): any =>
                                    "object" === typeof top[0] &&
                                    null !== top[0] &&
                                    $io0(top[0]) &&
                                    "number" === typeof top[1] &&
                                    Number.isFinite(top[1]),
                                (entire: any[]): any =>
                                    entire.every(
                                        (elem: any) =>
                                            Array.isArray(elem) &&
                                            elem.length === 2 &&
                                            "object" === typeof elem[0] &&
                                            null !== elem[0] &&
                                            $io0(elem[0]) &&
                                            "number" === typeof elem[1] &&
                                            Number.isFinite(elem[1]),
                                    ),
                            ],
                        ];
                        const passed = arrayPredicators.filter((pred: any) =>
                            pred[0](top),
                        );
                        if (1 === passed.length) return passed[0][1](array);
                        else if (1 < passed.length)
                            for (const pred of passed)
                                if (
                                    array.every(
                                        (value: any) => true === pred[0](value),
                                    )
                                )
                                    return pred[1](array);
                        return false;
                    })(),
            )
        );
    };
    const clone = (input: MapUnion): typia.Resolved<MapUnion> => {
        const $io0 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            "number" === typeof input.age;
        const $throws = (typia.misc.createIsClone as any).throws;
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
                                  (top: any): any =>
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
                              ],
                              [
                                  (top: any): any =>
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
                              ],
                              [
                                  (top: any): any =>
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
                              ],
                              [
                                  (top: any): any =>
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
                              ],
                              [
                                  (top: any): any =>
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
                              ],
                          ];
                          const passed = arrayPredicators.filter((pred: any) =>
                              pred[0](top),
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
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
});
