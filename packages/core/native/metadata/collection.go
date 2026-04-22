package metadata

// Collection is ttsc's port of `MetadataCollection`. It stores every distinct
// object/array/tuple/alias discovered during analysis so recursive structures
// close under the same pointer, and is the source of truth for name
// deduplication.
//
// Note: the full TS version also tracks object unions and recursive indexes;
// those are wired in as the analyzer grows.
type Collection struct {
	objects map[string]*ObjectType
	arrays  map[string]*ArrayType
	tuples  map[string]*TupleType
	aliases map[string]*AliasType

	nextObjectIndex  int
	nameCounts       map[string]int
	reservedSuffixes map[string]struct{}
}

// NewCollection returns a fresh registry.
func NewCollection() *Collection {
	return &Collection{
		objects:          make(map[string]*ObjectType),
		arrays:           make(map[string]*ArrayType),
		tuples:           make(map[string]*TupleType),
		aliases:          make(map[string]*AliasType),
		nameCounts:       make(map[string]int),
		reservedSuffixes: make(map[string]struct{}),
	}
}

// Objects returns a slice of the collected object types in insertion order.
func (c *Collection) Objects() []*ObjectType {
	out := make([]*ObjectType, 0, len(c.objects))
	for _, o := range c.objects {
		out = append(out, o)
	}
	return out
}

// Arrays returns a slice of the collected array types.
func (c *Collection) Arrays() []*ArrayType {
	out := make([]*ArrayType, 0, len(c.arrays))
	for _, a := range c.arrays {
		out = append(out, a)
	}
	return out
}

// Tuples returns a slice of the collected tuple types.
func (c *Collection) Tuples() []*TupleType {
	out := make([]*TupleType, 0, len(c.tuples))
	for _, t := range c.tuples {
		out = append(out, t)
	}
	return out
}

// Aliases returns a slice of the collected alias types.
func (c *Collection) Aliases() []*AliasType {
	out := make([]*AliasType, 0, len(c.aliases))
	for _, a := range c.aliases {
		out = append(out, a)
	}
	return out
}

// EmplaceObject looks up or inserts an object type by a caller-chosen key
// (typically the TypeScript full name or a stable handle derived from the
// checker). Returns (type, isFresh).
func (c *Collection) EmplaceObject(key, name string) (*ObjectType, bool) {
	if existing, ok := c.objects[key]; ok {
		return existing, false
	}
	obj := &ObjectType{
		Name:      uniqueName(c, name),
		Index:     c.nextObjectIndex,
		Nullables: []bool{},
	}
	c.nextObjectIndex++
	c.objects[key] = obj
	return obj, true
}

// EmplaceArray looks up or inserts an array type.
func (c *Collection) EmplaceArray(key, name string) (*ArrayType, bool) {
	if existing, ok := c.arrays[key]; ok {
		return existing, false
	}
	arr := &ArrayType{Name: uniqueName(c, name), Nullables: []bool{}}
	c.arrays[key] = arr
	return arr, true
}

// EmplaceTuple looks up or inserts a tuple type.
func (c *Collection) EmplaceTuple(key, name string) (*TupleType, bool) {
	if existing, ok := c.tuples[key]; ok {
		return existing, false
	}
	tuple := &TupleType{Name: uniqueName(c, name), Nullables: []bool{}}
	c.tuples[key] = tuple
	return tuple, true
}

// EmplaceAlias looks up or inserts an alias type.
func (c *Collection) EmplaceAlias(key, name string) (*AliasType, bool) {
	if existing, ok := c.aliases[key]; ok {
		return existing, false
	}
	alias := &AliasType{Name: uniqueName(c, name), Nullables: []bool{}}
	c.aliases[key] = alias
	return alias, true
}

// uniqueName returns a disambiguated version of `base`. Duplicates are suffixed
// `base.o1`, `base.o2`, ... (matches typia's `{name}.o{n}` convention).
func uniqueName(c *Collection, base string) string {
	if c.nameCounts[base] == 0 {
		c.nameCounts[base] = 1
		return base
	}
	suffix := c.nameCounts[base]
	c.nameCounts[base]++
	return base + ".o" + intString(int64(suffix))
}
