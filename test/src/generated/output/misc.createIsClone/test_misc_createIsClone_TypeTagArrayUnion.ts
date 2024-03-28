import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";

export const test_misc_createIsClone_TypeTagArrayUnion = _test_misc_isClone(
  "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)(
  (input: any): import("typia").Resolved<TypeTagArrayUnion> | null => {
    const is = (input: any): input is TypeTagArrayUnion => {
      const $io0 = (input: any): boolean =>
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
          (elem: any) =>
            "number" === typeof elem && Number.isFinite(elem) && 3 <= elem,
        ) &&
        Array.isArray(input.maxItems) &&
        input.maxItems.length <= 7 &&
        input.maxItems.every(
          (elem: any) =>
            ("string" === typeof elem && elem.length <= 7) ||
            ("number" === typeof elem && Number.isFinite(elem) && elem <= 7),
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
        );
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io0(elem),
        )
      );
    };
    const clone = (
      input: TypeTagArrayUnion,
    ): import("typia").Resolved<TypeTagArrayUnion> => {
      const $cp0 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $co0(elem)
            : (elem as any),
        );
      const $cp1 = (input: any) => input.map((elem: any) => elem as any);
      const $cp2 = (input: any) => input.map((elem: any) => elem as any);
      const $cp3 = (input: any) => input.map((elem: any) => elem as any);
      const $co0 = (input: any): any => ({
        items: Array.isArray(input.items)
          ? $cp1(input.items)
          : (input.items as any),
        minItems: Array.isArray(input.minItems)
          ? $cp2(input.minItems)
          : (input.minItems as any),
        maxItems: Array.isArray(input.maxItems)
          ? $cp3(input.maxItems)
          : (input.maxItems as any),
        both: Array.isArray(input.both)
          ? $cp1(input.both)
          : (input.both as any),
      });
      return Array.isArray(input) ? $cp0(input) : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  },
);
