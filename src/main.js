window.onload=()=>{
  const blockArea=document.getElementById('blockArea');
  const blockDiv=document.getElementById('blockDiv');
  const areas={
    block:document.getElementById('blockArea'),
    text:document.getElementById('textArea')
  };
  const exec=document.getElementById('execButton');
  let workspace=Blockly.inject(blockDiv,{toolbox:toolBox});
  const onResize=e=>{
    let element=blockArea;
    let x=0;
    let y=0;
    do{
      x+=element.offsetLeft;
      y+=element.offsetTop;
      element=element.offsetParent;
    }while(element);
    blockDiv.style.left=x+'px';
    blockDiv.style.top=y+'px';
    blockDiv.style.width=blockArea.offsetWidth+'px';
    blockDiv.style.height=blockArea.offsetHeight+'px';
    Blockly.svgResize(workspace);
  }
  const transpileCode=()=>Blockly.JavaScript.workspaceToCode(workspace);
  const updateCode=()=>{
    const code=transpileCode();
    areas.text.textContent=code
  }
  exec.addEventListener('click',()=>{
    const code=transpileCode();
    eval(code);
  },false);
  window.addEventListener('resize',onResize,false);
  workspace.addChangeListener(updateCode);
  onResize();
}
