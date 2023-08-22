//--------------------------------------------------
// DEODERS
//--------------------------------------------------
function TagInfinite$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.value=r.double()
  break
  }
  case 2: {
  m.ranged=r.double()
  break
  }
  case 3: {
  m.minimum=r.double()
  break
  }
  case 4: {
  m.maximum=r.double()
  break
  }
  case 5: {
  m.multipleOf=r.double()
  break
  }
  case 6: {
  m.typed=r.int32()
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
  if(!m.hasOwnProperty("typed"))
  throw util.ProtocolError("missing required 'typed'",{instance:m})
  return m
}

//--------------------------------------------------
// ENCODERS
//--------------------------------------------------
function TagInfinite$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(9).double(m.value)
  w.uint32(17).double(m.ranged)
  w.uint32(25).double(m.minimum)
  w.uint32(33).double(m.maximum)
  w.uint32(41).double(m.multipleOf)
  w.uint32(48).int32(m.typed)
  return w
}