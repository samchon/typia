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
//
// @evidence contracts/testing.md#behavioral-verification The tuple seed extraction is called without an owning checker and must panic and not be swallowed.
// @evidence contracts/testing.md#independent-expectations A missing checker is an invariant violation by the caller's contract, so a visible panic is the authored expectation.
// @evidence contracts/testing.md#distinguishing-cases The missing-checker case only.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It calls the helper and recovers the panic inside the test, with no checker, filesystem fixture or process.
func TestPlainTupleSeedRecoveryOwnership(t *testing.T) {
  defer func() {
    if recover() == nil {
      t.Fatal("unexpected tuple seed panic was swallowed")
    }
  }()
  _ = plainClassifyProgrammer_tuple_seed(nil, &shimchecker.Type{})
}
