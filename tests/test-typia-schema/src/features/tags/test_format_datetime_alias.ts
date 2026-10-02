import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

interface IHyphenated {
  /** @format date-time */
  value: string;
}

interface ILowercaseAlias {
  /** @format datetime */
  value: string;
}

interface ICamelAlias {
  /** @format dateTime */
  value: string;
}

/**
 * Verifies the `@format datetime` aliases validate exactly as `@format
 * date-time` does.
 *
 * The aliases emit `format: "date-time"` but once carried a validator of their
 * own, `!isNaN(new Date($input).getTime())`. That accepted
 * "2020-02-30T00:00:00Z", because `Date` silently rolls February 30th over to
 * March 1, and rejected the RFC 3339 leap second, because `Date` cannot parse
 * `:60` — leaving typia's emitted schema contradicting typia's generated
 * validator on a type typia itself accepted. An alias is not an alias while it
 * owns a second validator.
 *
 * 1. Assert every spelling emits the same `date-time` schema.
 * 2. Assert all three agree on ordinary, rolled-over, and leap-second inputs.
 * 3. Pin February 30th as rejected and the legal leap second as accepted.
 *
 * @evidence contracts/testing.md#behavioral-verification Three datetime spellings share RFC-style date validation and emitted format.
 * @evidence contracts/testing.md#independent-expectations Four authored accepted and six rejected timestamp strings have literal expected verdicts; each schema format is fixed date-time.
 * @evidence contracts/testing.md#distinguishing-cases Leap day/leap seconds/offset fraction, impossible calendar dates/second/month and arbitrary text remain across all three spellings.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_format_datetime_alias in the schema start suite under ttsx and the native plugin; the exported body owns these assertions.
 * @evidence contracts/e2e.md#necessary-boundary Native alias metadata must select the same runtime predicate and schema format as the canonical spelling.
 * @evidence contracts/e2e.md#shared-execution The suite project load and native artifact are reused with neighboring cases; no per-input process or build is created.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Inputs and observed outputs are local to the case. The suite owns shared host lifetime; mutable data is not handed to another case and no cold cache behavior is asserted.
 * @evidence contracts/e2e.md#preserved-coverage Leap day/leap seconds/offset fraction, impossible calendar dates/second/month and arbitrary text remain across all three spellings. Source review preserves the executable matrix; final native execution is tracked separately.
 */
export const test_format_datetime_alias = (): void => {
  const valids: string[] = [
    "2020-02-29T00:00:00Z", // 2020 is a leap year
    "2016-12-31T23:59:60Z", // a legal RFC 3339 leap second
    "2015-06-30T23:59:60Z", // a legal leap second at the mid-year insertion point
    "2020-01-01T00:00:00.123+09:00",
  ];
  const invalids: string[] = [
    "2020-02-30T00:00:00Z", // February has no 30th; Date rolls it to March 1
    "2021-02-29T00:00:00Z", // 2021 is not a leap year
    "2020-04-31T00:00:00Z", // April has 30 days; Date rolls it to May 1
    "2020-01-01T00:00:61Z",
    "2020-13-01T00:00:00Z",
    "not a timestamp",
  ];

  for (const value of valids) {
    TestEquality.equals(
      `@format date-time accepts ${value}`,
      true,
      typia.is<IHyphenated>({ value }),
    );
    TestEquality.equals(
      `@format datetime accepts ${value}`,
      true,
      typia.is<ILowercaseAlias>({ value }),
    );
    TestEquality.equals(
      `@format dateTime accepts ${value}`,
      true,
      typia.is<ICamelAlias>({ value }),
    );
  }
  for (const value of invalids) {
    TestEquality.equals(
      `@format date-time rejects ${value}`,
      false,
      typia.is<IHyphenated>({ value }),
    );
    TestEquality.equals(
      `@format datetime rejects ${value}`,
      false,
      typia.is<ILowercaseAlias>({ value }),
    );
    TestEquality.equals(
      `@format dateTime rejects ${value}`,
      false,
      typia.is<ICamelAlias>({ value }),
    );
  }

  const format = (
    unit: { components: OpenApi.IComponents },
    key: string,
  ): string | undefined => {
    const schema = unit.components.schemas?.[
      key
    ] as OpenApi.IJsonSchema.IObject;
    const value = schema.properties?.value as OpenApi.IJsonSchema.IString;
    return value.format;
  };
  TestEquality.equals(
    "@format date-time emits the date-time format",
    "date-time",
    format(typia.json.schema<IHyphenated>(), "IHyphenated"),
  );
  TestEquality.equals(
    "@format datetime emits the date-time format",
    "date-time",
    format(typia.json.schema<ILowercaseAlias>(), "ILowercaseAlias"),
  );
  TestEquality.equals(
    "@format dateTime emits the date-time format",
    "date-time",
    format(typia.json.schema<ICamelAlias>(), "ICamelAlias"),
  );
};
