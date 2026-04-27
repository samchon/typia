package programmers

import "strings"

type ImportProgrammer struct {
	assets  map[string]*importProgrammerAsset
	options ImportProgrammerOptions
}

type ImportProgrammerOptions struct {
	InternalPrefix string
	Runtime        *string
}

type ImportProgrammerDefault struct {
	File string
	Name string
	Type bool
}

type ImportProgrammerInstance struct {
	File  string
	Name  string
	Alias *string
}

type ImportProgrammerNamespace struct {
	File string
	Name string
}

type importProgrammerAsset struct {
	File      string
	Default   *ImportProgrammerDefault
	Namespace *ImportProgrammerNamespace
	Instances map[string]ImportProgrammerInstance
}

func NewImportProgrammer(options *ImportProgrammerOptions) *ImportProgrammer {
	next := ImportProgrammerOptions{}
	if options != nil {
		next = *options
	}
	return &ImportProgrammer{
		assets:  map[string]*importProgrammerAsset{},
		options: next,
	}
}

func (importer *ImportProgrammer) Default(props ImportProgrammerDefault) string {
	asset := importer.take(props.File)
	if asset.Default == nil {
		copied := props
		asset.Default = &copied
	}
	if asset.Default.Type == false {
		asset.Default.Type = props.Type
	}
	return asset.Default.Name
}

func (importer *ImportProgrammer) Instance(props ImportProgrammerInstance) string {
	alias := props.Name
	if props.Alias != nil {
		alias = *props.Alias
	}
	asset := importer.take(props.File)
	if _, ok := asset.Instances[alias]; !ok {
		asset.Instances[alias] = props
	}
	return alias
}

func (importer *ImportProgrammer) Namespace(props ImportProgrammerNamespace) string {
	asset := importer.take(props.File)
	if asset.Namespace == nil {
		copied := props
		asset.Namespace = &copied
	}
	return asset.Namespace.Name
}

func (importer *ImportProgrammer) Type(props struct {
	File      string
	Name      string
	Arguments []string
}) string {
	if len(props.Arguments) == 0 {
		return `import("` + props.File + `").` + props.Name
	}
	return `import("` + props.File + `").` + props.Name + "<" + strings.Join(props.Arguments, ", ") + ">"
}

func (importer *ImportProgrammer) Internal(name string) string {
	if strings.HasPrefix(name, "_") == false {
		name = "_" + name
	}
	namespace := importer.Namespace(ImportProgrammerNamespace{
		File: "typia/lib/internal/" + name,
		Name: importer.alias(name),
	})
	return namespace + "." + name
}

func (importer *ImportProgrammer) GetInternalText(name string) string {
	if strings.HasPrefix(name, "_") == false {
		name = "_" + name
	}
	asset := importer.take("typia/lib/internal/" + name)
	if asset.Namespace == nil {
		panic("Internal asset not found: " + name)
	}
	return asset.Namespace.Name + "." + name
}

func (importer *ImportProgrammer) ToStatements() []string {
	statements := []string{}
	for _, asset := range importer.assets {
		if asset.Namespace != nil {
			statements = append(statements, `import * as `+asset.Namespace.Name+` from "`+asset.File+`";`)
		}
		if asset.Default != nil {
			prefix := ""
			if asset.Default.Type {
				prefix = "type "
			}
			statements = append(statements, `import `+prefix+asset.Default.Name+` from "`+asset.File+`";`)
		}
		if len(asset.Instances) != 0 {
			instances := make([]string, 0, len(asset.Instances))
			for _, ins := range asset.Instances {
				alias := ins.Name
				if ins.Alias != nil {
					alias = *ins.Alias
				}
				if ins.Alias != nil && *ins.Alias != ins.Name {
					instances = append(instances, ins.Name+" as "+alias)
				} else {
					instances = append(instances, alias)
				}
			}
			statements = append(statements, `import { `+strings.Join(instances, ", ")+` } from "`+asset.File+`";`)
		}
	}
	return statements
}

func (importer *ImportProgrammer) take(file string) *importProgrammerAsset {
	if importer.assets == nil {
		importer.assets = map[string]*importProgrammerAsset{}
	}
	if asset, ok := importer.assets[file]; ok {
		return asset
	}
	asset := &importProgrammerAsset{
		File:      file,
		Instances: map[string]ImportProgrammerInstance{},
	}
	importer.assets[file] = asset
	return asset
}

func (importer *ImportProgrammer) alias(name string) string {
	return "__" + importer.options.InternalPrefix + name
}
