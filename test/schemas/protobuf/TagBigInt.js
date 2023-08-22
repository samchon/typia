//--------------------------------------------------
// DEODERS
//--------------------------------------------------
function TagBigInt$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.value=r.int64()
  break
  }
  case 2: {
  m.ranged=r.int64()
  break
  }
  case 3: {
  m.minimum=r.int64()
  break
  }
  case 4: {
  m.maximum=r.int64()
  break
  }
  case 5: {
  m.multipleOf=r.int64()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("value"))
  throw util.ProtocolError("missing required 'value'",{instance:m})
  if(!m.hasOwnProperty("ranged"))
  throw util.ProtocolError("missing required 'ranged'",{instance:m})
  if(!m.hasOwnProperty("minimum"))
  throw util.ProtocolError("missing required 'minimum'",{instance:m})
  if(!m.hasOwnProperty("maximum"))
  throw util.ProtocolError("missing required 'maximum'",{instance:m})
  if(!m.hasOwnProperty("multipleOf"))
  throw util.ProtocolError("missing required 'multipleOf'",{instance:m})
  return m
}

//--------------------------------------------------
// ENCODERS
//--------------------------------------------------
function TagBigInt$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(8).int64(m.value)
  w.uint32(16).int64(m.ranged)
  w.uint32(24).int64(m.minimum)
  w.uint32(32).int64(m.maximum)
  w.uint32(40).int64(m.multipleOf)
  return w
}