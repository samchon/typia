import typia from "typia";
import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { ObjectHttpConstant } from "../../../structures/ObjectHttpConstant";
export const test_functional_isFunctionAsync_ObjectHttpConstant =
  _test_functional_isFunctionAsync("ObjectHttpConstant")(ObjectHttpConstant)(
    (p: (input: ObjectHttpConstant) => Promise<ObjectHttpConstant>) =>
      async (input: ObjectHttpConstant): Promise<ObjectHttpConstant | null> => {
        if (
          false ===
          ((input: any): input is ObjectHttpConstant => {
            const $io0 = (input: any): boolean =>
              false === input.boolean &&
              (BigInt(1) === input.bigint || BigInt(99) === input.bigint) &&
              (2 === input.number || 98 === input.number) &&
              ("ninety-seven" === input.string ||
                "something" === input.string ||
                "three" === input.string) &&
              "string" === typeof input.template &&
              RegExp(/^abcd_(.*)/).test(input.template);
            return "object" === typeof input && null !== input && $io0(input);
          })(input)
        )
          return null;
        const result = await p(input);
        return ((input: any): input is ObjectHttpConstant => {
          const $io0 = (input: any): boolean =>
            false === input.boolean &&
            (BigInt(1) === input.bigint || BigInt(99) === input.bigint) &&
            (2 === input.number || 98 === input.number) &&
            ("ninety-seven" === input.string ||
              "something" === input.string ||
              "three" === input.string) &&
            "string" === typeof input.template &&
            RegExp(/^abcd_(.*)/).test(input.template);
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );
