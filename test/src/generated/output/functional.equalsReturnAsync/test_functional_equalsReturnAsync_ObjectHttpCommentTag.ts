import typia from "typia";
import { _test_functional_equalsReturnAsync } from "../../../internal/_test_functional_equalsReturnAsync";
import { ObjectHttpCommentTag } from "../../../structures/ObjectHttpCommentTag";
export const test_functional_equalsReturnAsync_ObjectHttpCommentTag =
  _test_functional_equalsReturnAsync("ObjectHttpCommentTag")(
    ObjectHttpCommentTag,
  )(
    (p: (input: ObjectHttpCommentTag) => Promise<ObjectHttpCommentTag>) =>
      async (
        input: ObjectHttpCommentTag,
      ): Promise<ObjectHttpCommentTag | null> => {
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ObjectHttpCommentTag => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "number" === typeof input.int &&
            Math.floor(input.int) === input.int &&
            -2147483648 <= input.int &&
            input.int <= 2147483647 &&
            "bigint" === typeof input.uint64 &&
            BigInt(0) <= input.uint64 &&
            "string" === typeof input.uuid &&
            /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
              input.uuid,
            ) &&
            Array.isArray(input.items) &&
            10 <= input.items.length &&
            input.items.length <= 100 &&
            input.items.every(
              (elem: any, _index1: number) =>
                "number" === typeof elem && Number.isFinite(elem),
            ) &&
            (4 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (
                  ["int", "uint64", "uuid", "items"].some(
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
