import typia from "typia";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";
export const test_misc_isClone_TupleHierarchical = _test_misc_isClone(
  "TupleHierarchical",
)<TupleHierarchical>(TupleHierarchical)((input) =>
  ((input: any): import("typia").Resolved<TupleHierarchical> | null => {
    const is = (input: any): input is TupleHierarchical => {
      return (
        Array.isArray(input) &&
        input.length === 5 &&
        "boolean" === typeof input[0] &&
        undefined !== input[1] &&
        null === input[1] &&
        "number" === typeof input[2] &&
        Number.isFinite(input[2]) &&
        Array.isArray(input[3]) &&
        input[3].length === 3 &&
        "boolean" === typeof input[3][0] &&
        undefined !== input[3][1] &&
        null === input[3][1] &&
        Array.isArray(input[3][2]) &&
        input[3][2].length === 2 &&
        "number" === typeof input[3][2][0] &&
        Number.isFinite(input[3][2][0]) &&
        Array.isArray(input[3][2][1]) &&
        input[3][2][1].length === 2 &&
        "boolean" === typeof input[3][2][1][0] &&
        "string" === typeof input[3][2][1][1] &&
        Array.isArray(input[4]) &&
        input[4].length === 2 &&
        "number" === typeof input[4][0] &&
        Number.isFinite(input[4][0]) &&
        Array.isArray(input[4][1]) &&
        input[4][1].every(
          (elem: any) =>
            Array.isArray(elem) &&
            elem.length === 3 &&
            "string" === typeof elem[0] &&
            "boolean" === typeof elem[1] &&
            Array.isArray(elem[2]) &&
            elem[2].every(
              (elem: any) =>
                Array.isArray(elem) &&
                elem.length === 3 &&
                "number" === typeof elem[0] &&
                Number.isFinite(elem[0]) &&
                "number" === typeof elem[1] &&
                Number.isFinite(elem[1]) &&
                Array.isArray(elem[2]) &&
                elem[2].length === 2 &&
                "boolean" === typeof elem[2][0] &&
                "string" === typeof elem[2][1],
            ),
        )
      );
    };
    const clone = (
      input: TupleHierarchical,
    ): import("typia").Resolved<TupleHierarchical> => {
      const $cp0 = (input: any) =>
        input.map((elem: any) =>
          Array.isArray(elem) &&
          elem.length === 3 &&
          "number" === typeof elem[0] &&
          "number" === typeof elem[1] &&
          Array.isArray(elem[2]) &&
          elem[2].length === 2 &&
          "boolean" === typeof elem[2][0] &&
          "string" === typeof elem[2][1]
            ? ([
                elem[0] as any,
                elem[1] as any,
                Array.isArray(elem[2]) &&
                elem[2].length === 2 &&
                "boolean" === typeof elem[2][0] &&
                "string" === typeof elem[2][1]
                  ? ([elem[2][0] as any, elem[2][1] as any] as any)
                  : (elem[2] as any),
              ] as any)
            : (elem as any),
        );
      const $cp1 = (input: any) =>
        input.map((elem: any) =>
          Array.isArray(elem) &&
          elem.length === 3 &&
          "string" === typeof elem[0] &&
          "boolean" === typeof elem[1] &&
          Array.isArray(elem[2]) &&
          elem[2].every(
            (elem: any) =>
              Array.isArray(elem) &&
              elem.length === 3 &&
              "number" === typeof elem[0] &&
              "number" === typeof elem[1] &&
              Array.isArray(elem[2]) &&
              elem[2].length === 2 &&
              "boolean" === typeof elem[2][0] &&
              "string" === typeof elem[2][1],
          )
            ? ([
                elem[0] as any,
                elem[1] as any,
                Array.isArray(elem[2]) ? $cp0(elem[2]) : (elem[2] as any),
              ] as any)
            : (elem as any),
        );
      return Array.isArray(input) &&
        input.length === 5 &&
        "boolean" === typeof input[0] &&
        undefined !== input[1] &&
        null === input[1] &&
        "number" === typeof input[2] &&
        Array.isArray(input[3]) &&
        input[3].length === 3 &&
        "boolean" === typeof input[3][0] &&
        undefined !== input[3][1] &&
        null === input[3][1] &&
        Array.isArray(input[3][2]) &&
        input[3][2].length === 2 &&
        "number" === typeof input[3][2][0] &&
        Array.isArray(input[3][2][1]) &&
        input[3][2][1].length === 2 &&
        "boolean" === typeof input[3][2][1][0] &&
        "string" === typeof input[3][2][1][1] &&
        Array.isArray(input[4]) &&
        input[4].length === 2 &&
        "number" === typeof input[4][0] &&
        Array.isArray(input[4][1]) &&
        input[4][1].every(
          (elem: any) =>
            Array.isArray(elem) &&
            elem.length === 3 &&
            "string" === typeof elem[0] &&
            "boolean" === typeof elem[1] &&
            Array.isArray(elem[2]) &&
            elem[2].every(
              (elem: any) =>
                Array.isArray(elem) &&
                elem.length === 3 &&
                "number" === typeof elem[0] &&
                "number" === typeof elem[1] &&
                Array.isArray(elem[2]) &&
                elem[2].length === 2 &&
                "boolean" === typeof elem[2][0] &&
                "string" === typeof elem[2][1],
            ),
        )
        ? ([
            input[0] as any,
            input[1] as any,
            input[2] as any,
            Array.isArray(input[3]) &&
            input[3].length === 3 &&
            "boolean" === typeof input[3][0] &&
            undefined !== input[3][1] &&
            null === input[3][1] &&
            Array.isArray(input[3][2]) &&
            input[3][2].length === 2 &&
            "number" === typeof input[3][2][0] &&
            Array.isArray(input[3][2][1]) &&
            input[3][2][1].length === 2 &&
            "boolean" === typeof input[3][2][1][0] &&
            "string" === typeof input[3][2][1][1]
              ? ([
                  input[3][0] as any,
                  input[3][1] as any,
                  Array.isArray(input[3][2]) &&
                  input[3][2].length === 2 &&
                  "number" === typeof input[3][2][0] &&
                  Array.isArray(input[3][2][1]) &&
                  input[3][2][1].length === 2 &&
                  "boolean" === typeof input[3][2][1][0] &&
                  "string" === typeof input[3][2][1][1]
                    ? ([
                        input[3][2][0] as any,
                        Array.isArray(input[3][2][1]) &&
                        input[3][2][1].length === 2 &&
                        "boolean" === typeof input[3][2][1][0] &&
                        "string" === typeof input[3][2][1][1]
                          ? ([
                              input[3][2][1][0] as any,
                              input[3][2][1][1] as any,
                            ] as any)
                          : (input[3][2][1] as any),
                      ] as any)
                    : (input[3][2] as any),
                ] as any)
              : (input[3] as any),
            Array.isArray(input[4]) &&
            input[4].length === 2 &&
            "number" === typeof input[4][0] &&
            Array.isArray(input[4][1]) &&
            input[4][1].every(
              (elem: any) =>
                Array.isArray(elem) &&
                elem.length === 3 &&
                "string" === typeof elem[0] &&
                "boolean" === typeof elem[1] &&
                Array.isArray(elem[2]) &&
                elem[2].every(
                  (elem: any) =>
                    Array.isArray(elem) &&
                    elem.length === 3 &&
                    "number" === typeof elem[0] &&
                    "number" === typeof elem[1] &&
                    Array.isArray(elem[2]) &&
                    elem[2].length === 2 &&
                    "boolean" === typeof elem[2][0] &&
                    "string" === typeof elem[2][1],
                ),
            )
              ? ([
                  input[4][0] as any,
                  Array.isArray(input[4][1])
                    ? $cp1(input[4][1])
                    : (input[4][1] as any),
                ] as any)
              : (input[4] as any),
          ] as any)
        : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  })(input),
);
