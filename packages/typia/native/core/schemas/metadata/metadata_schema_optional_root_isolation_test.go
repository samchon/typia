package metadata

import "testing"

// TestMetadataSchemaOptionalRootIsolation verifies contextual omission does not
// mutate a shared type graph or reuse a name computed for another root state.
//
// 1. Warm both names of a required number and derive an optional root.
// 2. Restore required presence and compare names, root identity and descendants.
// 3. Keep explicit undefined and any-value roots valid, including a nil receiver.
//
// @evidence contracts/testing.md#behavioral-verification WithOptional changes IsRequired and both derived names without changing the source root or descendant identity; this distinguishes a shared-root mutation and stale name-cache reuse.
// @evidence contracts/testing.md#independent-expectations Required number and optional number have literal number and number-or-undefined names; an explicitly undefined-permitting root stays non-required when only the contextual Optional flag is cleared.
// @evidence contracts/testing.md#distinguishing-cases Warm names exercise invalidation in both directions; any values retain their value bucket while becoming omittable; nil, already optional and explicit undefined distinguish root copying from value-type reconstruction.
// @evidence contracts/testing.md#execution-ownership The canonical native Go test command executes this same-package unit directly against MetadataSchema; it starts no compiler plugin, consumer installation or product host.
func TestMetadataSchemaOptionalRootIsolation(t *testing.T) {
  source := MetadataSchema_initialize()
  atomic := MetadataAtomic_create(MetadataAtomic{Type: "number"})
  source.Atomics = append(source.Atomics, atomic)
  if source.GetName() != "number" || source.GetDisplayName() != "number" {
    t.Fatal("required number names are incorrect")
  }
  optional := source.WithOptional(true)
  if optional == source || optional.IsRequired() || !source.IsRequired() {
    t.Fatal("optional context mutated or reused the required root")
  }
  if optional.Atomics[0] != atomic || source.Atomics[0] != atomic {
    t.Fatal("optional context copied or replaced the type graph")
  }
  if optional.GetName() != "(number | undefined)" || optional.GetDisplayName() != "(number | undefined)" {
    t.Fatal("optional names reused required name caches")
  }
  restored := optional.WithOptional(false)
  if restored == optional || !restored.IsRequired() || optional.IsRequired() {
    t.Fatal("required context mutated the optional root")
  }
  if restored.GetName() != "number" || restored.GetDisplayName() != "number" {
    t.Fatal("required names reused optional name caches")
  }
  again := optional.WithOptional(true)
  if again == optional || again.IsRequired() || again.Atomics[0] != atomic {
    t.Fatal("already optional context lost root independence or its graph")
  }
  undefined := source.ShallowClone()
  undefined.Required = false
  if undefined.WithOptional(false).IsRequired() {
    t.Fatal("clearing contextual optionality removed explicit undefined")
  }
  anyValue := MetadataSchema_initialize()
  anyValue.Any = true
  omittedAny := anyValue.WithOptional(true)
  if omittedAny.IsRequired() || !omittedAny.Any || !anyValue.IsRequired() {
    t.Fatal("any value type erased contextual omission")
  }
  var missing *MetadataSchema
  if missing.WithOptional(true) != nil {
    t.Fatal("nil root became a schema")
  }
}
