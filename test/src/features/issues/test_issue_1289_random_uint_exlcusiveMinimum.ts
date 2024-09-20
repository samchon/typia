import typia, { tags } from "typia";

export const test_issue_1289_random_uint_exlcusiveMinimum = (): void => {
  typia.assert<Int32Array>(typia.random<Int32Array>());
  typia.assert<Int64Array>(typia.random<Int64Array>());
  typia.assert<Uint32Array>(typia.random<Uint32Array>());
  typia.assert<Uint64Array>(typia.random<Uint64Array>());
  typia.assert<BigIntArray>(typia.random<BigIntArray>());
  typia.assert<UBigIntArray>(typia.random<UBigIntArray>());
};

type Int32Array = Array<
  number &
    tags.Type<"int32"> &
    tags.ExclusiveMinimum<0> &
    tags.ExclusiveMaximum<2>
> &
  tags.MinItems<100> &
  tags.MaxItems<100>;

type Int64Array = Array<
  number &
    tags.Type<"int64"> &
    tags.ExclusiveMinimum<0> &
    tags.ExclusiveMaximum<2>
> &
  tags.MinItems<100> &
  tags.MaxItems<100>;

type Uint32Array = Array<
  number &
    tags.Type<"uint32"> &
    tags.ExclusiveMinimum<0> &
    tags.ExclusiveMaximum<2>
> &
  tags.MinItems<100> &
  tags.MaxItems<100>;

type Uint64Array = Array<
  number &
    tags.Type<"uint64"> &
    tags.ExclusiveMinimum<0> &
    tags.ExclusiveMaximum<2>
> &
  tags.MinItems<100> &
  tags.MaxItems<100>;

type BigIntArray = Array<
  bigint & tags.ExclusiveMinimum<0n> & tags.ExclusiveMaximum<2n>
> &
  tags.MinItems<100> &
  tags.MaxItems<100>;

type UBigIntArray = Array<
  bigint &
    tags.Type<"uint64"> &
    tags.ExclusiveMinimum<0n> &
    tags.ExclusiveMaximum<2n>
> &
  tags.MinItems<100> &
  tags.MaxItems<100>;
