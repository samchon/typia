package llm

import (
  "sync"
  "sync/atomic"
  "testing"

  nativellmprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/llm"
)

// TestLlmEvaluationDeclarationProbabilityCache verifies one placement scan
// runs for every transform invocation sharing a program cache.
//
// File callbacks can run concurrently and must receive the same diagnostic
// result without redoing the program-wide scan. A new program gets a new map.
//
//  1. Read the result concurrently through one shared map.
//  2. Require one calculation and identical diagnostics for every reader.
//  3. Require a fresh map and an uncached call to calculate independently.
//
// @evidence contracts/testing.md#behavioral-verification The declaration scan cache is read concurrently through one shared map and through fresh maps; the diagnostics must be identical and the scan count must be one per program.
// @evidence contracts/testing.md#independent-expectations One scan per program and recalculation for a new program are the cache contract; scan counts are observed by an injected counter.
// @evidence contracts/testing.md#distinguishing-cases Shared map versus new program is the pair; the scan result content is fixed by the authored fixture.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It exercises the cache with goroutines in the test process and no checker, filesystem fixture or child process.
func TestLlmEvaluationDeclarationProbabilityCache(t *testing.T) {
  var calls atomic.Int32
  analyze := func() []nativellmprogrammers.LlmEvaluationProgrammer_IError {
    calls.Add(1)
    return []nativellmprogrammers.LlmEvaluationProgrammer_IError{{
      Accessor: "$input",
      Message:  "unsupported declaration",
    }}
  }
  shared := &sync.Map{}
  var group sync.WaitGroup
  for range 16 {
    group.Add(1)
    go func() {
      defer group.Done()
      errors := llmEvaluation_onceDeclarationProbabilityErrors(shared, analyze)
      if len(errors) != 1 || errors[0].Message != "unsupported declaration" {
        t.Errorf("cached diagnostic changed: %+v", errors)
      }
    }()
  }
  group.Wait()
  if count := calls.Load(); count != 1 {
    t.Fatalf("one program must scan once, got %d scans", count)
  }
  llmEvaluation_onceDeclarationProbabilityErrors(&sync.Map{}, analyze)
  llmEvaluation_onceDeclarationProbabilityErrors(nil, analyze)
  if count := calls.Load(); count != 3 {
    t.Fatalf("fresh and uncached programs must recalculate, got %d scans", count)
  }
}
