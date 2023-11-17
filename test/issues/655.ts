import typia from "typia";

console.log(
  typia.random<Date>(),
  typia.random<{ target: Date }>(),
  typia.random<[Date]>(),
  typia.random<[Date?]>(),
  typia.random<{ target: Date }["target"]>(),

  typia.random<Date | null>(),
  typia.random<{ target: Date | null }>(),
  typia.random<[Date | null]>(),
  typia.random<[(Date | null)?]>(),
  typia.random<{ target: Date | null }["target"]>(),
  typia.random<String | Number>(),
);
