package transform

import (
  "errors"
  "fmt"
  "os"
  "path/filepath"
  "regexp"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  "github.com/samchon/ttsc/packages/ttsc/driver"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

type typiaGeneratorNamespace struct{}

var TypiaGenerator = typiaGeneratorNamespace{}

type TypiaGenerator_ILocation struct {
  Input   string
  Output  string
  Project string
}

type typiaGenerator_gatherProps struct {
  Location  TypiaGenerator_ILocation
  Container *[]string
  From      string
  To        string
}

var typiaGenerator_TS_PATTERN = regexp.MustCompile(`\.[cm]?tsx?$`)
var typiaGenerator_DTS_PATTERN = regexp.MustCompile(`\.d\.[cm]?tsx?$`)

func (typiaGeneratorNamespace) Build(location TypiaGenerator_ILocation) error {
  var err error
  location.Input, err = filepath.Abs(location.Input)
  if err != nil {
    return err
  }
  location.Output, err = filepath.Abs(location.Output)
  if err != nil {
    return err
  }
  location.Project, err = filepath.Abs(location.Project)
  if err != nil {
    return err
  }

  if ok, err := typiaGenerator_is_directory(location.Input); err != nil || ok == false {
    return errors.New("Error on TypiaGenerator.generate(): input path is not a directory.")
  }
  if _, err := os.Stat(location.Output); errors.Is(err, os.ErrNotExist) {
    if err := os.MkdirAll(location.Output, 0o755); err != nil {
      return err
    }
  } else if err != nil {
    return err
  } else if ok, err := typiaGenerator_is_directory(location.Output); err != nil || ok == false {
    return errors.New("Error on TypiaGenerator.generate(): output path is not a directory.")
  }

  container := []string{}
  if err := typiaGenerator_gather(typiaGenerator_gatherProps{
    Location:  location,
    Container: &container,
    From:      location.Input,
    To:        location.Output,
  }); err != nil {
    return err
  }

  program, diagnostics, err := driver.LoadProgram(filepath.Dir(location.Project), filepath.Base(location.Project), driver.LoadProgramOptions{
    ForceEmit: true,
  })
  if err != nil {
    return err
  }
  if program != nil {
    defer program.Close()
  }
  if len(diagnostics) != 0 {
    return fmt.Errorf("TypiaGenerator.generate(): %s", diagnostics[0].String())
  }

  transformDiagnostics := []*shimast.Diagnostic{}
  plugin := Transform(program, nil, nativecontext.ITypiaContext_Extras{
    AddDiagnostic: func(diag *shimast.Diagnostic) int {
      transformDiagnostics = append(transformDiagnostics, diag)
      return len(transformDiagnostics)
    },
  })

  // Transform every file first, collecting the rendered output, so that a
  // failure on a later file does not leave a partial output tree behind.
  type typiaGeneratorArtifact struct {
    To   string
    Text string
    From string
  }
  artifacts := make([]typiaGeneratorArtifact, 0, len(container))
  for _, file := range container {
    to := filepath.Join(location.Output, strings.TrimPrefix(file, location.Input))
    source := program.SourceFile(filepath.ToSlash(file))
    if source == nil {
      // Not part of the program (e.g. unresolved): copy the original bytes.
      artifacts = append(artifacts, typiaGeneratorArtifact{To: to, From: file})
      continue
    }
    transformed := plugin(source)
    if len(transformDiagnostics) != 0 {
      return fmt.Errorf("TypiaGenerator.generate(): typia transform failed for %s", file)
    }
    if transformed == nil {
      transformed = source
    }
    artifacts = append(artifacts, typiaGeneratorArtifact{
      To:   to,
      Text: typiaGenerator_emit(transformed),
    })
  }

  for _, artifact := range artifacts {
    if artifact.From != "" {
      if err := typiaGenerator_copy(artifact.From, artifact.To); err != nil {
        return err
      }
      continue
    }
    if err := os.MkdirAll(filepath.Dir(artifact.To), 0o755); err != nil {
      return err
    }
    if err := os.WriteFile(artifact.To, []byte(artifact.Text), 0o644); err != nil {
      return err
    }
  }
  return nil
}

func typiaGenerator_emit(file *shimast.SourceFile) string {
  printer := shimprinter.NewPrinter(shimprinter.PrinterOptions{
    NewLine: 2,
  }, shimprinter.PrintHandlers{}, nil)
  return shimprinter.EmitSourceFile(printer, file)
}

func typiaGenerator_is_directory(current string) (bool, error) {
  stat, err := os.Stat(current)
  if err != nil {
    return false, err
  }
  return stat.IsDir(), nil
}

func typiaGenerator_gather(props typiaGenerator_gatherProps) error {
  if filepath.Clean(props.From) == filepath.Clean(props.Location.Output) {
    return nil
  }
  if _, err := os.Stat(props.To); errors.Is(err, os.ErrNotExist) {
    if err := os.MkdirAll(props.To, 0o755); err != nil {
      return err
    }
  }
  files, err := os.ReadDir(props.From)
  if err != nil {
    return err
  }
  for _, file := range files {
    next := filepath.Join(props.From, file.Name())
    if file.IsDir() {
      if err := typiaGenerator_gather(typiaGenerator_gatherProps{
        Location:  props.Location,
        Container: props.Container,
        From:      next,
        To:        filepath.Join(props.To, file.Name()),
      }); err != nil {
        return err
      }
      continue
    }
    if typiaGenerator_is_supported_extension(file.Name()) {
      *props.Container = append(*props.Container, next)
    }
  }
  return nil
}

func typiaGenerator_is_supported_extension(filename string) bool {
  return typiaGenerator_TS_PATTERN.MatchString(filename) && typiaGenerator_DTS_PATTERN.MatchString(filename) == false
}

func typiaGenerator_copy(from string, to string) error {
  data, err := os.ReadFile(from)
  if err != nil {
    return err
  }
  if err := os.MkdirAll(filepath.Dir(to), 0o755); err != nil {
    return err
  }
  return os.WriteFile(to, data, 0o644)
}
