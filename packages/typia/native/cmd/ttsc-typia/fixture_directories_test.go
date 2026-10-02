package main

import (
  "fmt"
  "os"
  "path/filepath"
  "sync"
  "testing"
)

var fixtureDependencies struct {
  sync.Once
  root string
  err  error
}

// TestMain releases the shared declaration inputs after all command tests finish.
// Fixtures have separate writable directories and never modify the dependency
// copies. This is the runner's lifecycle hook, not an additional regression case.
//
//  1. Run the command test population through testing.M.Run.
//  2. Remove the process-owned dependency directory and return the runner status,
//     promoting a cleanup failure to a failing exit status.
//
// @evidence contracts/testing.md#behavioral-verification The hook runs existing Test functions through M.Run and preserves their failure status. Its additional observable responsibility is removal of shared dependency inputs; removal errors fail the process. It owns no independent semantic assertion.
// @evidence contracts/testing.md#independent-expectations Go testing defines M.Run as the owner of the population's exit status. Dependency inputs come from current source and installed manifests and supply no expected transform results; individual cases retain their authored expectations.
// @evidence contracts/testing.md#distinguishing-cases The hook retains successful and failing runner statuses and makes cleanup failure observable. Semantic positive, negative and boundary distinctions remain with the existing Test functions; this hook adds no semantic case.
// @evidence contracts/testing.md#execution-ownership Go invokes TestMain once for this command package. Fixtures call Go operations in process, use separate writable directories with t.Cleanup, and share declaration inputs copied once. No compiler subprocess or native artifact build is introduced.
func TestMain(m *testing.M) {
  code := m.Run()
  if fixtureDependencies.root != "" {
    if err := os.RemoveAll(fixtureDependencies.root); err != nil {
      fmt.Fprintf(os.Stderr, "remove command test dependencies: %v\n", err)
      code = 1
    }
  }
  os.Exit(code)
}

// ttscTypiaTestFixtureDirectory creates an isolated project beside declaration
// inputs copied once for this Go test process. Ordinary node_modules resolution
// reaches current workspace sources, while a fixture's own package remains
// nearer and can deliberately replace them. No symlink privilege or repository
// ancestor layout is required on Windows or POSIX.
func ttscTypiaTestFixtureDirectory(t *testing.T, prefix string) string {
  t.Helper()
  fixtureDependencies.Do(func() {
    fixtureDependencies.root, fixtureDependencies.err = os.MkdirTemp("", "typia-command-tests-")
    if fixtureDependencies.err != nil {
      return
    }
    repo := ttscTypiaTestRepoRoot(t)
    modules := filepath.Join(fixtureDependencies.root, "node_modules")
    for _, entry := range []struct{ source, name string }{
      {filepath.Join(repo, "packages", "typia"), "typia"},
      {filepath.Join(repo, "packages", "interface"), filepath.Join("@typia", "interface")},
      {filepath.Join(repo, "packages", "utils"), filepath.Join("@typia", "utils")},
    } {
      target := filepath.Join(modules, entry.name)
      if err := os.CopyFS(filepath.Join(target, "src"), os.DirFS(filepath.Join(entry.source, "src"))); err != nil {
        fixtureDependencies.err = err
        return
      }
      manifest, err := os.ReadFile(filepath.Join(entry.source, "package.json"))
      if err == nil {
        err = os.WriteFile(filepath.Join(target, "package.json"), manifest, 0o644)
      }
      if err != nil {
        fixtureDependencies.err = err
        return
      }
    }
    dependencyRoots := []string{
      filepath.Join(repo, "packages", "typia", "node_modules"),
      filepath.Join(repo, "node_modules"),
    }
    for _, name := range []string{filepath.Join("@types", "node"), "randexp"} {
      source, err := ttscTypiaTestDependencyPath(filepath.Join(dependencyRoots[0], name))
      if err != nil {
        fixtureDependencies.err = err
        return
      }
      parent := filepath.Dir(source)
      if filepath.Base(parent) == "@types" {
        parent = filepath.Dir(parent)
      }
      dependencyRoots = append(dependencyRoots, parent)
    }
    for _, name := range []string{filepath.Join("@types", "node"), "undici-types", "randexp", "ret", "drange"} {
      var source string
      for _, root := range dependencyRoots {
        candidate := filepath.Join(root, name)
        if _, err := os.Stat(candidate); err == nil {
          source = candidate
          break
        }
      }
      if source == "" {
        fixtureDependencies.err = fmt.Errorf("command test dependency %s is not installed in %v", name, dependencyRoots)
        return
      }
      source, err := ttscTypiaTestDependencyPath(source)
      if err != nil {
        fixtureDependencies.err = err
        return
      }
      if err := os.CopyFS(filepath.Join(modules, name), os.DirFS(source)); err != nil {
        fixtureDependencies.err = err
        return
      }
    }
  })
  if fixtureDependencies.err != nil {
    t.Fatalf("prepare command test declaration dependencies: %v", fixtureDependencies.err)
  }
  dir, err := os.MkdirTemp(fixtureDependencies.root, prefix)
  if err != nil {
    t.Fatalf("create command fixture: %v", err)
  }
  t.Cleanup(func() {
    if err := os.RemoveAll(dir); err != nil {
      t.Errorf("remove command fixture: %v", err)
    }
  })
  return dir
}

// ttscTypiaTestDependencyPath resolves both symlinks and directory junctions.
// EvalSymlinks preserves Windows junction spellings, whereas Readlink exposes
// their target so the installed package's sibling dependencies can be found.
func ttscTypiaTestDependencyPath(source string) (string, error) {
  source, err := filepath.EvalSymlinks(source)
  if err != nil {
    return "", err
  }
  seen := map[string]bool{}
  for {
    if seen[source] {
      return "", fmt.Errorf("cyclic dependency link at %s", source)
    }
    seen[source] = true
    target, err := os.Readlink(source)
    if err != nil {
      return source, nil
    }
    if !filepath.IsAbs(target) {
      target = filepath.Join(filepath.Dir(source), target)
    }
    source, err = filepath.EvalSymlinks(target)
    if err != nil {
      return "", err
    }
  }
}
