//--------------------------------------------------
// DEODERS
//--------------------------------------------------
function TagType$decode(r,l){
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
  m.int=r.int32()
  break
  }
  case 2: {
  m.uint=r.uint32()
  break
  }
  case 3: {
  m.int32=r.int32()
  break
  }
  case 4: {
  m.uint32=r.uint32()
  break
  }
  case 5: {
  m.int64=r.int64()
  break
  }
  case 6: {
  m.uint64=r.uint64()
  break
  }
  case 7: {
  m.float=r.float()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("int"))
  throw util.ProtocolError("missing required 'int'",{instance:m})
  if(!m.hasOwnProperty("uint"))
  throw util.ProtocolError("missing required 'uint'",{instance:m})
  if(!m.hasOwnProperty("int32"))
  throw util.ProtocolError("missing required 'int32'",{instance:m})
  if(!m.hasOwnProperty("uint32"))
  throw util.ProtocolError("missing required 'uint32'",{instance:m})
  if(!m.hasOwnProperty("int64"))
  throw util.ProtocolError("missing required 'int64'",{instance:m})
  if(!m.hasOwnProperty("uint64"))
  throw util.ProtocolError("missing required 'uint64'",{instance:m})
  if(!m.hasOwnProperty("float"))
  throw util.ProtocolError("missing required 'float'",{instance:m})
  return m
}

//--------------------------------------------------
// ENCODERS
//--------------------------------------------------
function TagType$encode(m,w){
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
  w.uint32(8).int32(m.int)
  w.uint32(16).uint32(m.uint)
  w.uint32(24).int32(m.int32)
  w.uint32(32).uint32(m.uint32)
  w.uint32(40).int64(m.int64)
  w.uint32(48).uint64(m.uint64)
  w.uint32(61).float(m.float)
  return w
}