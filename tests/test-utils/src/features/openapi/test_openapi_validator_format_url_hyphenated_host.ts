import { TestValidator } from "@nestia/e2e";
import { OpenApiValidator } from "@typia/utils";
import typia, { tags } from "typia";

interface IUrlValue {
  value: string & tags.Format<"url">;
}

/**
 * Verifies URL format accepts interior hyphen runs in host labels.
 *
 * The URL validator uses a copied regular expression in typia generated
 * predicates and @typia/utils OpenAPI validation. This pins both paths to the
 * LDH host-label rule: hyphens may appear inside a label, but not at either
 * edge, and dotted-decimal private or invalid IPv4 hosts remain rejected.
 *
 * 1. Validate representative public URLs through typia is/assert/validate.
 * 2. Validate the same values through OpenApiValidator format=url.
 * 3. Reject edge-hyphen, malformed, private IPv4, and long stress samples.
 */
export const test_openapi_validator_format_url_hyphenated_host = (): void => {
  const valids: string[] = [
    "https://example--example.example.com/",
    "https://lapis--lazuli.booth.pm/",
    "http://xn--e1afmkfd.xn--p1ai/",
    "https://a-b.example.com/path?q=1#hash",
    "https://EXAMPLE--EXAMPLE.EXAMPLE.COM/",
    "https://example--example.example.com:8080/path",
    "http://223.255.255.254/",
    "http://172.32.0.1/",
    "http://169.253.1.1/",
    "http://169.255.1.1/",
    "https://example.co0/",
    "https://example.c-d/",
    "https://" + "a".repeat(63) + ".example.com/",
    "https://example." + "a".repeat(63) + "/",
    "http://l" + "-".repeat(61) + "l.tk/",
  ];
  const invalids: string[] = [
    "https://-example.com/",
    "https://example-.com/",
    "https://example..com/",
    "https://example .com/",
    "example.com",
    "http://999.999.999.999/",
    "http://10.0.0.1/",
    "http://127.0.0.1/",
    "http://169.254.1.1/",
    "http://172.16.0.1/",
    "http://172.31.255.255/",
    "http://192.168.0.1/",
    "http://256.0.0.1/",
    "http://1.2.3/",
    "http://1.2.3.4.5/",
    "http://01.2.3.4/",
    "https://" + "a".repeat(64) + ".example.com/",
    "https://example." + "a".repeat(64) + "/",
    "https://" + "-".repeat(2048) + ".example.com/",
    "https://a" + "-".repeat(2048) + ".example.com/",
  ];

  for (const value of valids) {
    TestValidator.equals(
      "typia.is accepts " + value,
      true,
      typia.is<IUrlValue>({ value }),
    );
    TestValidator.equals(
      "typia.validate accepts " + value,
      true,
      typia.validate<IUrlValue>({ value }).success,
    );
    TestValidator.equals(
      "typia.assert accepts " + value,
      value,
      typia.assert<IUrlValue>({ value }).value,
    );
    TestValidator.equals(
      "OpenApiValidator accepts " + value,
      true,
      OpenApiValidator.validate({
        components: {},
        schema: { type: "string", format: "url" },
        value,
        required: true,
      }).success,
    );
  }

  for (const value of invalids) {
    TestValidator.equals(
      "typia.is rejects " + value,
      false,
      typia.is<IUrlValue>({ value }),
    );
    TestValidator.equals(
      "typia.validate rejects " + value,
      false,
      typia.validate<IUrlValue>({ value }).success,
    );
    TestValidator.predicate("typia.assert rejects " + value, () => {
      try {
        typia.assert<IUrlValue>({ value });
        return false;
      } catch {
        return true;
      }
    });
    TestValidator.equals(
      "OpenApiValidator rejects " + value,
      false,
      OpenApiValidator.validate({
        components: {},
        schema: { type: "string", format: "url" },
        value,
        required: true,
      }).success,
    );
  }
};
