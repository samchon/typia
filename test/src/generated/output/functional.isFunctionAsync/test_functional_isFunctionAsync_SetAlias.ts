import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { SetAlias } from "../../../structures/SetAlias";

export const test_functional_isFunctionAsync_SetAlias =
  _test_functional_isFunctionAsync("SetAlias")(SetAlias)(
    (p: (input: SetAlias) => Promise<SetAlias>) =>
      async (input: SetAlias): Promise<SetAlias | null> => {
        if (
          false ===
          ((input: any): input is SetAlias => {
            const $io0 = (input: any): boolean =>
              input.booleans instanceof Set &&
              (() =>
                [...input.booleans].every(
                  (elem: any) => "boolean" === typeof elem,
                ))() &&
              input.numbers instanceof Set &&
              (() =>
                [...input.numbers].every(
                  (elem: any) =>
                    "number" === typeof elem && Number.isFinite(elem),
                ))() &&
              input.strings instanceof Set &&
              (() =>
                [...input.strings].every(
                  (elem: any) => "string" === typeof elem,
                ))() &&
              input.arrays instanceof Set &&
              (() =>
                [...input.arrays].every(
                  (elem: any) =>
                    Array.isArray(elem) &&
                    elem.every(
                      (elem: any) =>
                        "number" === typeof elem && Number.isFinite(elem),
                    ),
                ))() &&
              input.objects instanceof Set &&
              (() =>
                [...input.objects].every(
                  (elem: any) =>
                    "object" === typeof elem && null !== elem && $io1(elem),
                ))();
            const $io1 = (input: any): boolean =>
              "string" === typeof input.id &&
              "string" === typeof input.name &&
              "number" === typeof input.age &&
              Number.isFinite(input.age);
            return "object" === typeof input && null !== input && $io0(input);
          })(input)
        )
          return null;
        const result = await p(input);
        return ((input: any): input is SetAlias => {
          const $io0 = (input: any): boolean =>
            input.booleans instanceof Set &&
            (() =>
              [...input.booleans].every(
                (elem: any) => "boolean" === typeof elem,
              ))() &&
            input.numbers instanceof Set &&
            (() =>
              [...input.numbers].every(
                (elem: any) =>
                  "number" === typeof elem && Number.isFinite(elem),
              ))() &&
            input.strings instanceof Set &&
            (() =>
              [...input.strings].every(
                (elem: any) => "string" === typeof elem,
              ))() &&
            input.arrays instanceof Set &&
            (() =>
              [...input.arrays].every(
                (elem: any) =>
                  Array.isArray(elem) &&
                  elem.every(
                    (elem: any) =>
                      "number" === typeof elem && Number.isFinite(elem),
                  ),
              ))() &&
            input.objects instanceof Set &&
            (() =>
              [...input.objects].every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io1(elem),
              ))();
          const $io1 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            "number" === typeof input.age &&
            Number.isFinite(input.age);
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );
