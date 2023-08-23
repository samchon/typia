import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { SetUnion } from "../../../structures/SetUnion";

export const test_misc_isClone_SetUnion = _test_misc_isClone(
    "SetUnion",
)<SetUnion>(SetUnion)((input) =>
    ((input: any): typia.Resolved<SetUnion> | null => {
        const is = (input: any): input is SetUnion => {
            const $io0 = (input: any): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.name &&
                "number" === typeof input.age &&
                Number.isFinite(input.age);
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        elem instanceof Set &&
                        (() => {
                            const array = [...elem];
                            const top = elem.values().next().value;
                            if (0 === elem.size) return true;
                            const arrayPredicators = [
                                [
                                    (top: any): any => "boolean" === typeof top,
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                "boolean" === typeof elem,
                                        ),
                                ],
                                [
                                    (top: any): any =>
                                        "number" === typeof top &&
                                        Number.isFinite(top),
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                "number" === typeof elem &&
                                                Number.isFinite(elem),
                                        ),
                                ],
                                [
                                    (top: any): any => "string" === typeof top,
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                "string" === typeof elem,
                                        ),
                                ],
                                [
                                    (top: any): any =>
                                        Array.isArray(top) &&
                                        top.every(
                                            (elem: any) =>
                                                "number" === typeof elem &&
                                                Number.isFinite(elem),
                                        ),
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                Array.isArray(elem) &&
                                                elem.every(
                                                    (elem: any) =>
                                                        "number" ===
                                                            typeof elem &&
                                                        Number.isFinite(elem),
                                                ),
                                        ),
                                ],
                                [
                                    (top: any): any =>
                                        "object" === typeof top &&
                                        null !== top &&
                                        $io0(top),
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                "object" === typeof elem &&
                                                null !== elem &&
                                                $io0(elem),
                                        ),
                                ],
                            ];
                            const passed = arrayPredicators.filter(
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
                            return false;
                        })(),
                )
            );
        };
        const clone = (input: SetUnion): typia.Resolved<SetUnion> => {
            const $io0 = (input: any): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.name &&
                "number" === typeof input.age;
            const $throws = (typia.misc.isClone as any).throws;
            const $cp0 = (input: any) => input.map((elem: any) => elem as any);
            const $cp1 = (input: any) =>
                input.map((elem: any) =>
                    elem instanceof Set
                        ? (() => {
                              const array = [...elem];
                              const top = elem.values().next().value;
                              if (0 === elem.size) return new Set<any>();
                              const arrayPredicators = [
                                  [
                                      (top: any): any =>
                                          "boolean" === typeof top,
                                      (entire: any[]): any =>
                                          new Set<any>(
                                              entire.map(
                                                  (elem: any) => elem as any,
                                              ),
                                          ),
                                  ],
                                  [
                                      (top: any): any =>
                                          "number" === typeof top,
                                      (entire: any[]): any =>
                                          new Set<any>(
                                              entire.map(
                                                  (elem: any) => elem as any,
                                              ),
                                          ),
                                  ],
                                  [
                                      (top: any): any =>
                                          "string" === typeof top,
                                      (entire: any[]): any =>
                                          new Set<any>(
                                              entire.map(
                                                  (elem: any) => elem as any,
                                              ),
                                          ),
                                  ],
                                  [
                                      (top: any): any =>
                                          Array.isArray(top) &&
                                          top.every(
                                              (elem: any) =>
                                                  "number" === typeof elem,
                                          ),
                                      (entire: any[]): any =>
                                          new Set<any>(
                                              entire.map((elem: any) =>
                                                  Array.isArray(elem)
                                                      ? $cp0(elem)
                                                      : (elem as any),
                                              ),
                                          ),
                                  ],
                                  [
                                      (top: any): any =>
                                          "object" === typeof top &&
                                          null !== top &&
                                          $io0(top),
                                      (entire: any[]): any =>
                                          new Set<any>(
                                              entire.map((elem: any) =>
                                                  "object" === typeof elem &&
                                                  null !== elem
                                                      ? $co0(elem)
                                                      : (elem as any),
                                              ),
                                          ),
                                  ],
                              ];
                              const passed = arrayPredicators.filter(
                                  (pred: any) => pred[0](top),
                              );
                              if (1 === passed.length)
                                  return passed[0][1](array);
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
                                      "(Set<boolean> | Set<number> | Set<string> | Set<Array<number>> | Set<SetUnion.Person>)",
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
    })(input),
);
