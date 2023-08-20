//--------------------------------------------------
// DEODERS
//--------------------------------------------------
function ObjectOptional$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.id=r.string()
  break
  }
  case 2: {
  m.name=r.string()
  break
  }
  case 3: {
  m.email=r.string()
  break
  }
  case 4: {
  m.sequence=r.double()
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
function ObjectOptional$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.id!=null&&Object.hasOwnProperty.call(m,"id"))
  w.uint32(10).string(m.id)
  if(m.name!=null&&Object.hasOwnProperty.call(m,"name"))
  w.uint32(18).string(m.name)
  if(m.email!=null&&Object.hasOwnProperty.call(m,"email"))
  w.uint32(26).string(m.email)
  if(m.sequence!=null&&Object.hasOwnProperty.call(m,"sequence"))
  w.uint32(33).double(m.sequence)
  return w
}