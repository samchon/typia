//--------------------------------------------------
// DEODERS
//--------------------------------------------------
function TagAtomicUnion$decode(r,l){
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
  m.v1=r.double()
  break
  }
  case 2: {
  m.v2=r.string()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}

//--------------------------------------------------
// ENCODERS
//--------------------------------------------------
function TagAtomicUnion$encode(m,w){
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
  if(m.v1!=null&&Object.hasOwnProperty.call(m,"v1"))
  w.uint32(9).double(m.v1)
  if(m.v2!=null&&Object.hasOwnProperty.call(m,"v2"))
  w.uint32(18).string(m.v2)
  return w
}