package testfatal

import "testing"

// IfFalse fails the calling test with the formatted message when ok is false.
//
// @evidence contracts/testing.md#behavioral-verification IfFalse is a one-branch wrapper over t.Fatalf: it fails the test exactly when its condition is false and otherwise does nothing.
// @evidence contracts/testing.md#independent-expectations The condition and error are supplied by the calling test, so nothing here derives an expectation from the code under test.
// @evidence contracts/testing.md#distinguishing-cases IfFalse owns no case distinction; its callers choose the positive and negative inputs.
// @evidence contracts/testing.md#execution-ownership The helper is compiled into the packages/typia/test module and runs in process inside the calling Go test; it starts no process and builds no native command.
func IfFalse(t *testing.T, ok bool, format string, args ...any) {
  t.Helper()
  if !ok {
    t.Fatalf(format, args...)
  }
}

// IfError fails the calling test with the formatted message when err is non-nil.
//
// @evidence contracts/testing.md#behavioral-verification IfError is a one-branch wrapper over t.Fatalf: it fails the test exactly when the error is non-nil and otherwise does nothing.
// @evidence contracts/testing.md#independent-expectations The condition and error are supplied by the calling test, so nothing here derives an expectation from the code under test.
// @evidence contracts/testing.md#distinguishing-cases IfError owns no case distinction; its callers choose the positive and negative inputs.
// @evidence contracts/testing.md#execution-ownership The helper is compiled into the packages/typia/test module and runs in process inside the calling Go test; it starts no process and builds no native command.
func IfError(t *testing.T, err error, format string, args ...any) {
  t.Helper()
  if err != nil {
    t.Fatalf(format, args...)
  }
}
