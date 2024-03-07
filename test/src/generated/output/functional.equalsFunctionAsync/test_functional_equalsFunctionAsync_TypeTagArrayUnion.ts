import typia from "typia";
import { _test_functional_equalsFunctionAsync } from "../../../internal/_test_functional_equalsFunctionAsync";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";
export const test_functional_equalsFunctionAsync_TypeTagArrayUnion =
  _test_functional_equalsFunctionAsync("TypeTagArrayUnion")(TypeTagArrayUnion)(
    (p: (input: TypeTagArrayUnion) => Promise<TypeTagArrayUnion>) =>
      async (input: TypeTagArrayUnion): Promise<TypeTagArrayUnion | null> => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is TypeTagArrayUnion => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              Array.isArray(input.items) &&
              3 <= input.items.length &&
              input.items.length <= 3 &&
              input.items.every(
                (elem: any, _index2: number) =>
                  "string" === typeof elem &&
                  /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                    elem,
                  ),
              ) &&
              Array.isArray(input.minItems) &&
              3 <= input.minItems.length &&
              input.minItems.every(
                (elem: any, _index3: number) =>
                  "number" === typeof elem &&
                  Number.isFinite(elem) &&
                  3 <= elem,
              ) &&
              Array.isArray(input.maxItems) &&
              input.maxItems.length <= 7 &&
              input.maxItems.every(
                (elem: any, _index4: number) =>
                  ("string" === typeof elem && elem.length <= 7) ||
                  ("number" === typeof elem &&
                    Number.isFinite(elem) &&
                    elem <= 7),
              ) &&
              Array.isArray(input.both) &&
              3 <= input.both.length &&
              input.both.length <= 7 &&
              input.both.every(
                (elem: any, _index5: number) =>
                  "string" === typeof elem &&
                  /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                    elem,
                  ),
              ) &&
              (4 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["items", "minItems", "maxItems", "both"].some(
                      (prop: any) => key === prop,
                    )
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any, _index1: number) =>
                  "object" === typeof elem && null !== elem && $io0(elem, true),
              )
            );
          })(input)
        )
          return null;
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is TypeTagArrayUnion => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            Array.isArray(input.items) &&
            3 <= input.items.length &&
            input.items.length <= 3 &&
            input.items.every(
              (elem: any, _index2: number) =>
                "string" === typeof elem &&
                /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                  elem,
                ),
            ) &&
            Array.isArray(input.minItems) &&
            3 <= input.minItems.length &&
            input.minItems.every(
              (elem: any, _index3: number) =>
                "number" === typeof elem && Number.isFinite(elem) && 3 <= elem,
            ) &&
            Array.isArray(input.maxItems) &&
            input.maxItems.length <= 7 &&
            input.maxItems.every(
              (elem: any, _index4: number) =>
                ("string" === typeof elem && elem.length <= 7) ||
                ("number" === typeof elem &&
                  Number.isFinite(elem) &&
                  elem <= 7),
            ) &&
            Array.isArray(input.both) &&
            3 <= input.both.length &&
            input.both.length <= 7 &&
            input.both.every(
              (elem: any, _index5: number) =>
                "string" === typeof elem &&
                /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                  elem,
                ),
            ) &&
            (4 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (
                  ["items", "minItems", "maxItems", "both"].some(
                    (prop: any) => key === prop,
                  )
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any, _index1: number) =>
                "object" === typeof elem && null !== elem && $io0(elem, true),
            )
          );
        })(result)
          ? result
          : null;
      },
  );
