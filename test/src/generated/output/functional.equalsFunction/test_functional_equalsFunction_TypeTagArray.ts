import typia from "typia";
import { _test_functional_equalsFunction } from "../../../internal/_test_functional_equalsFunction";
import { TypeTagArray } from "../../../structures/TypeTagArray";
export const test_functional_equalsFunction_TypeTagArray =
  _test_functional_equalsFunction("TypeTagArray")(TypeTagArray)(
    (p: (input: TypeTagArray) => TypeTagArray) =>
      (input: TypeTagArray): TypeTagArray | null => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is TypeTagArray => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              Array.isArray(input.value) &&
              input.value.every(
                (elem: any, _index1: number) =>
                  "object" === typeof elem &&
                  null !== elem &&
                  $io1(elem, true && _exceptionable),
              ) &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["value"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io1 = (
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
              Array.isArray(input.both) &&
              3 <= input.both.length &&
              input.both.length <= 7 &&
              input.both.every(
                (elem: any, _index4: number) =>
                  "string" === typeof elem &&
                  /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                    elem,
                  ),
              ) &&
              Array.isArray(input.equal) &&
              10 <= input.equal.length &&
              input.equal.length <= 10 &&
              input.equal.every(
                (elem: any, _index5: number) =>
                  "number" === typeof elem && 10 <= elem && elem <= 10,
              ) &&
              (4 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["items", "minItems", "both", "equal"].some(
                      (prop: any) => key === prop,
                    )
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              "object" === typeof input && null !== input && $io0(input, true)
            );
          })(input)
        )
          return null;
        const result = p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is TypeTagArray => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
              (elem: any, _index1: number) =>
                "object" === typeof elem &&
                null !== elem &&
                $io1(elem, true && _exceptionable),
            ) &&
            (1 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["value"].some((prop: any) => key === prop)) return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
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
            Array.isArray(input.both) &&
            3 <= input.both.length &&
            input.both.length <= 7 &&
            input.both.every(
              (elem: any, _index4: number) =>
                "string" === typeof elem &&
                /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                  elem,
                ),
            ) &&
            Array.isArray(input.equal) &&
            10 <= input.equal.length &&
            input.equal.length <= 10 &&
            input.equal.every(
              (elem: any, _index5: number) =>
                "number" === typeof elem && 10 <= elem && elem <= 10,
            ) &&
            (4 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (
                  ["items", "minItems", "both", "equal"].some(
                    (prop: any) => key === prop,
                  )
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          return (
            "object" === typeof input && null !== input && $io0(input, true)
          );
        })(result)
          ? result
          : null;
      },
  );
