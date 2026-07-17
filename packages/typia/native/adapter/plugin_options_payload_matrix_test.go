package adapter

import (
  "testing"
)

// TestReadPluginOptionsPayloadMatrix verifies typia reads its options from its
// own entry in the host payload and from nothing else.
//
// The host resolves tsconfig -- JSONC parse, `extends` walk, plugin ordering --
// and hands each plugin back the entry that loaded it. Reading anything else
// produced samchon/typia#1887 in both directions: an option inherited through
// `extends` was dropped because only the leaf file was read, and an option that
// was commented out or that belonged to a sibling plugin was adopted because the
// match was against raw file text rather than against typia's entry. Every case
// below is expressed as the payload the host would actually send for that
// tsconfig, so the oracle is the host contract rather than typia's own output.
//
//  1. Feed the reader each payload shape the host can produce.
//  2. Assert the three on/off options and the tri-state `undefined` option.
//  3. Cover the sibling-entry, missing-entry, and empty-payload boundaries.
func TestReadPluginOptionsPayloadMatrix(t *testing.T) {
  truth := true
  lie := false
  cases := []struct {
    name     string
    payload  string
    expected PluginOptions
  }{
    {
      // The documented shape: options inline on typia's own entry. This is the
      // one case the old regex scrape got right, so it pins behavior that must
      // not change.
      name:     "options on typia's own entry",
      payload:  `[{"config":{"transform":"typia/lib/transform","functional":true,"numeric":true,"finite":true},"name":"typia","stage":"transform"}]`,
      expected: PluginOptions{Functional: true, Numeric: true, Finite: true},
    },
    {
      // A base tsconfig declares the option and the leaf `extends` it. The host
      // resolved the chain and sends the merged entry; there is no leaf file to
      // miss it in.
      name:     "option inherited through extends arrives resolved",
      payload:  `[{"config":{"transform":"typia/lib/transform","functional":true},"name":"typia","stage":"transform"}]`,
      expected: PluginOptions{Functional: true},
    },
    {
      // The user commented the option out. The host's JSONC parse dropped it, so
      // typia's entry simply does not carry it -- there is no comment left for a
      // text match to find.
      name:     "option the user commented out never reaches the entry",
      payload:  `[{"config":{"transform":"typia/lib/transform"},"name":"typia","stage":"transform"}]`,
      expected: PluginOptions{},
    },
    {
      // A transform host carries every transform-stage plugin's entry, so a
      // sibling's identically-named option sits in the same payload. It belongs
      // to the sibling.
      name: "sibling plugin's identically-named option does not leak",
      payload: `[
        {"config":{"transform":"other/lib/transform","functional":true,"numeric":true,"finite":true,"undefined":true},"name":"other","stage":"transform"},
        {"config":{"transform":"typia/lib/transform"},"name":"typia","stage":"transform"}
      ]`,
      expected: PluginOptions{},
    },
    {
      // Entry order is the host's, not typia's: typia must find itself by name
      // rather than assume it is first.
      name: "typia's entry is found when it is not first",
      payload: `[
        {"config":{"transform":"other/lib/transform"},"name":"other","stage":"transform"},
        {"config":{"transform":"typia/lib/transform","finite":true},"name":"typia","stage":"transform"}
      ]`,
      expected: PluginOptions{Finite: true},
    },
    {
      // `undefined: false` drives the exactOptionalPropertyTypes workflow and
      // must stay distinguishable from an omitted option.
      name:     "explicit undefined=false is preserved",
      payload:  `[{"config":{"transform":"typia/lib/transform","undefined":false},"name":"typia","stage":"transform"}]`,
      expected: PluginOptions{Undefined: &lie},
    },
    {
      name:     "explicit undefined=true is preserved",
      payload:  `[{"config":{"transform":"typia/lib/transform","undefined":true},"name":"typia","stage":"transform"}]`,
      expected: PluginOptions{Undefined: &truth},
    },
    {
      name:     "omitted undefined stays nil rather than collapsing to false",
      payload:  `[{"config":{"transform":"typia/lib/transform"},"name":"typia","stage":"transform"}]`,
      expected: PluginOptions{},
    },
    {
      // Explicit false is off for the three on/off options, matching how typia
      // has always read them.
      name:     "explicit false is off",
      payload:  `[{"config":{"transform":"typia/lib/transform","functional":false,"numeric":false,"finite":false},"name":"typia","stage":"transform"}]`,
      expected: PluginOptions{},
    },
    {
      // A typo must not turn an option on by truthiness.
      name:     "non-boolean values are not coerced",
      payload:  `[{"config":{"transform":"typia/lib/transform","functional":"true","numeric":1,"finite":null,"undefined":"false"},"name":"typia","stage":"transform"}]`,
      expected: PluginOptions{},
    },
    {
      name:     "entry with no options yields the defaults",
      payload:  `[{"config":{"transform":"typia/lib/transform"},"name":"typia","stage":"transform"}]`,
      expected: PluginOptions{},
    },
    {
      name:     "payload carrying no typia entry yields the defaults",
      payload:  `[{"config":{"transform":"other/lib/transform","functional":true},"name":"other","stage":"transform"}]`,
      expected: PluginOptions{},
    },
    {
      name:     "empty payload array yields the defaults",
      payload:  `[]`,
      expected: PluginOptions{},
    },
    {
      name:     "absent payload yields the defaults",
      payload:  ``,
      expected: PluginOptions{},
    },
    {
      name:     "blank payload yields the defaults",
      payload:  `   `,
      expected: PluginOptions{},
    },
    {
      // An entry with a null config must not panic the map reads.
      name:     "null config yields the defaults",
      payload:  `[{"config":null,"name":"typia","stage":"transform"}]`,
      expected: PluginOptions{},
    },
  }
  for _, tc := range cases {
    t.Run(tc.name, func(t *testing.T) {
      options, err := ReadPluginOptions(tc.payload)
      if err != nil {
        t.Fatalf("payload should be readable: %v", err)
      }
      if options.Functional != tc.expected.Functional ||
        options.Numeric != tc.expected.Numeric ||
        options.Finite != tc.expected.Finite {
        t.Fatalf("on/off options mismatch: got %+v want %+v", options, tc.expected)
      }
      if !equalBooleanOption(options.Undefined, tc.expected.Undefined) {
        t.Fatalf("undefined option mismatch: got %s want %s",
          formatBooleanOption(options.Undefined), formatBooleanOption(tc.expected.Undefined))
      }
    })
  }

  t.Run("undecodable payload is reported rather than defaulted", func(t *testing.T) {
    // The host meant to state typia's configuration. If that statement cannot be
    // read, substituting defaults would silently compile the project under the
    // wrong options -- the very failure this reader exists to prevent -- so the
    // host must hear about it instead.
    if _, err := ReadPluginOptions(`{"not":"an array"}`); err == nil {
      t.Fatal("an undecodable payload must be an error, not silent defaults")
    }
  })
}

func equalBooleanOption(actual, expected *bool) bool {
  if actual == nil || expected == nil {
    return actual == nil && expected == nil
  }
  return *actual == *expected
}

func formatBooleanOption(value *bool) string {
  if value == nil {
    return "<nil>"
  }
  if *value {
    return "true"
  }
  return "false"
}
