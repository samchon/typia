//--------------------------------------------------
// DEODERS
//--------------------------------------------------
function ClassPropertyAssignment$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.id=r.double()
  break
  }
  case 2: {
  m.name=r.string()
  break
  }
  case 3: {
  m.note=r.string()
  break
  }
  case 4: {
  m.editable=r.bool()
  break
  }
  case 5: {
  m.incremental=r.bool()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("id"))
  throw util.ProtocolError("missing required 'id'",{instance:m})
  if(!m.hasOwnProperty("name"))
  throw util.ProtocolError("missing required 'name'",{instance:m})
  if(!m.hasOwnProperty("note"))
  throw util.ProtocolError("missing required 'note'",{instance:m})
  if(!m.hasOwnProperty("editable"))
  throw util.ProtocolError("missing required 'editable'",{instance:m})
  if(!m.hasOwnProperty("incremental"))
  throw util.ProtocolError("missing required 'incremental'",{instance:m})
  return m
}

//--------------------------------------------------
// ENCODERS
//--------------------------------------------------
function ClassPropertyAssignment$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(9).double(m.id)
  w.uint32(18).string(m.name)
  w.uint32(26).string(m.note)
  w.uint32(32).bool(m.editable)
  w.uint32(40).bool(m.incremental)
  return w
}