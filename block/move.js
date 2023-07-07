Blockly.defineBlocksWithJsonArray([{
  'type':'move_to',
  'colour':'360',
  'previousStatement':null,
  'nextStatement':null,
  'message0':'x座標を %1 、y座標を %2 にする',
  'args0':[{
    'type':'field_number',
    'name':'X',
  },{
    'type':'field_number',
    'name':'Y',
  }]
},{
  'type':'controls_prepare',
  'colour':'360',
  'previousStatement':null,
  'nextStatement':null,
  'message0':'ブロックの準備'
},{
  'type':'controls_wait',
  'colour':'360',
  'previousStatement':null,
  'nextStatement':null,
  'message0':'%1 秒間待つ',
  'args0':[{
    'type':'field_number',
    'name':'X'
  }]
},{
  'type':'move_x_to',
  'colour':'360',
  'previousStatement':null,
  'nextStatement':null,
  'message0':'x座標を %1 に変える',
  'args0':[{'type':'field_number','name':'X'}]
},{
  'type':'move_y_to',
  'colour':'360',
  'previousStatement':null,
  'nextStatement':null,
  'message0':'y座標を %1 に変える',
  'args0':[{'type':'field_number','name':'Y'}]
}]);

Blockly.JavaScript['move_to']=function(block){
  const X=block.getFieldValue('X');
  const Y=block.getFieldValue('Y');
  const code='moveTo('+X+','+Y+');';
  return code;
};
Blockly.JavaScript['move_x_to']=function(block){
  const X=block.getFieldValue('X');
  const code='moveTo('+X+',null);'
  return code;
};
Blockly.JavaScript['move_y_to']=function(block){
  const Y=block.getFieldValue('Y');
  const code='moveTo(null,'+Y+');';
  return code
}
Blockly.JavaScript['controls_wait']=function(block){
  const time=block.getFieldValue('X');
  const code='syncDelay('+time*1000+');';
  return code;
}
Blockly.JavaScript['controls_prepare']=function(block){
  return `function moveTo(x=null,y=null){const img = document.getElementById("img"); img.style.position = "absolute";
  if(x!==null){img.style.top = Math.min(180.5,Math.max(0,x))+"px";}if(y!==null){img.style.left = Math.min(270.5,Math.max(0,y))+"px";}}
function syncDelay(milliseconds){var start = new Date().getTime();var end=0;while( (end-start) < milliseconds){end = new Date().getTime();}}`
}