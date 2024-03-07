import typia from "typia";
import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";
export const test_functional_isReturnAsync_CommentTagObjectUnion =
  _test_functional_isReturnAsync("CommentTagObjectUnion")(
    CommentTagObjectUnion,
  )(
    (p: (input: CommentTagObjectUnion) => Promise<CommentTagObjectUnion>) =>
      async (
        input: CommentTagObjectUnion,
      ): Promise<CommentTagObjectUnion | null> => {
        const result = await p(input);
        return ((input: any): input is CommentTagObjectUnion => {
          const $io0 = (input: any): boolean =>
            "number" === typeof input.value &&
            Number.isFinite(input.value) &&
            3 <= input.value;
          const $io1 = (input: any): boolean =>
            "string" === typeof input.value &&
            3 <= input.value.length &&
            input.value.length <= 7;
          const $iu0 = (input: any): any =>
            (() => {
              if (
                "string" === typeof input.value &&
                3 <= input.value.length &&
                input.value.length <= 7
              )
                return $io1(input);
              else if (
                "number" === typeof input.value &&
                Number.isFinite(input.value) &&
                3 <= input.value
              )
                return $io0(input);
              else return false;
            })();
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $iu0(elem),
            )
          );
        })(result)
          ? result
          : null;
      },
  );
