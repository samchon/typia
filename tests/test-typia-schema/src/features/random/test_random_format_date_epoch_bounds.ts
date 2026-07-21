import { TestValidator } from "@nestia/e2e";
import { _randomFormatDate } from "typia/lib/internal/_randomFormatDate";
import { _randomFormatDatetime } from "typia/lib/internal/_randomFormatDatetime";

/**
 * Verifies the date and date-time generators honor an explicit `maximum` epoch.
 *
 * Both helpers declared `minimum` and `maximum` props and resolved the upper
 * bound with `props?.maximum ?? props?.minimum === undefined`, which parses as
 * `props?.maximum ?? (props?.minimum === undefined)` because `??` binds looser
 * than `===`. Any supplied `maximum` therefore made the condition truthy and
 * was replaced by `Date.now()`, while `maximum: 0` fell through to `undefined +
 * one year` and produced `NaN` (#2287). The transform forwards only length
 * bounds today, so these props are exercised here directly.
 *
 * 1. Draw many dates and instants inside a closed one-month window.
 * 2. Require every draw to land inside it.
 * 3. Require `maximum: 0` to mean the epoch itself rather than `NaN`, and the
 *    unbounded call to keep its present-day upper bound.
 */
export const test_random_format_date_epoch_bounds = (): void => {
  const minimum: number = Date.UTC(2000, 0, 1);
  const maximum: number = Date.UTC(2000, 0, 31);
  const outside: string[] = [];
  for (let i: number = 0; i < 200; ++i) {
    const date: string = _randomFormatDate({ minimum, maximum });
    if (date < "2000-01-01" || date > "2000-01-31") outside.push(date);
    const instant: string = _randomFormatDatetime({ minimum, maximum });
    const time: number = new Date(instant).getTime();
    if (Number.isNaN(time) || time < minimum || time > maximum)
      outside.push(instant);
  }
  TestValidator.equals(
    `closed epoch window (${outside.length ? outside[0] : "none"})`,
    outside.length,
    0,
  );

  // BOUNDARY: zero is a bound, not a missing value.
  TestValidator.equals(
    "maximum zero pins the epoch",
    _randomFormatDate({ maximum: 0 }),
    "1970-01-01",
  );

  // CONTROL: an unbounded draw still stops at the present instant.
  const now: number = Date.now();
  const unbounded: number = new Date(_randomFormatDatetime()).getTime();
  TestValidator.equals(
    `unbounded draw stays in the past (${unbounded})`,
    unbounded <= now + 1_000 && unbounded >= 0,
    true,
  );
};
