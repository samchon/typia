package typia_test

import (
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataSchemaUnaliasChasesSingleRequiredAlias verifies alias collapse.
//
// Single required alias metadata should collapse to the alias value when codegen
// needs the underlying shape. Nullable, optional, or multi-bucket aliases are
// intentionally left intact by the unalias helper.
//
// 1. Build an alias whose value is string atomic metadata.
// 2. Wrap it in a required schema containing only that alias.
// 3. Unalias the wrapper.
// 4. Assert the returned metadata is the alias value.
func TestMetadataSchemaUnaliasChasesSingleRequiredAlias(t *testing.T) {
	target := testutil.AtomicMetadata("string")
	alias := metadata.MetadataAliasType_create(metadata.MetadataAliasType{
		Name:  "UserId",
		Value: target,
	})
	wrapper := metadata.MetadataSchema_create(metadata.MetadataSchema{
		Required: true,
		Aliases: []*metadata.MetadataAlias{
			metadata.MetadataAlias_create(metadata.MetadataAlias{Type: alias}),
		},
	})

	if got := metadata.MetadataSchema_unalias(wrapper); got != target {
		t.Fatalf("unalias should return alias value: %#v", got)
	}
}
