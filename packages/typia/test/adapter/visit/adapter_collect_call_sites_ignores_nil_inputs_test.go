package typia_test

import (
	"testing"

	typiaadapter "github.com/samchon/typia/packages/typia/native/adapter"
)

// TestAdapterCollectCallSitesIgnoresNilInputs verifies empty source traversal.
//
// The ttsc bridge asks the adapter to collect typia call sites from the
// TypeScript program before attempting native transforms. An empty source set
// should simply produce no work instead of depending on parser state or a
// checker instance.
//
// 1. Call the call-site collector with no source files.
// 2. Pass a nil checker because no AST node can be visited.
// 3. Assert the returned list is empty.
func TestAdapterCollectCallSitesIgnoresNilInputs(t *testing.T) {
	sites := typiaadapter.CollectCallSites(nil, nil)
	if len(sites) != 0 {
		t.Fatalf("nil source input should not produce call sites: %#v", sites)
	}
}
