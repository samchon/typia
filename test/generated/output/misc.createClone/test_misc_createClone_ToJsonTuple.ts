import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";

export const test_misc_clone_ToJsonTuple = _test_misc_clone<ToJsonTuple>(
    ToJsonTuple,
)((input: ToJsonTuple): typia.Primitive<ToJsonTuple> => {
    const $co4 = (input: any): any => ({
        code: input.code as any,
        name: input.name as any,
    });
    return Array.isArray(input) &&
        input.length === 4 &&
        true &&
        true &&
        true &&
        true
        ? ([
              "object" === typeof input[0] &&
              null !== input[0] &&
              "function" === typeof input[0].toJSON
                  ? (input[0].toJSON() as any)
                  : (input[0] as any),
              "object" === typeof input[1] &&
              null !== input[1] &&
              "function" === typeof input[1].toJSON
                  ? (input[1].toJSON() as any)
                  : (input[1] as any),
              "object" === typeof input[2] &&
              null !== input[2] &&
              "function" === typeof input[2].toJSON
                  ? (input[2].toJSON() as any)
                  : (input[2] as any),
              "object" === typeof input[3] &&
              null !== input[3] &&
              "function" === typeof input[3].toJSON
                  ? "object" === typeof input[3].toJSON() &&
                    null !== input[3].toJSON()
                      ? $co4(input[3].toJSON())
                      : (input[3].toJSON() as any)
                  : (input[3] as any),
          ] as any)
        : (input as any);
});
