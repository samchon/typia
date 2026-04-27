package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func json_schema_discriminator(property string, mapping map[string]string) h.Schema {
	return h.Schema{"propertyName": property, "mapping": mapping}
}
