import typia from "typia";

console.log(
  typia.createIs<2 & number>().toString(),
  typia.createIs<3 & 4 & number>().toString(),
  typia
    .createIs<
      [
        {
          id: never;
        },
      ]
    >()
    .toString(),
);
