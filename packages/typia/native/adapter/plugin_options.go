package adapter

import (
  "encoding/json"
  "fmt"
  "strings"

  "github.com/samchon/ttsc/packages/ttsc/driver"
)

// PluginName is typia's identity in the ttsc plugin protocol.
//
// typia's descriptor declares it (`packages/typia/src/transform.ts` ->
// `name: "typia"`) and the playground wasm plugin registers the same string
// with the ttsc wasm host. ttsc echoes it back on every payload entry, so it is
// how typia recognizes its own entry among the sibling plugins that ride in the
// same payload: a transform host carries the entries of every transform-stage
// plugin, not just its own.
const PluginName = "typia"

// ReadPluginOptions resolves typia's transform options from the ordered plugin
// payload the host passes on `--plugins-json`.
//
// The host owns tsconfig resolution. It parses the file as JSONC, follows the
// `extends` chain, discards comments, orders the plugin entries, and hands each
// native plugin back the resolved entry that caused that plugin to load. That
// entry is the only authority on typia's options, so this reads it and nothing
// else -- there is deliberately no fallback that re-reads tsconfig.json.
//
// Re-reading the file is what made samchon/typia#1887: the previous reader took
// the leaf file's raw bytes and regex-matched the option names over the whole
// text. It therefore dropped an option inherited through `extends` (the host
// resolved it, typia never saw it), and adopted an option the user had commented
// out or one that belonged to a sibling plugin's entry (the text matched, the
// entry did not). Reading the file back cannot be made correct without
// re-implementing the host's JSONC parse and `extends` walk, so a fallback that
// tried would either duplicate that work or keep the defect on whichever path
// took it.
//
// An absent or empty payload yields the zero options, which are typia's
// documented defaults. That is not a guess: a host that hands typia no entry
// has stated that typia was configured with nothing.
func ReadPluginOptions(pluginsJSON string) (PluginOptions, error) {
  entries, err := parsePluginEntries(pluginsJSON)
  if err != nil {
    return PluginOptions{}, err
  }
  entry := findPluginEntry(entries, PluginName)
  if entry == nil {
    return PluginOptions{}, nil
  }
  return PluginOptions{
    Functional: pluginOptionEnabled(entry.Config, "functional"),
    Numeric:    pluginOptionEnabled(entry.Config, "numeric"),
    Finite:     pluginOptionEnabled(entry.Config, "finite"),
    Undefined:  pluginOptionBoolean(entry.Config, "undefined"),
  }, nil
}

// parsePluginEntries decodes the payload. An empty payload is not an error --
// a host may legitimately run typia's binary with no plugin manifest -- but a
// payload that is present and undecodable is: the host meant to state typia's
// configuration and we cannot read it, so silently substituting defaults would
// reintroduce exactly the silent wrong-options failure this reader exists to
// prevent.
func parsePluginEntries(pluginsJSON string) ([]driver.PluginEntry, error) {
  text := strings.TrimSpace(pluginsJSON)
  if text == "" {
    return nil, nil
  }
  var entries []driver.PluginEntry
  if err := json.Unmarshal([]byte(text), &entries); err != nil {
    return nil, fmt.Errorf("invalid --plugins-json payload: %w", err)
  }
  return entries, nil
}

// findPluginEntry returns the payload entry the named plugin owns, or nil when
// the payload carries none. It matches on the host-assigned name rather than on
// the entry's `transform` specifier: the specifier is a module request the user
// may legally spell several ways (bare specifier, absolute path), while the
// name is the identity the host and the plugin already agree on.
func findPluginEntry(entries []driver.PluginEntry, name string) *driver.PluginEntry {
  for index := range entries {
    if entries[index].Name == name {
      return &entries[index]
    }
  }
  return nil
}

// pluginOptionEnabled reports whether a tri-state option is explicitly on.
// Omitted, explicitly false, and non-boolean all mean off, matching how typia
// has always treated its three on/off options.
func pluginOptionEnabled(config map[string]any, name string) bool {
  value := pluginOptionBoolean(config, name)
  return value != nil && *value
}

// pluginOptionBoolean reads one boolean option out of a resolved plugin entry's
// config, distinguishing "omitted" (nil) from "explicitly false".
//
// The distinction is load-bearing for `undefined`: `undefined: false` drives the
// exactOptionalPropertyTypes workflow and must not collapse into the omitted
// default. A present-but-non-boolean value is treated as omitted rather than
// coerced, so a typo cannot silently turn an option on.
func pluginOptionBoolean(config map[string]any, name string) *bool {
  raw, ok := config[name]
  if !ok {
    return nil
  }
  value, ok := raw.(bool)
  if !ok {
    return nil
  }
  return &value
}
