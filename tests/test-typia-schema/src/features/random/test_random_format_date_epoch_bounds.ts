import { TestEquality } from "@typia/template/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification the adapter or utility under test is called directly on inputs built in this case and the result is checked by 3 assertions (closed epoch window (…); maximum zero pins the epoch; unbounded draw stays in the past (…)). The case documents its purpose as: Verifies the date and date-time generators honor an explicit `maximum` epoch.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Both helpers declared `minimum` and `maximum` props and resolved the upper bound with `props?.maximum ?? props?.minimum === undefined`, which parses as `props?.maximum ?? (props?.minimum === undefined)` because `??` binds looser than `===`. Any supplied `maximum` therefore made the condition truthy and was replaced by `Date.now()`, while `maximum: 0` fell through to `undefined + one year` and produced `NaN` (#2287). The transform forwards only length bounds today, so these props are exercised here directly. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (closed epoch window (…); maximum zero pins the epoch; unbounded draw stays in the past (…)) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_random_format_date_epoch_bounds is the exported entry; this case calls no typia producer, so it needs no native host and runs here only because the workspace has no separate plugin-free unit population, which is a recorded departure from the unit and boundary separation.
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
  TestEquality.equals(
    `closed epoch window (${outside.length ? outside[0] : "none"})`,
    outside.length,
    0,
  );

  // BOUNDARY: zero is a bound, not a missing value.
  TestEquality.equals(
    "maximum zero pins the epoch",
    _randomFormatDate({ maximum: 0 }),
    "1970-01-01",
  );

  // CONTROL: an unbounded draw still stops at the present instant.
  const now: number = Date.now();
  const unbounded: number = new Date(_randomFormatDatetime()).getTime();
  TestEquality.equals(
    `unbounded draw stays in the past (${unbounded})`,
    unbounded <= now + 1_000 && unbounded >= 0,
    true,
  );
};
