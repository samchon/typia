package transform

import (
	"io/fs"
	"os"
	"path/filepath"
	"regexp"
	"strings"
)

var TypiaGenerator = typiaGeneratorNamespace{}

type typiaGeneratorNamespace struct{}

type TypiaGeneratorLocation struct {
	Input   string
	Output  string
	Project string
}

func (typiaGeneratorNamespace) Build(location TypiaGeneratorLocation) error {
	input, err := filepath.Abs(location.Input)
	if err != nil {
		return err
	}
	output, err := filepath.Abs(location.Output)
	if err != nil {
		return err
	}
	if ok, err := isDirectory(input); err != nil || !ok {
		if err != nil {
			return err
		}
		return &os.PathError{Op: "TypiaGenerator.build", Path: input, Err: fs.ErrInvalid}
	}
	if ok, _ := isDirectory(output); !ok {
		if err := os.MkdirAll(output, 0o755); err != nil {
			return err
		}
	}
	return gather(TypiaGeneratorLocation{Input: input, Output: output, Project: location.Project}, input, output)
}

func isDirectory(current string) (bool, error) {
	stat, err := os.Stat(current)
	if err != nil {
		return false, err
	}
	return stat.IsDir(), nil
}

func gather(location TypiaGeneratorLocation, from string, to string) error {
	if filepath.Clean(from) == filepath.Clean(location.Output) {
		return nil
	}
	if err := os.MkdirAll(to, 0o755); err != nil {
		return err
	}
	entries, err := os.ReadDir(from)
	if err != nil {
		return err
	}
	for _, entry := range entries {
		next := filepath.Join(from, entry.Name())
		target := filepath.Join(to, entry.Name())
		if entry.IsDir() {
			if err := gather(location, next, target); err != nil {
				return err
			}
			continue
		}
		if isSupportedExtension(entry.Name()) {
			content, err := os.ReadFile(next)
			if err != nil {
				return err
			}
			transformed := ImportTransformer.Cleanup(string(content))
			if err := os.WriteFile(target, []byte(transformed), 0o644); err != nil {
				return err
			}
		}
	}
	return nil
}

func isSupportedExtension(filename string) bool {
	return tsPattern.MatchString(filename) && !dtsPattern.MatchString(filename) && !strings.Contains(filename, ".d.")
}

var tsPattern = regexp.MustCompile(`\.[cm]?tsx?$`)
var dtsPattern = regexp.MustCompile(`\.d\.[cm]?tsx?$`)
