import typia from "typia";
import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { ObjectHttpConstant } from "../../../structures/ObjectHttpConstant";
export const test_functional_isParametersAsync_ObjectHttpConstant =
  _test_functional_isParametersAsync("ObjectHttpConstant")(ObjectHttpConstant)(
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
        return p(input);
      },
  );
