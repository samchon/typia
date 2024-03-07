import typia from "typia";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { TypeTagArray } from "../../../structures/TypeTagArray";
export const test_misc_createClone_TypeTagArray = _test_misc_clone(
  "TypeTagArray",
)<TypeTagArray>(TypeTagArray)(
  (input: TypeTagArray): import("typia").Resolved<TypeTagArray> => {
    const $io1 = (input: any): boolean =>
      Array.isArray(input.items) &&
      3 <= input.items.length &&
      input.items.length <= 3 &&
      input.items.every(
        (elem: any) =>
          "string" === typeof elem &&
          /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
            elem,
          ),
      ) &&
      Array.isArray(input.minItems) &&
      3 <= input.minItems.length &&
      input.minItems.every(
        (elem: any) => "number" === typeof elem && 3 <= elem,
      ) &&
      Array.isArray(input.both) &&
      3 <= input.both.length &&
      input.both.length <= 7 &&
      input.both.every(
        (elem: any) =>
          "string" === typeof elem &&
          /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
            elem,
          ),
      ) &&
      Array.isArray(input.equal) &&
      10 <= input.equal.length &&
      input.equal.length <= 10 &&
      input.equal.every(
        (elem: any) => "number" === typeof elem && 10 <= elem && elem <= 10,
      );
    const $cp0 = (input: any) =>
      input.map((elem: any) =>
        "object" === typeof elem && null !== elem ? $co1(elem) : (elem as any),
      );
    const $cp1 = (input: any) => input.map((elem: any) => elem as any);
    const $cp2 = (input: any) => input.map((elem: any) => elem as any);
    const $cp3 = (input: any) => input.map((elem: any) => elem as any);
    const $co0 = (input: any): any => ({
      value: Array.isArray(input.value)
        ? $cp0(input.value)
        : (input.value as any),
    });
    const $co1 = (input: any): any => ({
      items: Array.isArray(input.items)
        ? $cp1(input.items)
        : (input.items as any),
      minItems: Array.isArray(input.minItems)
        ? $cp2(input.minItems)
        : (input.minItems as any),
      both: Array.isArray(input.both) ? $cp1(input.both) : (input.both as any),
      equal: Array.isArray(input.equal)
        ? $cp3(input.equal)
        : (input.equal as any),
    });
    return "object" === typeof input && null !== input
      ? $co0(input)
      : (input as any);
  },
);
