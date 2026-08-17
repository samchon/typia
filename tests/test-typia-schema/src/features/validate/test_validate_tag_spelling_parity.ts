import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";

/**
 * Verifies every constraint answers the same whether it is spelled as a type
 * tag or as a JSDoc comment tag.
 *
 * The two spellings are produced by different code in different languages: a
 * type tag's check comes from the `validate` template in
 * `packages/interface/src/tags`, a comment tag's from a hand-written record in
 * `MetadataCommentTagFactory.go`. Every constraint therefore has to be written
 * twice, and nothing compared the two until now.
 *
 * That is not hypothetical. The `Exclusive` halves of `@format` and `@pattern`
 * had already drifted from their declarations, which is why
 * `metadata_comment_tag_factory_exclusivity_matches_interface_test.go` exists —
 * and it guards `Exclusive` only. The `Validate` half, the runtime check
 * itself, had one literal pinned for `@multipleOf` and nothing else, while the
 * last campaign moved four constraints on both sides at once (#2353).
 *
 * This compares answers rather than strings, so it holds however either side is
 * implemented, and it covers the catalogue rather than a sample.
 *
 * 1. Run a shared value matrix through both spellings of every constraint that has
 *    both.
 * 2. Require the two to agree on every value.
 * 3. Require each matrix to contain an accepted and a rejected value, so no row
 *    can agree vacuously.
 */
export const test_validate_tag_spelling_parity = (): void => {
  const rows: IRow[] = [
    {
      tag: "minimum",
      values: [-1, 0, 3, 10],
      byType: (v) => typia.is<number & tags.Minimum<3>>(v),
      byComment: (v) => typia.is<IMinimum>({ value: v as number }),
    },
    {
      tag: "maximum",
      values: [-1, 3, 4, 10],
      byType: (v) => typia.is<number & tags.Maximum<3>>(v),
      byComment: (v) => typia.is<IMaximum>({ value: v as number }),
    },
    {
      tag: "exclusiveMinimum",
      values: [2, 3, 4],
      byType: (v) => typia.is<number & tags.ExclusiveMinimum<3>>(v),
      byComment: (v) => typia.is<IExclusiveMinimum>({ value: v as number }),
    },
    {
      tag: "exclusiveMaximum",
      values: [2, 3, 4],
      byType: (v) => typia.is<number & tags.ExclusiveMaximum<3>>(v),
      byComment: (v) => typia.is<IExclusiveMaximum>({ value: v as number }),
    },
    {
      tag: "multipleOf",
      // `0.3` is the value the two rules disagree about if either side reverts
      // to a binary remainder.
      values: [0, 0.1, 0.3, 0.35, 1],
      byType: (v) => typia.is<number & tags.MultipleOf<0.1>>(v),
      byComment: (v) => typia.is<IMultipleOf>({ value: v as number }),
    },
    {
      tag: "minLength",
      // The astral character is one character and two code units, so it is the
      // value that separates the two possible meanings.
      values: ["", "a", "ab", "abc", "\u{1f600}", "\u{1f600}\u{1f600}"],
      byType: (v) => typia.is<string & tags.MinLength<2>>(v),
      byComment: (v) => typia.is<IMinLength>({ value: v as string }),
    },
    {
      tag: "maxLength",
      values: ["", "a", "ab", "abc", "\u{1f600}", "\u{1f600}\u{1f600}"],
      byType: (v) => typia.is<string & tags.MaxLength<2>>(v),
      byComment: (v) => typia.is<IMaxLength>({ value: v as string }),
    },
    {
      tag: "length",
      values: ["", "a", "ab", "abc", "\u{1f600}", "\u{1f600}\u{1f600}"],
      byType: (v) =>
        typia.is<string & tags.MinLength<2> & tags.MaxLength<2>>(v),
      byComment: (v) => typia.is<ILength>({ value: v as string }),
    },
    {
      tag: "pattern",
      values: ["ab", "abb", "zzz", ""],
      byType: (v) => typia.is<string & tags.Pattern<"^ab+$">>(v),
      byComment: (v) => typia.is<IPattern>({ value: v as string }),
    },
    {
      tag: "format",
      values: ["00000000-0000-4000-8000-000000000000", "not-a-uuid", ""],
      byType: (v) => typia.is<string & tags.Format<"uuid">>(v),
      byComment: (v) => typia.is<IFormat>({ value: v as string }),
    },
    {
      tag: "minItems",
      values: [[], [1], [1, 2], [1, 2, 3]],
      byType: (v) => typia.is<Array<number> & tags.MinItems<2>>(v),
      byComment: (v) => typia.is<IMinItems>({ value: v as number[] }),
    },
    {
      tag: "maxItems",
      values: [[], [1], [1, 2], [1, 2, 3]],
      byType: (v) => typia.is<Array<number> & tags.MaxItems<2>>(v),
      byComment: (v) => typia.is<IMaxItems>({ value: v as number[] }),
    },
    {
      tag: "uniqueItems",
      values: [[], [1], [1, 2], [1, 1]],
      byType: (v) => typia.is<Array<number> & tags.UniqueItems>(v),
      byComment: (v) => typia.is<IUniqueItems>({ value: v as number[] }),
    },
    {
      tag: "type int32",
      values: [0, -1, 1.5, 2 ** 31, -(2 ** 31), 2 ** 31 - 1],
      byType: (v) => typia.is<number & tags.Type<"int32">>(v),
      byComment: (v) => typia.is<ITypeInt32>({ value: v as number }),
    },
    {
      tag: "type uint8",
      values: [0, -1, 255, 256, 1.5],
      byType: (v) => typia.is<number & tags.Type<"uint8">>(v),
      byComment: (v) => typia.is<ITypeUint8>({ value: v as number }),
    },
    {
      tag: "type float",
      values: [0, 1.5, 3.4028235e38, 3.5e38, -3.5e38],
      byType: (v) => typia.is<number & tags.Type<"float">>(v),
      byComment: (v) => typia.is<ITypeFloat>({ value: v as number }),
    },
    {
      tag: "type int64 on number",
      values: [0, -1, 2 ** 63, 2 ** 64, 1.5],
      byType: (v) => typia.is<number & tags.Type<"int64">>(v),
      byComment: (v) => typia.is<ITypeInt64Number>({ value: v as number }),
    },
    {
      tag: "type int64 on bigint",
      values: [0n, -1n, 2n ** 63n - 1n, 2n ** 63n, -(2n ** 63n), 2n ** 200n],
      byType: (v) => typia.is<bigint & tags.Type<"int64">>(v),
      byComment: (v) => typia.is<ITypeInt64Bigint>({ value: v as bigint }),
    },
    {
      tag: "type uint64 on bigint",
      values: [0n, -1n, 2n ** 64n - 1n, 2n ** 64n, 2n ** 200n],
      byType: (v) => typia.is<bigint & tags.Type<"uint64">>(v),
      byComment: (v) => typia.is<ITypeUint64Bigint>({ value: v as bigint }),
    },
  ];

  for (const row of rows) {
    const answers: boolean[] = [];
    for (const value of row.values) {
      const byType: boolean = row.byType(value);
      const byComment: boolean = row.byComment(value);
      TestValidator.equals(
        `${row.tag} agrees on ${JSON.stringify(value, (_k, v) =>
          typeof v === "bigint" ? `${v}n` : v,
        )}`,
        byType,
        byComment,
      );
      answers.push(byType);
    }
    // Agreement is worthless if the row accepts everything or rejects
    // everything: two spellings that both ignore the constraint would agree.
    TestValidator.equals(
      `${row.tag} separates accepted from rejected`,
      [answers.some((v) => v), answers.some((v) => v === false)],
      [true, true],
    );
  }
};

interface IRow {
  tag: string;
  values: unknown[];
  byType: (value: unknown) => boolean;
  byComment: (value: unknown) => boolean;
}

interface IMinimum {
  /** @minimum 3 */
  value: number;
}
interface IMaximum {
  /** @maximum 3 */
  value: number;
}
interface IExclusiveMinimum {
  /** @exclusiveMinimum 3 */
  value: number;
}
interface IExclusiveMaximum {
  /** @exclusiveMaximum 3 */
  value: number;
}
interface IMultipleOf {
  /** @multipleOf 0.1 */
  value: number;
}
interface IMinLength {
  /** @minLength 2 */
  value: string;
}
interface IMaxLength {
  /** @maxLength 2 */
  value: string;
}
interface ILength {
  /** @length 2 */
  value: string;
}
interface IPattern {
  /** @pattern ^ab+$ */
  value: string;
}
interface IFormat {
  /** @format uuid */
  value: string;
}
interface IMinItems {
  /** @minItems 2 */
  value: number[];
}
interface IMaxItems {
  /** @maxItems 2 */
  value: number[];
}
interface IUniqueItems {
  /** @uniqueItems */
  value: number[];
}
interface ITypeInt32 {
  /** @type int32 */
  value: number;
}
interface ITypeUint8 {
  /** @type uint8 */
  value: number;
}
interface ITypeFloat {
  /** @type float */
  value: number;
}
interface ITypeInt64Number {
  /** @type int64 */
  value: number;
}
interface ITypeInt64Bigint {
  /** @type int64 */
  value: bigint;
}
interface ITypeUint64Bigint {
  /** @type uint64 */
  value: bigint;
}
