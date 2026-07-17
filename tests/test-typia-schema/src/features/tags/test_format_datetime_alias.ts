import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
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
    TestValidator.equals(
      `@format date-time accepts ${value}`,
      true,
      typia.is<IHyphenated>({ value }),
    );
    TestValidator.equals(
      `@format datetime accepts ${value}`,
      true,
      typia.is<ILowercaseAlias>({ value }),
    );
    TestValidator.equals(
      `@format dateTime accepts ${value}`,
      true,
      typia.is<ICamelAlias>({ value }),
    );
  }
  for (const value of invalids) {
    TestValidator.equals(
      `@format date-time rejects ${value}`,
      false,
      typia.is<IHyphenated>({ value }),
    );
    TestValidator.equals(
      `@format datetime rejects ${value}`,
      false,
      typia.is<ILowercaseAlias>({ value }),
    );
    TestValidator.equals(
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
  TestValidator.equals(
    "@format date-time emits the date-time format",
    "date-time",
    format(typia.json.schema<IHyphenated>(), "IHyphenated"),
  );
  TestValidator.equals(
    "@format datetime emits the date-time format",
    "date-time",
    format(typia.json.schema<ILowercaseAlias>(), "ILowercaseAlias"),
  );
  TestValidator.equals(
    "@format dateTime emits the date-time format",
    "date-time",
    format(typia.json.schema<ICamelAlias>(), "ICamelAlias"),
  );
};
