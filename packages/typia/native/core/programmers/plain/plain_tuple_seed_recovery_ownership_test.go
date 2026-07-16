package plain

import (
  "testing"

  shimchecker "github.com/microsoft/typescript-go/shim/checker"
)

// TestPlainTupleSeedRecoveryOwnership verifies impossible checker state panics.
//
// The caller proves tuple ownership before extracting a tuple seed. A missing
// checker is therefore an invariant violation, not an ordinary field-copy
// fallback, and must remain observable.
//
//  1. Supply a tuple-seed type with no owning checker.
//  2. Invoke the ownership-only tuple seed helper.
//  3. Require the checker invariant panic to escape.
func TestPlainTupleSeedRecoveryOwnership(t *testing.T) {
  defer func() {
    if recover() == nil {
      t.Fatal("unexpected tuple seed panic was swallowed")
    }
  }()
  _ = plainClassifyProgrammer_tuple_seed(nil, &shimchecker.Type{})
}
