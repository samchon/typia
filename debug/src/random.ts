import typia, { tags } from "typia";

console.log(
  new Array(100)
    .fill(0)
    .map(
      typia.createRandom<
        number &
          tags.Type<"uint32"> &
          tags.ExclusiveMinimum<0> &
          tags.ExclusiveMaximum<5>
      >(),
    ),
);
