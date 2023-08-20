//--------------------------------------------------
// DEODERS
//--------------------------------------------------
function TagArray$decode(r,l){
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
  if(!(m.items&&m.items.length))
  m.items=[]
  m.items.push(r.string())
  break
  }
  case 2: {
  if(!(m.minItems&&m.minItems.length))
  m.minItems=[]
  if((t&7)===2){
  var c2=r.uint32()+r.pos
  while(r.pos<c2)
  m.minItems.push(r.double())
  }else
  m.minItems.push(r.double())
  break
  }
  case 3: {
  if(!(m.both&&m.both.length))
  m.both=[]
  m.both.push(r.string())
  break
  }
  case 4: {
  if(!(m.equal&&m.equal.length))
  m.equal=[]
  if((t&7)===2){
  var c2=r.uint32()+r.pos
  while(r.pos<c2)
  m.equal.push(r.double())
  }else
  m.equal.push(r.double())
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
function TagArray$encode(m,w){
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
  if(m.items!=null&&m.items.length){
  for(var i=0;i<m.items.length;++i)
  w.uint32(10).string(m.items[i])
  }
  if(m.minItems!=null&&m.minItems.length){
  w.uint32(18).fork()
  for(var i=0;i<m.minItems.length;++i)
  w.double(m.minItems[i])
  w.ldelim()
  }
  if(m.both!=null&&m.both.length){
  for(var i=0;i<m.both.length;++i)
  w.uint32(26).string(m.both[i])
  }
  if(m.equal!=null&&m.equal.length){
  w.uint32(34).fork()
  for(var i=0;i<m.equal.length;++i)
  w.double(m.equal[i])
  w.ldelim()
  }
  return w
}