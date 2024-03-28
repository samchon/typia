import typia from "typia";

import { _test_equals } from "../../../internal/_test_equals";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_equals_TemplateUnion = _test_equals(
  "TemplateUnion",
)<TemplateUnion>(TemplateUnion)((input) =>
  ((input: any, _exceptionable: boolean = true): input is TemplateUnion => {
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
          $io2(input.mixed, true && _exceptionable))) &&
      (4 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (
            ["prefix", "postfix", "middle", "mixed"].some(
              (prop: any) => key === prop,
            )
          )
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    const $io2 = (input: any, _exceptionable: boolean = true): boolean =>
      "string" === typeof input.name &&
      (1 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["name"].some((prop: any) => key === prop)) return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    return "object" === typeof input && null !== input && $io0(input, true);
  })(input),
);
