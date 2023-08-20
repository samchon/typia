//--------------------------------------------------
// DEODERS
//--------------------------------------------------
function TagStep$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  if(!(m.value&&m.value.length))
  m.value=[]
  m.value.push(types[0].decode(r,r.uint32()))
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
function Type$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.exclusiveMinimum=r.double()
  break
  }
  case 2: {
  m.minimum=r.double()
  break
  }
  case 3: {
  m.range=r.double()
  break
  }
  case 4: {
  m.multipleOf=r.double()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("exclusiveMinimum"))
  throw util.ProtocolError("missing required 'exclusiveMinimum'",{instance:m})
  if(!m.hasOwnProperty("minimum"))
  throw util.ProtocolError("missing required 'minimum'",{instance:m})
  if(!m.hasOwnProperty("range"))
  throw util.ProtocolError("missing required 'range'",{instance:m})
  if(!m.hasOwnProperty("multipleOf"))
  throw util.ProtocolError("missing required 'multipleOf'",{instance:m})
  return m
}

//--------------------------------------------------
// ENCODERS
//--------------------------------------------------
function TagStep$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.value!=null&&m.value.length){
  for(var i=0;i<m.value.length;++i)
  types[0].encode(m.value[i],w.uint32(10).fork()).ldelim()
  }
  return w
}
function Type$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(9).double(m.exclusiveMinimum)
  w.uint32(17).double(m.minimum)
  w.uint32(25).double(m.range)
  w.uint32(33).double(m.multipleOf)
  return w
}