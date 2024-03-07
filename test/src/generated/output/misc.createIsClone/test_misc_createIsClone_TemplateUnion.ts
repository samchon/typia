import typia from "typia";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { TemplateUnion } from "../../../structures/TemplateUnion";
export const test_misc_createIsClone_TemplateUnion = _test_misc_isClone(
  "TemplateUnion",
)<TemplateUnion>(TemplateUnion)(
  (input: any): import("typia").Resolved<TemplateUnion> | null => {
    const is = (input: any): input is TemplateUnion => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.value) &&
        input.value.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io1(elem),
        );
      const $io1 = (input: any): boolean =>
        "string" === typeof input.prefix &&
        (RegExp(/^prefix_(.*)/).test(input.prefix) ||
          RegExp(/^prefix_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(
            input.prefix,
          )) &&
        "string" === typeof input.postfix &&
        (RegExp(/(.*)_postfix$/).test(input.postfix) ||
          RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_postfix$/).test(
            input.postfix,
          )) &&
        null !== input.middle &&
        undefined !== input.middle &&
        ("the_false_value" === input.middle ||
          "the_true_value" === input.middle ||
          ("string" === typeof input.middle &&
            RegExp(/^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/).test(
              input.middle,
            ))) &&
        null !== input.mixed &&
        undefined !== input.mixed &&
        ("the_A_value" === input.mixed ||
          "the_B_value" === input.mixed ||
          ("number" === typeof input.mixed && Number.isFinite(input.mixed)) ||
          "boolean" === typeof input.mixed ||
          ("string" === typeof input.mixed &&
            RegExp(/^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/).test(
              input.mixed,
            )) ||
          ("object" === typeof input.mixed &&
            null !== input.mixed &&
            $io2(input.mixed)));
      const $io2 = (input: any): boolean => "string" === typeof input.name;
      return "object" === typeof input && null !== input && $io0(input);
    };
    const clone = (
      input: TemplateUnion,
    ): import("typia").Resolved<TemplateUnion> => {
      const $io1 = (input: any): boolean =>
        "string" === typeof input.prefix &&
        (RegExp(/^prefix_(.*)/).test(input.prefix) ||
          RegExp(/^prefix_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(
            input.prefix,
          )) &&
        "string" === typeof input.postfix &&
        (RegExp(/(.*)_postfix$/).test(input.postfix) ||
          RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_postfix$/).test(
            input.postfix,
          )) &&
        null !== input.middle &&
        undefined !== input.middle &&
        ("the_false_value" === input.middle ||
          "the_true_value" === input.middle ||
          ("string" === typeof input.middle &&
            RegExp(/^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/).test(
              input.middle,
            ))) &&
        null !== input.mixed &&
        undefined !== input.mixed &&
        ("the_A_value" === input.mixed ||
          "the_B_value" === input.mixed ||
          "number" === typeof input.mixed ||
          "boolean" === typeof input.mixed ||
          ("string" === typeof input.mixed &&
            RegExp(/^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/).test(
              input.mixed,
            )) ||
          ("object" === typeof input.mixed &&
            null !== input.mixed &&
            $io2(input.mixed)));
      const $io2 = (input: any): boolean => "string" === typeof input.name;
      const $cp0 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $co1(elem)
            : (elem as any),
        );
      const $co0 = (input: any): any => ({
        value: Array.isArray(input.value)
          ? $cp0(input.value)
          : (input.value as any),
      });
      const $co1 = (input: any): any => ({
        prefix: input.prefix as any,
        postfix: input.postfix as any,
        middle: input.middle as any,
        mixed:
          "object" === typeof input.mixed && null !== input.mixed
            ? $co2(input.mixed)
            : (input.mixed as any),
      });
      const $co2 = (input: any): any => ({
        name: input.name as any,
      });
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  },
);
