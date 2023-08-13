//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
function ObjectGenericAlias$encode(m,w){
  if(!w)
  w=Writer.create()
  return w
}

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
function ObjectGenericAlias$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}