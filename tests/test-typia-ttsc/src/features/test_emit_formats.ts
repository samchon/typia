import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsc } from "../utils/runTtsc";

/**
 * Exercise every regex in `formatRegexps` end-to-end so we catch regressions
 * the moment a pattern stops parsing or starts false-rejecting. 22 format
 * slots, two probes each: one known-good, one known-bad (or an edge-case).
 */
export async function test_emit_formats(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "formats");
  const dist = path.join(fixture, "dist");
  fs.rmSync(dist, { recursive: true, force: true });

  const result = runTtsc(
    ["--tsconfig=tsconfig.json", "--emit", "--quiet"],
    fixture,
  );
  assert.equal(result.status, 0, `stderr:\n${result.stderr}`);

  const mainPath = path.join(dist, "main.js");
  delete require.cache[require.resolve(mainPath)];
  type Check = (x: unknown) => boolean;
  const mod = require(mainPath) as {
    email: Check; idnEmail: Check; hostname: Check; idnHostname: Check;
    ipv4: Check; ipv6: Check; uri: Check; uriRef: Check; uriTpl: Check;
    iri: Check; iriRef: Check; url: Check; uuid: Check; byte: Check;
    dateOnly: Check; dateTime: Check; time: Check; duration: Check;
    jsonPointer: Check; relJsonPointer: Check; password: Check;
    regexFmt: Check;
  };

  // —— ADDRESSES ————————————————————————————————————————————————
  assert.equal(mod.email("u@example.com"), true);
  assert.equal(mod.email("no at sign"), false);

  assert.equal(mod.idnEmail('"quoted.user"@example.com'), true);
  assert.equal(mod.idnEmail("no-at-sign"), false);

  assert.equal(mod.hostname("example.com"), true);
  assert.equal(mod.hostname(""), false);

  assert.equal(mod.idnHostname("example.com"), true);
  assert.equal(mod.idnHostname("foo bar"), false, "space rejected");

  assert.equal(mod.ipv4("10.0.0.1"), true);
  assert.equal(mod.ipv4("999.0.0.1"), false);

  assert.equal(mod.ipv6("2001:db8::1"), true);
  assert.equal(mod.ipv6("not-an-ip"), false);

  assert.equal(mod.uri("https://example.com/path"), true);
  assert.equal(mod.uri("no scheme"), false);

  assert.equal(mod.uriRef("/relative"), true);
  assert.equal(mod.uriRef("has space"), false);

  assert.equal(mod.uriTpl("/api/{id}"), true);
  assert.equal(mod.uriTpl("<bad>"), false);

  assert.equal(mod.iri("urn:example"), true);
  assert.equal(mod.iri("no-scheme"), false);

  assert.equal(mod.iriRef("urn:example"), true);

  assert.equal(mod.url("https://example.com"), true);
  assert.equal(mod.url("not a url"), false);

  // —— IDS ————————————————————————————————————————————————————
  assert.equal(mod.uuid("550e8400-e29b-41d4-a716-446655440000"), true);
  assert.equal(mod.uuid("urn:uuid:550e8400-e29b-41d4-a716-446655440000"), true);
  assert.equal(mod.uuid("not-a-uuid"), false);

  assert.equal(mod.byte("SGVsbG8="), true); // "Hello" base64
  assert.equal(mod.byte("not base64 !!!"), false);

  // —— TIMESTAMPS —————————————————————————————————————————————
  assert.equal(mod.dateOnly("2026-04-19"), true);
  assert.equal(mod.dateOnly("2026-13-40"), false);

  assert.equal(mod.dateTime("2026-04-19T12:34:56Z"), true);
  assert.equal(mod.dateTime("2026-04-19"), false);

  assert.equal(mod.time("12:34:56Z"), true);
  assert.equal(mod.time("25:00:00Z"), false);

  assert.equal(mod.duration("P1Y2M3DT4H5M6S"), true);
  assert.equal(mod.duration("PT30M"), true);
  assert.equal(mod.duration("1 hour"), false);

  // —— POINTERS ———————————————————————————————————————————————
  assert.equal(mod.jsonPointer(""), true, "empty is valid per RFC 6901");
  assert.equal(mod.jsonPointer("/foo/bar"), true);
  assert.equal(mod.jsonPointer("no slash"), false);

  assert.equal(mod.relJsonPointer("0"), true);
  assert.equal(mod.relJsonPointer("2/foo"), true);
  assert.equal(mod.relJsonPointer("abc"), false);

  // —— SPECIAL —————————————————————————————————————————————————
  // password: typia's contract is "always true" — the validator exists so the
  // schema accepts a value, not to enforce complexity.
  assert.equal(mod.password("any value"), true);
  assert.equal(mod.password(""), true);

  // regex: accepts only inputs that parse as a valid RegExp body.
  assert.equal(mod.regexFmt("^[a-z]+$"), true);
  assert.equal(mod.regexFmt("[unclosed"), false);
}
